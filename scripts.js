/* Add your JavaScript to this file */
window.onload = function() {
    const emailInput = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const submitButton = document.querySelector("button");
    const messageContainer = document.querySelector(".message");
  
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
  
      if (emailInput.value === "" || !emailPattern.test(emailInput.value)) {messageContainer.textContent = "Please enter a valid email address.";emailInput.value = "";} 
        else {
        messageContainer.textContent = `Thank you! Your email address ${emailInput.value} has been added to our mailing list.`;emailInput.value = "";}
    });
  };