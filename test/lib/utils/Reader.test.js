const Reader = require("./../../../lib/utils/Reader");

describe("Unit test for Reader class", () => {
    test("Read all users arrary", () => {
        const partners = Reader.readJsonFile("test/data/visualpartners.json");
        expect(partners).not.toBeUndefined();
    });        
});

describe("Unit test for content in visualpartner.json file", () => {
    test("test length array", () => {
        const partners = Reader.readJsonFile("test/data/visualpartners.json");
        expect(partners.length).toBe(51);
    });

    test("test properties array", () => {
        const partners = Reader.readJsonFile("test/data/visualpartners.json");

        partners.forEach(partner => {
            expect(partner.id).not.toBeUndefined();
            expect(partner.name).not.toBeUndefined();
            expect(partner.email).not.toBeUndefined();
            expect(partner.credits).not.toBeUndefined();
            expect(partner.enrollments).not.toBeUndefined();
            expect(partner.previousCourses).not.toBeUndefined();
            expect(partner.haveCertification).not.toBeUndefined(); 
        });        
    });
});