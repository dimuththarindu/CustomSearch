function myFunction() {
    var userInput = document.getElementById("myInput").value;
    var webIndexString = userInput + " -inurl:(htm|html|php|pls|txt) intitle:index.of (3gp|avi|flv|mkv|mov|mp4|mpeg|mpg|wmv)";
    webIndexString = encodeURI(userInput);
    webIndexString ="https://www.google.com/search?q=" + webIndexString;

    var googleDriveString = "site:docs.google.com/document/d";
    googleDriveString = userInput + googleDriveString;
    
    window.open(webIndexstring, '_blank');
    window.open(googleDriveString, '_blank');    
    
}
