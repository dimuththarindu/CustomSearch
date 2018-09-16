function myFunction() {
    var userInput = document.getElementById("myInput").value;
    var webIndexString = userInput + " -inurl:(htm|html|php|pls|txt) intitle:index.of (3gp|avi|flv|mkv|mov|mp4|mpeg|mpg|wmv)";
    webIndexString = encodeURI(mystring);
    webIndexString ="https://www.google.com/search?q=" + webIndexString;

    var googleDriveString = "site:docs.google.com/document/d";
    googleDriveString = userInput + googleDriveString;
    //document.getElementById("SearchURLOutput").innerHTML = mystring;
    //window.location.href = mystring;
    
    window.open(googleDriveString, '_blank');
    window.open(webIndexstring, '_blank');
    
}
