#!/bin/sh
PRODUCTNAME='lmu.theme.intranet'
I18NDOMAIN=$PRODUCTNAME

# Synchronise the .pot with the templates.
i18ndude rebuild-pot --exclude resources --pot locales/${PRODUCTNAME}.pot --merge locales/manual.pot --create ${I18NDOMAIN} .

# Synchronise the resulting .pot with the .po files
i18ndude sync --pot locales/${PRODUCTNAME}.pot locales/*/LC_MESSAGES/${PRODUCTNAME}.po

i18ndude sync --pot locales/plone.pot locales/*/LC_MESSAGES/plone.po
i18ndude sync --pot locales/lmu.contenttypes.polls.pot locales/*/LC_MESSAGES/lmu.contenttypes.polls.po

