#include "./json.js"
// here's an example of how to load a JSON file
// the first line #includes the JSON library from json.js in this folder

// get the folder name this file is in
var thisFolderParts = $.fileName.split('/');
thisFolderParts.pop();
var thisFolderPath = thisFolderParts.join('/');

// path to test JSON
var path = thisFolderPath+"/test.json";

// load the test JSON to fileString
var file = new File(path);
file.open("r","TEXT");
var fileString = "";
while(!file.eof){
  fileString+=file.readln();
}

// parse the JSON fileString
var parsed = JSON.parse( fileString );

// output a list of things I know 
if(parsed.list && parsed.foo){
  alert('foo = '+parsed.foo+', list = '+parsed.list.join(','));
}else{
  alert('there seems to be a porblem');
}
