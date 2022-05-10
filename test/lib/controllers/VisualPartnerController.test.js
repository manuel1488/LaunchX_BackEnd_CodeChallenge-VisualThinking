const VisualPartnerController = require("./../../../lib/controllers/VisualPartnerController");

describe("unit test for VisualPartnerController class", () => {
    test("test result for getAllpartners() function", ()=> {
        const partners = VisualPartnerController.getAllpartners();

        expect(partners).not.toBeUndefined();
        expect(partners.length).toBe(51);
    });


    test("test result for getpartnersHaveCertification()", ()=>{
        const partners = VisualPartnerController.getpartnersHaveCertification();

        expect(partners).not.toBeUndefined();
        expect(partners.length).toBe(29);
    });


    test("test result for getpartnersCredits()", ()=>{
        const partners = VisualPartnerController.getpartnersCredits();

        expect(partners).not.toBeUndefined();
        expect(partners.length).toBe(27);
    });
});