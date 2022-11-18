
console.log("hello jun");

let email=document.querySelector("#email");
let login=document.querySelector("#login");
let passl=document.querySelector("#pass");
let pass2=document.querySelector("#pass2");

let emailError=document.createElement('p');
emailError.setAttribute("class","warning");
//append the created element to the parent of email div
document.querySelectorAll(".email-check")[0].append(emailError);

let success_Msg="";
let email_Error_Msg="Email address should be non-empty with the format xyx@xyz.xzy"
let login_Error_Msg="User name should be non-empty, and within 20 charaters long."
let pass1_Error_Msg="Password should be at least 6 characters: 1 uppercase, 1 lowercase."
let pass2_Error_Msg="Please retype password."

let loginError=document.createElement('p');
loginError.setAttribute("class","warning");
document.querySelectorAll(".login-check")[0].append(loginError);


let pass1Error=document.createElement('p');
pass1Error.setAttribute("class","warning");
document.querySelectorAll(".password-check")[0].append(pass1Error);

let pass2Error=document.createElement('p');
pass2Error.setAttribute("class","warning");
document.querySelectorAll(".password2-check")[0].append(pass2Error);

function validate(){
    let valid = true;
    let email_validation=validate_email();
    let name_validation=validate_name();
    let pass1_validation=validate_password();
    let pass2_validation=validate_password2();
    if(email_validation!==success_Msg){
        emailError.textContent=email_validation;
        valid = false;
    } 
    if(name_validation!==success_Msg){
        loginError.textContent=name_validation;
        valid = false;
    }
    if(pass1_validation==pass1_Error_Msg){
        pass1Error.textContent=pass1_Error_Msg;
        valid = false;
    }
    if(pass2_validation!==success_Msg){
        pass2Error.textContent=pass2_Error_Msg;
        valid = false;
    }
    return valid;
}

function validate_email(){
    let email_input=email.value;
    let regexp=/\S+@\S+\.\S+/;
    if (regexp.test(email_input)){
        result=success_Msg;
    } else{
        result=email_Error_Msg;
    }
    return result;
}

function validate_name(){
    let login_input=login.value;
    if (login_input.length<20&&login_input==true&&login_input.length>=1){
        error=success_Msg;
    } else{
        error=login_Error_Msg;
    }
    return error;
}

function validate_password(){
    let pass_input=passl.value;
    if (pass_input.length<6 || pass_input.search(/[a-z]/)<0 || pass_input.search(/[A-Z]/)<0){
        error=pass1_Error_Msg;
    } else{
        error=success_Msg;
    }
    return error;
}


function validate_password2(){
    let pass2_input=pass2.value;
    let pass_input=passl.value;
    if (pass2_input==pass_input&&pass2_input.length!=0){
        error=success_Msg;
    } else{
        error=pass2_Error_Msg;
    }
    return error;
}
// function reserFormError() {
//     emailError.textContent=success_Msg;
//     loginError.textContent=success_Msg;
// }

// document.forms.addEventListener("reset",reserFormError);

email.addEventListener("blur",()=>{
    let x=validate_email();
    if(x==success_Msg){
        email.textContent=success_Msg;
    }
});



// login.addEventListener("change", ()=>{
//     let x=validate_name();
//     if(x==success_Msg){
//         login.textContent=success_Msg;
//     }
// })

// let input_email=document.querySelector("#email");
// let input_name=document.querySelector("#login");
// let success=document.createTextNode("");

// let node_failEmail = document.createElement("p");

// // Create a text node 
// let text_failEmail = document.createTextNode("Email address should be non-empty with the format xyx@xyz.xyz.");

// // Append the text node to the "p" node
// node_failEmail.appendChild(text_failEmail);


// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", (e) => {
//     e.preventDefault;
//     console.log("It's finally working!");
// });



// function validate() {
//     console.log("It's working");
//     // event.preventDefault;
//     console.log("It's working");
// }

