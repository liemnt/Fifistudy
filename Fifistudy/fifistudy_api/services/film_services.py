from ..models import Film
from ..serializers import BaseFilmSerializer, HomepageListFilmSerializer
from ..adapter import FilmAdapter


class FilmServices:
    def __init__(self):
        self.film_adapter = FilmAdapter()

    def get_list_order_by_view(self, user=None):
        films = self.film_adapter.get_list_order_by_view(user=user)

        serializer = HomepageListFilmSerializer(films, many=True)

        return serializer.data

    def get_list_order_by_save_number(self, user=None):
        films = self.film_adapter.get_list_order_by_saved_number(user=user)

        serializer = HomepageListFilmSerializer(films, many=True)

        return serializer.data