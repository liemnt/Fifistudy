# this adapter use for connecting with the databse and the object that we want to use for services layer
# connnect save, get, update, delete database is what this layer 's job
from .film_adapter import FilmAdapter
from .promote_adapter import PromoteAdapter
from .fifi_user_adapter import FifiUserAdapter
from .auth_user_adapter import AuthUserAdapter