function loadJSON(callback) {   
  var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
  xobj.open('GET', '.pwtool', true); // Replace 'my_data' with the path to your file
  xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
  };
  xobj.send(null);
  app.activeDocument.textVariables.item("Script Name").variableOptions.contents = xobj.title;
  app.activeDocument.textVariables.item("Description").variableOptions.contents = xobj.description;
}

//var settings = {title: 'Title',
//                    subtitle: 'Your Subtitle Here'};

//app.activeDocument.textVariables.item("Script Name").variableOptions.contents = xobj.title;
//app.activeDocument.textVariables.item("Description").variableOptions.contents = xobj.description;