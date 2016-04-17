#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Dimitris Glezos'
SITENAME = u"Dimitris Glezos' Personal website"
SITEURL = ''

PATH = 'content'

TIMEZONE = 'US/Pacific'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
AUTHOR_PIC_URL = "/theme/glezos_portrait_square.jpg"

# Blogroll
LINKS = (('Transifex', 'http://www.transifex.com/'),
         ('My really old website', 'old'),
)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 25
DEFAULT_DATE_FORMAT = "%a %d %b %Y"

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

THEME = "themes/casper"

STATIC_PATHS = [
    'old',
]

ARTICLE_PATHS = ['articles']