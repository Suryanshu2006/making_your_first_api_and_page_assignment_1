// Boilerplate Code for Virtual Assistant API
const express = require('express');
const app = express();

app.get("/assistant/greet", (request, response) => {
  try {
    const query = request.query;
    if (!query.name) {
      return response.status(400).send({ msg: "Please include name in URL as query" });
    }
    const day = new Date();
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayMessage = dayArray[day.getDay()] === "Friday" ? "It's Friday! The weekend is near!" : 
                       dayArray[day.getDay()] === "Monday" ? "Happy Monday! Start your week with energy!" : 
                       "Have a wonderful day!";
    response.status(200).send({
      welcomeMessage: `Hello, ${query.name}! Welcome to our assistant app!`,
      dayMessage: dayMessage
    });
  } catch (error) {
    response.status(500).send({ msg: "Something went wrong", error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});