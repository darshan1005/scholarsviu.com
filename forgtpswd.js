function validateForm() {
    let x = document.forms["verify1"]["Email"].value;
    if (x == "") {
      alert("Email must be filled out properly");
    }
    else{
        alert("Your email has verified successfull click the reset button to change the password");
    }
  }
