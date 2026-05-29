const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });


const express = require("express");



const app = require("./src/app");



console.log("EMAIL:", process.env.EMAIL_USER);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);