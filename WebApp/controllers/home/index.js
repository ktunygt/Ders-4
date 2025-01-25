const User = require("../../models/user");

const getHome = async (req, res) => {
    const user = await User.findOne({
        where: {
            name: "omer"
        },
        raw: true
    });

    const token = req.cookies.token;

    console.log("token:", token);

    return res.render("home/index");
};

const postHome = async (req, res) => {
    const data = req.body; // POST verilerini al
    console.log(data); // Veriyi konsola yazdır

    await User.create({
        name: data.name,
        email: data.email,
        password: data.password
    });

    return res.render("home/index"); // Home şablonunu render et
};

module.exports = {
    getHome,
    postHome
};
