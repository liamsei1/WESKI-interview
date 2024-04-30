const express = require("express");
const axios = require('axios');


const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    let destination = req.query.destination;
    let groupSize = req.query.groupSize;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    console.log(destination + " " + groupSize + " " + startDate + " " + endDate);
    axios.post("https://gya7b1xubh.execute-api.eu-west-2.amazonaws.com/default/HotelsSimulator",
    {query:{
        ski_site: 1,
        from_date: "04/12/2024",
        to_date: "11/12/2024",
        group_size: 1
      }})
      .then((response) => {
        //console.log((response.data.body.accommodations));
        res.json({ message: response.data.body.accommodations });
      }).catch((err) => console.log("lo"));

      //res.json({ message: "Hello from server!" });
      });


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
