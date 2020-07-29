var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}

/*form validation on contact section 


// Defining a function to validate form 
function validateForm() {
  // Retrieving the values of form elements 
  var name = document.form.name.value;
  var email = document.form.email.value;
  }
  
// Defining error variables with a default value
  var nameErr = emailErr = true;
  
  // Validate name
  if(name == "") {
    name.setCustomValidity("Please enter a name");
  } else {
      var regex = /^[a-zA-Z\s]+$/;                
      if(regex.test(name) === false) {
        name.setCustomValidity("Please enter a valid name");
      } else {
          printError("nameErr", "");
          nameErr = false;
      }
  }
  
  // Validate email address
  if(email == "") {
      email.setCustomValidity("Please enter your email address");
  } else {
      // Regular expression for basic email validation
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          email.setCustomValidity("Please enter a valid email address");
      } else{
          printError("emailErr", "");
          emailErr = false;
      }
  }
  
  // Prevent the form from being submitted if there are any errors
  if((nameErr || emailErr) == true) {
     return false;
  } else {
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
                        "Full Name: " + name + "\n" +
                        "Email Address: " + email + "\n" ;
    
      // Display input data in a dialog box before submitting the form
      alert(dataPreview);
  }
;
*/