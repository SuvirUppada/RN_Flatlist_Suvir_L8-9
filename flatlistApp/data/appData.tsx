/* 
this file will include our dataTypes that are used 
across mulitple files

we can also declare arrays or other variables here
*/

type dataType = {
    id: string; // unique identifier for each element in list (student)
    title: string; // what I display
  };

  const DATA: dataType[] = [
    { id: "1", title: "First" },
    { id: "2", title: "Second" },
    { id: "3", title: "Third" },
    { id: "4", title: "Fourth" },
    { id: "5", title: "Fifth" },
  ];







  //because I am exporting multiple items from the same file 
  //thats why I am not using the word defualt
  export {dataType, DATA}