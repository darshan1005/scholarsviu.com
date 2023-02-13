function showpswd(){
    var a = document.getElementById("pswd");
    var b = document.getElementById("pswd1");
    if(a.type && b.type == "password"){
        a.type = "text";
        b.type = "text";
    }
    else{
        a.type = "password";
        b.type = "password";
    }
}
