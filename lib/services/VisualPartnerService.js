class VisualPartnerService{
    static getPartnersHaveCertification(partners, haveCertification){
        const filteredpartners = partners.filter(partner => partners.haveCertification == haveCertification);
        return filteredpartners;
    }

    static getPartnersCredits(partners, credits){
        const filteredPartners = partners.filter(partner => partner.credits >= credits);
        return filteredpartners; 
    }
}


module.exports = VisualPartnerService;