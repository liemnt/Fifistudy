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

    def get_detail_by_id(self, film_id, user=None):
        film = self.film_adapter.get_detail_by_id(film_id=film_id, user=user)

        serializer = HomepageListFilmSerializer(film, many=False)

        return serializer.data

    def get_detail_by_slug(self, slug, user=None):
        film = self.film_adapter.get_detail_by_slug(slug, user)

        serializer = HomepageListFilmSerializer(film, many=False)

        return serializer.data

    def get_list_by_difficult_level(self, difficult_level):
        films = self.film_adapter.get_list_by_difficult_level(difficult_level=difficult_level)

        serializer = BaseFilmSerializer(films, many=True)

        return serializer.data


