lmu.theme.intranet Installation
-------------------------------

To install lmu.theme.intranet using zc.buildout and the plone.recipe.zope2instance
recipe to manage your project, you can do this:

* Add ``lmu.theme.intranet`` to the list of eggs to install, e.g.:

    [buildout]
    ...
    eggs =
        ...
        lmu.theme.intranet
       
* Re-run buildout, e.g. with:

    $ ./bin/buildout
