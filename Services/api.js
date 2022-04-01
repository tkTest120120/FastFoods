import axios from "axios";

const url = "https://fastfoodserver.herokuapp.com";

export const sign_up = async (phone, passWord, role) => {
    return await axios.post(url + "/mobile/addUser", {
        phone: phone,
        password: passWord,
        role: role
    });
};

export const login = async (tk, mk) => {
    return await axios.post(url + "/mobile/login", {
        tk,
        mk
    });
};
