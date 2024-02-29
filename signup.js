const signup = (req, res) => {
    const { email, phone, birthday } = req.body;

    res.json({
        message: "User has successfully signed up!",
        user: { email, phone, birthday, password: '*******' } // Masking the password in the response
    });
};

module.exports = { signup };