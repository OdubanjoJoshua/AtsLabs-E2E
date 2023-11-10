describe('Testing the blog', () => {
    beforeEach(() => {
        cy.viewport(1440, 720);
        cy.visit("/blog");
    });

    it("Testing the heading and search bar", () => {
        // title check
        cy.xpath("(//h1[normalize-space()='Our Blog'])[1]").should('have.text', 'Our Blog');
        // search bar
        cy.xpath("(//*[name()='svg'])[7]").should("be.visible")
        // placeholder
        cy.xpath("//input[@placeholder='Search']").should("have.attr", "placeholder", "Search");
        cy.xpath("//input[@placeholder='Search']").type("best user design");
    });

    it("Testing the blog section", () => {
        // Checking the number of post in the blog post grid
        cy.xpath("//div[contains(@class,'grid lg:grid-cols-2 gap-10')]").children().should("have.length", 6);
        // Check if image exists and is visible
        cy.get("div:nth-child(2) div:nth-child(1) img:nth-child(1)").should("exist").should("be.visible");
        // post category
        cy.xpath("//div[contains(@class,'grid lg:grid-cols-2 gap-10')]//div[1]//div[2]//div[1]//div[1]").should("be.visible").should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("//div//div[1]//div[2]//div[1]//p[1]").should("have.text", "7 Websites with the Best User Experience Design to Get Inspired From Added");
        // checking the posted time 
        cy.xpath("//body[1]/main[1]/section[2]/div[1]/div[1]/div[2]/span[1]").should("have.text", "Posted 13th Jul 2023");
    });

    it("second section", () => {
        // title
        cy.get("body > main:nth-child(3) > section:nth-child(3) > h4:nth-child(1)").should("How may we serve you?");
        cy.get("body > main:nth-child(3) > section:nth-child(3) > p:nth-child(2)").should("Leverage our world-class engineering teams to get your ideas and projects up and running quickly.");
        cy.xpath('(//a[normalize-space()="Let\'s talk"])[1]').should("exist");
        cy.xpath('(//a[normalize-space()="Let\'s talk"])[1]').should("be.visible");
        cy.xpath('(//a[normalize-space()="Let\'s talk"])[1]').should("have.text", "Let's talk");
    });
});