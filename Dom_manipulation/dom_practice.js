let emailInput=document.querySelector("#email");
let termInput=document.querySelector("#terms");
// create paragraph to display the error Msg returented by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let emailError=document.createElement('p');
emailError.setAttribute("class","warning");
//append the created element to the parent of email div
document.querySelectorAll(".form-group")[0].append(emailError);

// create paragraph to display the error Msg returented by vaildateTerms() function 
// and assign this paragraph to the class warning to style the error MSg
let termError=document.createElement('p');
termError.setAttribute("class","warning");
//append the created element to the parent of check div
document.querySelectorAll(".form-check")[0].append(termError);

//define a global variables
let termsErrorMsg="terms must be checked";
let defaultMSg="";
let emailErrorMsg="Please enter a valid email";
//method to validate email
function vaildateEmail(){
    let email = emailInput.value; // access the value of the email
    let regexp=/\S+@\S+\.\S+/; //reg. expression 
    
    if(regexp.test(email)){ //test is predefiend method to check if the entered email matches the regexp
    error = defaultMSg;}
    else {
    error = emailErrorMsg;}
    return error;
}
//method to validate the terms 
function validatTerms(){
    if(termInput.checked)
    return defaultMSg;
    else
    return termsErrorMsg;

}
//event handler for submit event
function validate(){
    let valid = true;//global validation 
    let emailValidation=vaildateEmail();
    let termsValidation=validatTerms();
    if(emailValidation !==defaultMSg){
        emailError.textContent = emailValidation;
        valid = false;
    }
    if(termsValidation!==defaultMSg){
        termError.textContent=termsValidation;
        valid = false;
    }
    return valid;
};

// event listner to empty the text inside the two paragraph when resent
function reserFormError() {
    emailError.textContent=defaultMSg;
    termError.textContent=defaultMSg;
}
 document.form.addEventListener("reset",reserFormError);

// add event listner to the email if you entered correct email,the error paragraph with be empty

emailInput.addEventListener("blur",()=>{ // arrow function
    let x=vaildateEmail();
    if(x == defaultMSg){
        emailError.textContent = defaultMSg;
    }
    });
// add event listner to the checkbox if you check the terms box,the error paragraph with be empty

    termInput.addEventListener("change", function(){// anonymous function
        if(this.checked){
            termError.textContent= defaultMSg;
        }
        });