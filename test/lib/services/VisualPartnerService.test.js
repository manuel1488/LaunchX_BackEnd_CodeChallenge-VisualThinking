const VisualPartnerService = require('./../../../lib/services/VisualPartnerService');
const Reader = require("./../../../lib/utils/Reader");

describe("Unit test for VisualPartnerServices class", () =>{
    test('return valid result for getPartnersHaveCertification', () => {
        const partners = Reader.readJsonFile("test/data/visualpartners.json");
        const filteredPartners1 = VisualPartnerService.getPartnersHaveCertification(partners, true);
        const filteredPartners2 = VisualPartnerService.getPartnersHaveCertification(partners, false);

        expect(filteredPartners1).not.toBeUndefined();
        expect(filteredPartners2).not.toBeUndefined();
        expect(filteredPartners1.length).toBe(29);
        expect(filteredPartners2.length).toBe(22);
    });


    test("valid result for getPartnersCredits() function", ()=>{
        const partners = Reader.readJsonFile("test/data/visualpartners.json");
        const partner500 = VisualPartnerService.getPartnersCredits(partners, 500);
        const partner200 = VisualPartnerService.getPartnersCredits(partners, 200);

        expect(partner200).not.toBeUndefined();
        expect(partner500).not.toBeUndefined();
        expect(partner200.length).toBe(49);
        expect(partner500.length).toBe(27);
    });
});