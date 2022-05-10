class VisualPartnerService{
    static getPartnersHaveCertification(partners, haveCertification){
        const filteredpartners = partners.filter(partner => partner.haveCertification == haveCertification);
        return filteredpartners;
    }

    static getPartnersCredits(partners, credits){
        const filteredPartners = partners.filter(partner => partner.credits >= credits);
        return filteredPartners; 
    }
}


module.exports = VisualPartnerService;