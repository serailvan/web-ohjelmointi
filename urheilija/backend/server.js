require("dotenv").config();

const express = require("express");
const athletesRoutes = require("./routes/athleteRoutes");

const app = express();

// MIDDLEWARE
app.use(express.json());

app.use("/athletes", require("./routes/athleteRoutes"));

app.use("/athletes", athletesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
