function myFunction() {
    var mystring = document.getElementById("myInput").value + " -inurl:(htm|html|php|pls|txt) intitle:index.of “last modified” (3gp|avi|flv|mkv|mov|mp4|mpeg|mpg|wmv)";
    mystring = encodeURI(mystring);
    mystring ="https://www.google.com/search?q=" + mystring;
    //document.getElementById("SearchURLOutput").innerHTML = mystring;
    //window.location.href = mystring;
    window.open(mystring, '_blank');
}
