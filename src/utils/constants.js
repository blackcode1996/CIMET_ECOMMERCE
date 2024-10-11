export function validateEmail(email) {
    let error = false;
    let message ;
    if (!email) {
        message = "inValid Email Address"
        error = true
    } else if (/^[a-zA-Z0-9._%+-]+@[a-z.-]+\.[a-zA-Z]{}$/i.test(email)) {
        message = "Invalid Email Address"
        error = true
    }
    return {error, message}
    // return error
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

