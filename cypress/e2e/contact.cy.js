describe('Text for Contact Page', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit('/contact');
    })

    it.only('Testing heading title and svg', () => {
        // Check the header
        cy.xpath("(//h1[contains(text(),'Let’s create progress together')])[1]")
        .should('have.text', "Let’s create progress together");

        // Check the svg
        cy.xpath("(//*[name()='svg'])[6]")
        .should('exist')
        .should('be.visible')
        .should('have.attr', ('width', 'height'))
        .and("contain", 402)
    });

    it.only('Testing the contact page form', () => {
        // Check First Name
        cy.get("#firstName")
        .should('exist')
        .should('have.attr', 'placeholder', 'First Name')
        .type('Moses');
        // Check Last Name
        cy.get("#lastName")
        .should('exist')
        .should('have.attr', 'placeholder', 'Last Name')
        .type('Aaron');
        // Check company Email
        cy.get("#email")
        .should('exist')
        .should('have.attr', 'placeholder', 'Name')
        .type('Anchorsoftacademy@gmail.com');
        // Check company number
        cy.get("#mobile")
        .should('exist')
        .should('have.attr', 'placeholder', 'Mobile No.')
        .type('081293837465');
        // Project Description
        cy.get("#message")
        .should('exist')
        .should('have.attr', 'placeholder', 'Message')
        .type('We need an E-Commerce store for a clothing brand');

        // Check submit button
        cy.get("button[type='submit']")
        .should('exist')
        .should('be.visible')
        .should('have.text', 'Submit');

        // Submit
        cy.get("button[type='submit']").click()
        cy.wait(2000)

        // Error Message
        cy.get("div[role='alert']")
        .should("be.visible")
    });
});