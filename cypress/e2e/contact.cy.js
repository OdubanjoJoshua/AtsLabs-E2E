describe('Text for Contact Page', () => {
    beforeEach(() => {
        cy.viewport(1440, 401);
        cy.visit('/contact');
    })

    it('Testing heading title and svg', () => {
        cy.get('body > main:nth-child(3) > section:nth-child(1) > div:nth-child(1) > h1:nth-child(1)')
        .should('have.text', 'Let’s create progress together');
        cy.xpath("/html[1]/body[1]/main[1]/section[1]/div[2]/*[name()='svg'][1]")
        .should('exist')
        .should('have.attr', 'width', '402')
        .should('have.attr', 'height', '402')
        .should('be.visible');
        // Checking the contents of the svg image
        cy.xpath("/html[1]/body[1]/main[1]/section[1]/div[2]/*[name()='svg'][1]")
        .find('path').should('have.length.greaterThan', 100);
    });

    it('Testing the contact page form', () => {
        // Name
        cy.get("input[placeholder='Name']")
        .should('exist')
        .should('have.attr', 'placeholder', 'Name')
        .type('Moses');
        // Company Email
        cy.get("input[placeholder='Company Email']")
        .should('exist')
        .should('have.attr', 'placeholder', 'Company Email')
        .type('Anchorsoftacademy@gmail.com');
        // Company name
        cy.get("input[placeholder='Company Name']")
        .should('exist')
        .should('have.attr', 'placeholder', 'Company Name')
        .type('Anchorsoft Academy');
        // Project Description
        cy.get("input[placeholder='Project Description']")
        .should('exist')
        .should('have.attr', 'placeholder', 'Project Description')
        .type('We need an E-Commerce store for a clothing brand');

        // Submit button
        cy.xpath("//button[contains(@type,'button')]")
        .should('exist')
        .should('be.visible');
    });
});