
let email=document.querySelector("#email");
let login=document.querySelector("#login");
let passl=document.querySelector("#pass");
let pass2=document.querySelector("#pass2");

let emailError=document.createElement('p');
emailError.setAttribute("class","warning");
document.querySelectorAll(".email-check")[0].append(emailError);

let success_Msg="";
let email_Error_Msg="Email address should be non-empty with the format xyx@xyz.xzy"
let login_Error_Msg="User name should be non-empty, and within 20 charaters long."
let pass1_Error_Msg="Password should be at least 6 characters: 1 uppercase, 1 lowercase."
let pass2_Error_Msg="Please retype password."
let checkbox_Error_Msg="Please accept the terms and conditions." 

let loginError=document.createElement('p');
loginError.setAttribute("class","warning");
document.querySelectorAll(".login-check")[0].append(loginError);


let pass1Error=document.createElement('p');
pass1Error.setAttribute("class","warning");
document.querySelectorAll(".password-check")[0].append(pass1Error);

let pass2Error=document.createElement('p');
pass2Error.setAttribute("class","warning");
document.querySelectorAll(".password2-check")[0].append(pass2Error);

let checkbox_Error=document.createElement('span');
checkbox_Error.setAttribute("class","warning");
document.querySelectorAll(".terms-check")[0].append(checkbox_Error);

function validate(){
    let valid = false;
    
    let email_validation=validate_email();
    let name_validation=validate_name();
    let pass1_validation=validate_password();
    let pass2_validation=validate_password2();
    let checkbox2_validation=validate_checkbox();

    if(email_validation===false) {
        emailError.textContent=email_Error_Msg;
        valid = false;
        email.style.borderColor='red';
    }  else {
        emailError.remove();
        email.style.borderColor='#ccc';
        valid = true;
    }


    if(name_validation===false) {
        loginError.textContent=login_Error_Msg;
        valid = false;
        login.style.borderColor='red';
    } else {
        loginError.remove();
        login.style.borderColor='#ccc';
        valid = true;
    }

    if(pass1_validation===false){
        pass1Error.textContent=pass1_Error_Msg;
        passl.style.borderColor='red';
        valid = false;
    } else {
        pass1Error.remove();
        passl.style.borderColor='#ccc';
        valid = true;
    }

    if(pass2_validation===false){
        pass2Error.textContent=pass2_Error_Msg;
        pass2.style.borderColor='red';
        valid = false;
        
    } else {
        pass2Error.remove();
        pass2.style.borderColor='#ccc';
        valid = true;
    }

    if(checkbox2_validation===false){
        checkbox_Error.textContent=checkbox_Error_Msg;
        valid = false;
    } else {
        checkbox_Error.remove();
        valid = true;
    }

    return valid;
}


function validate_email(){
    let email_input=email.value;
    let regexp=/\S+@\S+\.\S+/;
    if (regexp.test(email_input)){
        result=true;
    } else{
        result=false;
    }
    return result;
}


function validate_name(){
    login.value = login.value.toLowerCase();
    let login_input=login.value;
    if (login_input.length<20&&login_input.length>=1){
        error=true;
    } else{
        error=false;
    }
    return error;
}


function validate_password(){
    let pass_input=passl.value;
    if (pass_input.length<6 || pass_input.search(/[a-z]/)<0 || pass_input.search(/[A-Z]/)<0){
        error=false;
    } else{
        error=true;
    }
    return error;
}


function validate_password2(){
    let pass2_input=pass2.value;
    let pass_input=passl.value;
    if (pass2_input==pass_input&&pass2_input.length!=0){
        error=true;
    } else{
        error=false;
    }
    return error;
}

email.addEventListener("blur",()=>{
    let x=validate_email();
    if(x==success_Msg){
        email.textContent=success_Msg;
    }
});

function resetAll(){
    const warningList = document.querySelectorAll('.warning')
    for (let i = 0; i < warningList.length; i++){
        warningList[i].remove();
    }
}

function get_newsletter() {
    alert("If you accept it, you're likely to get spam");
}

function validate_checkbox() {
    let checkBox = document.getElementById("terms").checked
    let result_checking;
    if (checkBox==true){
        result_checking=true;
    } else {
        result_checking=false;
    }
    return result_checking;
}