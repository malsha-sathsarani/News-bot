const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

module.exports = {
  PREFIX: ".", //set Prefix
  OWNER: "94775200935", //Enter Owner Number
  USER_NAME: "user1", //Enter Your UserName
  PASSWORD: "password1", //Enter Your Password
  GROUP_JID: [
    "120363161816871173@g.us",
    "120363144403811486@g.us",
    "120363162110554625@g.us",
    "120363185730569877@g.us",
  ] //News Group Jid
};
