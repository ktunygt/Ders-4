const clearCookie = (res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    });
};

module.exports = clearCookie;
