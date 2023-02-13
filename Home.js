function likeCounter(){
  if(typeof(Storage)!=="undefined"){
    if(localStorage.clickcount){
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    }else{
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML =localStorage.clickcount;
  }else{
    document.getElementById("result").innerHTML = "SORRY , your browser does not support web storage"
  }
}

function deleteItems() {
  localStorage.clear();
}

/*function bookmark(x){
  x.classList-toggle("fa-bookmark")
}*/

function changeColor(){
  document.getElementById("btn1").style.backgroundColor = "green"
  window.alert("BookMark succesfully added");
}

/*function changeColor1(){
  localStorage.setItem("class1","fa-bookmark");
  green = localStorage.getItem("class1");

  var b1 = document.querySelector(".btn");
  b1.classList.add(green);
}*/