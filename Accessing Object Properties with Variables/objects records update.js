// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
 
//   Only change code below this line
  function updateRecords(records, id, prop, value) {                            // function defined with 4 parameters
    if (prop !== 'tracks' && value !== "") {                                    // if param "prop" is not equal to "tracks" AND param "value" is 
                                                                                //  not empty....then
      records[id][prop] = value;                                                // create/set name "prop" with value "value" in
                                                                                //  recordCollection."id"
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {  // else, if param "prop" is def. equal to "tracks" AND the  
                                                                                       // object does not have param called "tracks"....then
      records[id][prop] = [value];                                                     // create "tracks" name and assign value "value" to it.
    } else if (prop === "tracks" && value !== "") {                             // else, if param "prop" is def. equal to "tracks" AND the param 
                                                                                //  "value" is not empty....then
      records[id][prop].push(value);                                            // add the contents of param "value" to "tracks" name.
                                               
    } else if (value === "") {                                                  // else, if "value" is empty ....then
      delete records[id][prop];                                                 // delete recordCollection.'id'.'prop'.
    }


    return records;
  }
  //        updateRecords(records, id,    prop,   value)
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');          // will add "artist:ABBA" to record 5439
  updateRecords(recordCollection, 5439, 'tracks', 'Waterloo');      // will add "tracks" name with value "Waterloo" to record 5439
  updateRecords(recordCollection, 1245, 'tracks', 'summink');       // will add value "summink" to empty "tracks" name in record 1245
  updateRecords(recordCollection, 2468, 'tracks', "");              // will empty value held in "tracks" name in record 2468
  updateRecords(recordCollection, 1245, 'albumTitle', 'Best Hits'); // will create "albumTitle" name and give it a value of "Best Hits" in record 1245
  console.log(recordCollection);

  // so where a name does not exist, it will be created and populated......where a name does exists but has no value, a value will be added....
//   where a name already has a value, it will be emptied if requested
// can a new name and value be added?
updateRecords(recordCollection, 1245, 'Year', '2001');  // yes
// can a new record be added?
// updateRecords(recordCollection, 1234, 'artist', 'Dr Dre'); no - as record 1234 is undefined.  How to do that? If id = undefined then push? Nope

