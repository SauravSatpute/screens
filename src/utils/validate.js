export const checkValidData = ({name, email, password})=> {
    console.log(name)
    console.log(email)
    console.log(password)
    
    if(name === "" || password === "" || email === "") {
        return "Please fill all the above information"
    }

    const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password) 
    const isNameValid = /^[a-zA-Z ]+$/.test(name)

    console.log(isEmailValid)
    console.log(isPasswordValid)
    console.log(isNameValid)

    if(!name) {
        return "Name is not valid."
    }

    if(!isEmailValid) {
        return "Email Id is not valid."
    }

    if(!isPasswordValid) {
        return "Password must contains eight characters, at least one letter, one number and one special character:"
    }


    return null;
}


