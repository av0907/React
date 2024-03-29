export const FormValidation = (name,email,password)=>{

    const thisname = /([a-zA-Z\s]+)/.test(name);

    const mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!thisname){
        return "Name should only contain alphabets"
    }
    if(!mail){
        return "Email Address is not valid"
    }
    if(!pass){
        return "Password is not Valid"
    }
    return null;

}