const loginValidation = require("../../../validation/auth/login");
const axios = require("axios");
const saveCookie = require("../../../helpers/cookie/save");

const getLogin = (req, res) => {
    return res.render("auth/login");
};

const postLogin = async (req, res) => {
    const data = req.body;
    const validate = loginValidation(data);

    if (validate.error) {
        return res.render("auth/login", {
            alert: { error: validate.error.details[0].message }
        });
    }

    try {
        const response = await axios.post("http://localhost:4000/login", {
            email: data.email,
            password: data.password
        });

        const token = response.data.token;

        saveCookie(res, token);

        return res.render("auth/login", {
            alert: { success: response.data.message }
        });
    }
    catch (error) {
        const message = error.response?.data?.message || "Bilinmeyen bir hata oluştu.";

        return res.render("auth/login", {
            alert: { error: message }
        });
    }
};

module.exports = {
    getLogin,
    postLogin
};
