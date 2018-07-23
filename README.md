Municipalities in Finland
=========================

This repository contains a database of Finnish municipalities in JSON format, based on [open data](https://www.avoindata.fi/data/en_GB/dataset/kunnat) by Finnish public administration.

Install
-------

`npm i finland-municipalities`

Format
------

Requiring or importing the module returns an object with munipalicity code as key and object of properties as value. An example:
	
	{
	  "5": {
	    "KUNTANIMIFI": "Alajärvi",
	    "KUNTANIMISV": "Alajärvi",
	    "KUNTAMUOTO": "Kaupunki",
	    "KIELISYYS": "suomi",
	    "VAALIPIIRINRO": "10",
	    "VAALIPIIRIFI": "Vaasan vaalipiiri",
	    "VAALIPIIRISV": "Vasa valkrets",
	    "MAISTRAATTINRO": "794",
	    "MAISTRAATTINIMIFI": "Länsi-Suomen maistraatti",
	    "MAISTRAATTINIMISV": "Magistraten i Västra Finland",
	    "PALVELUYKSIKKÖNRO": "119",
	    "PALVELUYKSIKKÖFI": "Seinäjoen yksikkö",
	    "PALVELUYKSIKKÖSV": "Enheten i Seinäjoki",
	    "MAAKUNTANRO": "13",
	    "MAAKUNTANIMIFI": "Etelä-Pohjanmaa",
	    "MAAKUNTANIMISV": "Södra Österbotten"
	  },
	  ...
	}

Usage
-----

    const municipalities = require('finland-municipalities')

    // Find municipality name by its code
    console.log(municipalities[992].KUNTANIMIFI)
    
    // Iterate over the whole dataset
    Object.entries(municipalities).forEach(([code, record]) => console.log(code, record))
    
