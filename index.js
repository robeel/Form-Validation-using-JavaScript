
function validateForm() {
    if(validateAge.return==true && validateCnic.return==true && validateName.return==true && validateName.return==true &&validatePassword.return==true)
    {
        alert('Form has sucefully submitted');
    }
    else{
        console.log(
            "Some data is inavlid"
        );
    }
    
  }
  function validateName(){
    var x = document.forms["myForm"]["fname"].value;
    var letters = /^[A-Za-z]+$/;
   
      if(x.match(letters)  )
      return true;
      else{
        alert('Name cannot be be a number or a special character');
      return false;
  }
}
  

  function validateAge(){
    var x = document.getElementById('fage')
    var agelimit = /^[15-70]+$/;
    if(x=="")
    {
        alert('age field is empty');
        return false;
    }
    else
    {
      if(x.match(agelimit)  )
      return true;
      else{
        alert('Age is not valid');
      return false;
  } 
  }
  }
  function validatePassword(){
    var myInput = document.getElementById("fpassword");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    
    // When the user clicks on the password field, show the message box
    myInput.onfocus = function() {
      document.getElementById("message").style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    myInput.onblur = function() {
      document.getElementById("message").style.display = "none";
    }
    
    // When the user starts to type something inside the password field
    myInput.onkeyup = function() {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if(myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
      } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
    
      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if(myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
      }
    
      // Validate numbers
      var numbers = /[0-9]/g;
      if(myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
      } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
      }
    
      // Validate length
      if(myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
      }
    }
  }
  function validateCnic(){
    var x = document.getElementById('fcnic')
    var cnic_no = '12345-1234567-9',
    var cnic_no_regex = /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/;
    if(x=="")
    {
        alert('cnic field is empty');
        return false;
    }
    else{
    if(cnic_no_regex.test(cnic_no)) 
{
   
    return true;
}
else 
{
    alert('Wrong Cnic entered');
    return false;
}
   
  }
}