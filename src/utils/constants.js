export function validateEmail(email) {
    let error = false;
    let message = "";

    if (!email) {
        message = "Email address is required";
        error = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        message = "Invalid email address format";
        error = true;
    }

    return { error, message };
}


export function validateUserName(name) {

    let error = false
    let message ;
    if (!name) {
        error = true
        message ="Invalid User name"
    }
    else if (name === 'admin') {
        error = true
        message ="try Again"
    }
    return {error, message}
    // return error

}


export function validatePassword(pass) {
    let error = false;
    let message;
    let regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (!pass) {
        message = "Invalid Password"
        error =true
    }
    else if (!regex.test(pass)){
        message = 'Invalid Password try Again!!'
        error = true
    }

    return {message , error}

    // return error
}

