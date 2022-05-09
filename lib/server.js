const VisualpartnerController = require("./controllers/VisualPartnerController");
const express = require("express");
const app = express();
app.use(express.json);
const port = 3000;


app.get("/api/students/", (request, response) => {
    const visualpartners = VisualpartnerController.getAllpartners();
    response.json(visualpartners);
});


app.get("/api/students/certified", (request, response) => {
    const visualpartners = VisualpartnerController.getpartnersHaveCertification();
    response.json(visualpartners);
});


app.get("/api/students/credits/top500", (request, response) => {
    const visualpartners = VisualpartnerController.getpartnersCredits();
    response.json(visualpartners);
});


app.listen(port, () => {
    console.log("running server");
});