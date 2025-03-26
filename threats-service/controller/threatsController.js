const ThreatsData = require("../models/threatsData");

const ThreatsController = {

    getAllThreats: async (req, res) => {
        try {
            const data = await ThreatsData.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

module.exports = ThreatsController;
