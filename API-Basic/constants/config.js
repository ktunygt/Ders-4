require("dotenv").config();

const config = {
    token: {
        JWT_KEY: "XNlrtWLq8TC4Gf4LMHGHcszql6sIwU78",
    },

    email: {
        service: process.env.EMAIL_SERVICE,
        username: "devtest.mer@gmail.com",
        password: "vmbp ijzd ultb owgx"
    }
};

module.exports = config;
