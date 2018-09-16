function funWebIndex() {
    //alert("this function is called");
    var userInput = document.getElementById("myInput").value;
    var webIndexString = userInput + " -inurl:(htm|html|php|pls|txt) intitle:index.of (3gp|avi|flv|mkv|mov|mp4|mpeg|mpg|wmv)";
    webIndexString = encodeURI(webIndexString);
    webIndexString ="https://www.google.com/search?q=" + webIndexString;
    window.open(webIndexString, '_blank');  
}

function funGoogleDrive() {
    //alert("this function is called");
    var userInput = document.getElementById("myInput").value;
    var googleDriveString = userInput + " site:docs.google.com/document/d";
    googleDriveString = encodeURI(googleDriveString);
    googleDriveString ="https://www.google.com/search?q=" + googleDriveString;
    window.open(googleDriveString, '_blank');    
}
