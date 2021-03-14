from .common import *

INSTALLED_APPS += ['debug_toolbar']

MIDDLEWARE = [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
] + MIDDLEWARE  #제일처음 추가하는 식 원래는 저거 없이 += 넣어줌
INTERNAL_IPS = ['127.0.0.1']
