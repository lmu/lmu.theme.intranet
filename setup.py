from setuptools import setup, find_packages
import os

version = '1.0'

setup(name='lmu.theme.intranet',
      version=version,
      description="LMU Theme for ZUV-Intranet",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='Plone Theme LMU ZUV Intranet Diazo',
      author='Alexander Loechel',
      author_email='Alexander.Loechel@lmu.de',
      url='https://github.com/loechel/lmu.theme.intranet',
      license='GPLv2',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['lmu'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-
      [z3c.autoinclude.plugin]
      target = plone
      """,
      )
