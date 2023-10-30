

describe('Test for the main page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1920, 1080);
    });
    it('Testing the drop-down of the navbar', () => {
        // Services
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > button:nth-child(1)").click();
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1)").should("be.visible").wait(1000);
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1)").children().should("have.length", 4);

        // Technologies
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(3) > button:nth-child(1)").click();
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1)").should("be.visible").wait(1000);
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(1)").children().should("have.length", 4);

        // About Us
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(4) > button:nth-child(1)").click();
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(4) > div:nth-child(2) > ul:nth-child(1)").should("be.visible").wait(1000);
        cy.get("body > header:nth-child(2) > nav:nth-child(2) > div:nth-child(4) > div:nth-child(2) > ul:nth-child(1)").children().should("have.length", 3);

        // Contact
        cy.url().then((currentUrl) => {
            cy.get("body > header:nth-child(2) > nav:nth-child(2) > a:nth-child(5)").click();
            cy.url().should('not.equal', currentUrl);
        });
    });

    it('Section one: Get in touch button', () => {
        // Testing the "Get in touch" button
        cy.get("div[class='mt-6 flex items-center gap-x-8'] a[class='flex items-center justify-center gap-x-5 h-[5rem] w-[14.8rem] md:w-[19.8rem] rounded-full text-2xl font-bold border-[1.5px] false text-white bg-primary']").click();
        cy.url().should('include', 'https://atslabs.vercel.app').wait(5000);
    });
})


describe('Section one: Automation of the carousel images', () => {
    it('Automation test of the carousel images', () => {
        cy.viewport(1920, 1080);
        cy.visit('/');

        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > img:nth-child(1)").should('be.visible');
        cy.wait(5000);
        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > img:nth-child(1)").should('be.visible');
        cy.wait(5000);
        cy.get("body > main:nth-child(3) > section:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > img:nth-child(1)").should('be.visible');
    });
});


describe('Section Two: Industries on our radar', () => {
    beforeEach(() => {
        cy.viewport(1440, 401);
        cy.visit("/");
    });

    it('confirming the number of the cards', () => {
        cy.get("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3)").should("exist");
        cy.get("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3)").children().should("exist");
        cy.get("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3)").children().should("have.length", 9);

        // Card 1
        cy.get("body main section:nth-child(1) div:nth-child(1) div:nth-child(1)").should("exist");
        // image check
        cy.request("https://atslabs.vercel.app/_next/image?url=%2Feducation.png&w=750&q=75").then((response) => {
            expect(response.status).to.equal(200)
        });
        // title check
        cy.get("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3) > div:nth-child(1) > h5:nth-child(2)").should("be.visible").should("have.text", "Education");
        // paragraph check
        cy.get("body > main:nth-child(3) > section:nth-child(2) > div:nth-child(3) > div:nth-child(1) > p:nth-child(3)").should("be.visible");
    });
});