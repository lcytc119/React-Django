import axios from "axios";

export const signUp = async(name, email, password) => {
    let response = await axios.post('signup/', {
        'name': name,
        'email': email,
        'password': password
    })
    console.log(response.data.success)
    return response.data.success
}


export const logIn = async(email, password) => {
    let response = await axios.post('/login/', {
        'email': email,
        'password': password
    })
    console.log(response.data.success)
    return response.data.success
}