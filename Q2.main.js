const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const { selectAllUser, addUser } = require("./user");

app.get("/users", async (request, response) => {
    const list = await selectAllUser();
    response.json(list);
});

app.post("/addUsers", async (request, response) => {
    const user = request.body;
    await addUser(user);
    response.json({ message: "User added Sunccesfully" });
});

app.listen(4000, () => console.log("Server started"));