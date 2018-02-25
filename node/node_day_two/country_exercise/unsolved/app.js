/*

PART 1:

Your application should;
 - Take in one parameter from the command line, the name of a country. 
   Note: command line arguments can be read from the global array process.argv
 - Read and parse the countries.json file. 
   Note: you must use readFile and not readFileSync.
 - Output information about that specific country in the following format:
        Country: <country name>
        Top Level Domain: <tld>

PART 2:

 - For this part, create a separate module for reading and parsing the JSON file, named "json-file-reader".
 - This module should have a function that takes in a filename and a callback function as a parameter. 
 - It should then read that file, then parse the JSON. 
 - Finally, it should invoke the callback function and pass the parsed JSON to it.

One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak.
Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

*/