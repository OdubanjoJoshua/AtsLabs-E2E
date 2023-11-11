describe('Testing the About page ', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit('/about');
    })

    it('Section One', () => {
        // Check heading
        cy.xpath("(//h3[normalize-space()='We are ATS Labs'])[1]")
        .should("be.visible")
        .should("have.text", "We are ATS Labs ")

        // check body
        cy.get("div[class='bg-primary p-8 md:p-12 w-full rounded-2xl']")
        .children()
        .should("have.length", 2)

        // Check content
        cy.get("p[class='text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] font-extrabold text-white mb-8']")
        .should("have.text", " We are a team of product people, designers and developers who help companies build great products.")

        // check link
        cy.xpath(`(//a[normalize-space()="Let's Talk"])[1]`)
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath(`(//a[normalize-space()="Let's Talk"])[1]`).click();
        cy.wait(3000)
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/about")

        // Check footer
        cy.xpath("(//p[@class='mt-10 text-[#575757] text-[2rem] md:text-[2.5rem] font-medium'])[1]")
        .should("exist")
        .should("be.visible")
    });

    it('Section Two', () => {
        cy.get("div[class='grid lg:grid-cols-3 gap-12']").each(($row, rowIndex) => {
            // Log a message for each row
            // cy.log(`Checking Post Cards in Row ${rowIndex + 1}`);
      
            // // Assert the presence of three post cards in each row
            // cy.get($row).find(postCardSelector).should('have.length', 3);
      
            // Iterate over each post card in the row
            cy.get("div[class='grid lg:grid-cols-3 gap-12']").each(($card, cardIndex) => {
                // Log a message for each post card
                cy.log(`Checking Post Card ${cardIndex + 1}`);
        
                // Assert the presence of title and content in each post card
                cy.get($card).find('h2').should('exist');
                cy.get($card).find('p').should('exist');
            });
          })
    });

    it.only('Section Three', () => {
        cy.get("div[class='mt-12 flex flex-col items-center md:items-start md:flex-row gap-12']")
        .should("be.visible")
        cy.get("div[class='mt-12 flex flex-col items-center md:items-start md:flex-row gap-12']")
        .children()
        .should("have.length", 2)

        // Check image
        cy.get("img[alt='ATS Founder']")
        .should('exist')
        .should('be.visible')
        .should('have.attr', 'src')
        // .should('have.attr', 'width', 368)
        // .should('have.attr', 'height', 384)
        // .and("contain", 402)

        // Check name and role
        cy.get("span[class='text-[3rem]']")
        .should("have.text", "John Doe")
        cy.get("span[class='text-[2rem]']")
        .should("have.text", "Founder, ATS Labs")

        // Check Content
        cy.xpath("(//p[contains(text(),'Lorem ipsum dolor sit amet consectetur. Ipsum eu n')])[4]")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate amet neque. Pharetra bibendum morbi quis erat lectus pretium urna lectus felis. Velit nunc lacinia eget amet dignissim ac faucibus et habitasse. Nulla egestas integer senectus magna nunc in sollicitudin. Tincidunt donec nunc commodo nullam imperdiet maecenas. Amet mauris lacus nisi quis ultricies metus in. Volutpat sed eget dui id vitae rhoncus. Tristique praesent est integer tempus mi. Vel vivamus commodo enim nunc pulvinar consectetur. ")

        // Check link
        cy.xpath("(//div[@class='flex items-center gap-x-12'])[1]")
        .should("exist")
        .should("be.visible")
    });
});