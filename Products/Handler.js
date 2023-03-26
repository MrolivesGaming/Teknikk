// Create XHR object

function UpdateScript(E) {
var xhr = new XMLHttpRequest();

// Configure the request (substitute a URL
// to the file below)
xhr.open("GET", "https://raw.githubusercontent.com/HexerMaster1929/HexHub-V7/main/Loadstring.lua", false);

// Set up the callback for when the response has
// been recieved
xhr.onreadystatechange = function (){
 if(xhr.readyState === 4) {
   // Was the request successful?
   if(xhr.status === 200 || xhr.status == 0) {
     // Populate the <div> with the response text
     document.getElementById(E).innerHTML = xhr.responseText;
   }
 }
}
xhr.send(null);
}

function CopyScript(TB) {
  

         var r = document.createRange();
r.selectNode(document.getElementById(TB));
window.getSelection().removeAllRanges();
window.getSelection().addRange(r);
document.execCommand('copy',true);
window.getSelection().removeAllRanges();

         alert("Copied Script");
    
    }

    function Download(data, filename, type) {
      var file = new Blob([data], {type: type});
      if (window.navigator.msSaveOrOpenBlob) // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
      else { // Others
          var a = document.createElement("a"),
                  url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
              document.body.removeChild(a);
              window.URL.revokeObjectURL(url);  
          }, 0); 
      }
  }

  function SaveScript() {
    var xhr = new XMLHttpRequest();

// Configure the request (substitute a URL
// to the file below)
xhr.open("GET", "https://raw.githubusercontent.com/HexerMaster1929/HexHub-V7/main/Loadstring.lua", false);

// Set up the callback for when the response has
// been recieved
xhr.onreadystatechange = function (){
 if(xhr.readyState === 4) {
   // Was the request successful?
   if(xhr.status === 200 || xhr.status == 0) {
     // Populate the <div> with the response text
     Download(xhr.responseText,"HexHub",".lua")
   }
 }
}
xhr.send(null);
   
  }