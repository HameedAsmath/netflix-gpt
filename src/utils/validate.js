export const checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid" 
    // if(name.length>=6) return "Name is less than 6 characters"

    return null;
}