// index.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get("/api/:date?", (req, res) => {
  const date = req.params.date;

  let newobject = dateFormatter(date);
  res.json(newobject);
});

// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

function dateFormatter(date) {
  date === undefined ? ((date = new Date()), console.log(date)) : null;
  let dateInNumbers = Number(date);
  let unixTime;

  !isNaN(dateInNumbers)
    ? ((unixTime = dateInNumbers), console.log("Number sequence"))
    : ((unixTime = Math.floor(new Date(date).getTime())),
      console.log("Not a number sequence"));

  if (isNaN(unixTime)) return { error: new Date(date).toString() };

  const dateInHumanString = new Date(unixTime).toString();
  const [weekday, month, day, year, time, timezone] =
    dateInHumanString.split(" ");
  const gmtDate = `${weekday}, ${day} ${month} ${year} ${time} ${timezone.slice(
    0,
    3
  )}`;

  return {
    unix: unixTime,
    utc: gmtDate,
  };
}
