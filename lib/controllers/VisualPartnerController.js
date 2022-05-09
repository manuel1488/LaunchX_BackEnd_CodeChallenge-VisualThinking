const Reader = require("../utils/Reader");
const VisualpartnerService = require("../services/VisualpartnerService");

class VisualpartnerController{
    static getAllpartners(){
        const partners = Reader.readJsonFile("data/visualpartners.json");
        return partners;
    }

    static getpartnersHaveCertification(){
        const partners = Reader.readJsonFile("data/visualpartners.json");
        const filteredpartners = VisualpartnerService.getpartnersCredits(partners, true);
        return filteredpartners;
    }

    static getpartnersCredits(){
        const partners = Reader.readJsonFile("data/visualpartners.json");
        const filteredpartners = VisualpartnerService.getpartnersCredits(partners, 500);
        return filteredpartners;
    }
}


module.exports = VisualpartnerController;