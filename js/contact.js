function validation(){
	var firstName = document.getElementById("fname").value;
	var lastName = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var errorFN = document.getElementById("errorFN");
	var errorLN = document.getElementById("errorLN");
	var errorEmail = document.getElementById("errorEmail");
	var errorMsg = document.getElementById("errorMsg");
	
	
	if(firstName.length < 1){
		errorFN.style.display="block";
		errorLN.style.display="none";
		errorEmail.style.display="none";
		errorMsg.style.display="none";
		return false;
	}
	
	if(lastName.length < 1){
		errorFN.style.display="none";
		errorLN.style.display="block";
		errorEmail.style.display="none";
		errorMsg.style.display="none";
		return false;
	}
	
	if(email.indexOf("@") == -1 || email.length < 6){
		errorFN.style.display="none";
		errorLN.style.display="none";
		errorEmail.style.display="block";
		errorMsg.style.display="none";
		return false;
	}
	
	if(message.length < 1){
		errorFN.style.display="none";
		errorLN.style.display="none";
		errorEmail.style.display="none";
		errorMsg.style.display="block";
		return false;
	}
	alert("Form has been submitted successfully!");
	
	/*alert("test");*/
}