

describe("Title for the all pages", () => {
    it("Main page title", () => {
        cy.visit('/');
        cy.title("Create Next App");
    });
    it("Services page title", () => {
        cy.visit('/services');
        cy.title("Create Next App");
    });
    it("Technologies page title", () => {
        cy.visit('/services');
        cy.title("Create Next App");
    });
    it("Contact page title", () => {
        cy.visit('/contact');
        cy.title("Create Next App");
    });
});