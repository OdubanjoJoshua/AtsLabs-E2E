import 'cypress-file-upload'

describe('Testing careers page', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit('/careers');
    })

    it('Section One', () => {
        cy.xpath("(//h1[normalize-space()='Come work at ATS Labs'])[1]")
        .should("have.text", "Come work at ATS Labs")
        
        // Check Button
        cy.xpath("(//button[normalize-space()='Explore our jobs'])[1]")
        .should("have.text", "Explore our jobs")
        cy.xpath("(//button[normalize-space()='Explore our jobs'])[1]")
        .invoke("attr", "class")
        .should("include", "disabled")
        // .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        // cy.xpath("/html//main/section[2]/div/div[1]/div[2]/a[@href='/contact']").click();
        // cy.wait(2000)
        // cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        // cy.go("back");
        // cy.wait(2000)
        // cy.url().should("eq", "https://frontent-atslabs.vercel.app/services")

        // Check image
        cy.get("img[alt='ATS workers']")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/ats-workers.png")

        // Check section
        cy.xpath("(//h2[normalize-space()='What makes us different'])[1]")
        .should("have.text", "What makes us different")
        cy.xpath("(//p[@class='text-2xl font-medium text-customBlack'])[1]")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate amet neque. Pharetra bibendum morbi quis erat lectus pretium urna lectus felis. Velit nunc lacinia eget amet dignissim ac faucibus et habitasse. Nulla egestas integer senectus magna nunc in sollicitudin. Tincidunt donec nunc commodo nullam imperdiet maecenas. Amet mauris lacus nisi quis ultricies metus in. Volutpat sed eget dui id vitae rhoncus. Tristique praesent est integer tempus mi. Vel vivamus commodo enim nunc pulvinar consectetur.")
    });

    it('Section Two', () => {
        // Check image
        cy.get("img[alt='ATS Learn as you work']")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=%2Flearnwork.png&w=1080&q=75")

        // Check title
        cy.xpath("(//h3[normalize-space()='Learn as you work'])[1]")
        .should("have.text", "Learn as you work")

        // Check content
        cy.get("p[class='text-2xl text-white leading-[2.5rem]']")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur. Ipsum eu nec vulputate amet neque. Pharetra bibendum morbi quis erat lectus pretium urna lectus felis. Velit nunc lacinia eget amet dignissim ac faucibus et habitasse. Nulla egestas integer senectus magna nunc in sollicitudin. Tincidunt donec nunc commodo nullam imperdiet maecenas. Amet mauris lacus nisi quis ultricies metus in. Volutpat sed eget dui id vitae rhoncus. Tristique praesent est integer tempus mi. Vel vivamus commodo enim nunc pulvinar consectetur.")
    });

    it('Section Three', () => {
        // Check Main text
        cy.xpath("(//h1[normalize-space()='Current Openings'])[1]")
        .should("have.text", "Current Openings")

        // Check sub-text
        cy.get("span[class='text-[#515151] text-2xl font-medium']")
        .should("have.text", "Grow with us at ATS Labs")

        // Check the Current Openings
        cy.get(".mt-12.flex.flex-col")
        .children()
        .should("have.length", 5)

        // Check Row 1
        // Check Job title
        cy.xpath("(//p[normalize-space()='Product Designer'])[1]")
        .should("have.text", "Product Designer")

        // Check dropdown
        cy.xpath("(//button[contains(text(),'View details')])[1]")

        // Check dropdown content
        cy.xpath("(//ul)[2]")
        .children()
        .should("have.length", 5)

        // Check Apply button
        cy.xpath("(//button[contains(@type,'button')][normalize-space()='Apply now'])[1]")
        .click()

        // Fill form
        // First Name
        cy.get("input[placeholder='First Name']")
        .should("have.attr", "placeholder", "First Name")
        .type("Paul")
        // Last Name
        cy.get("input[placeholder='Last Name']")
        .should("have.attr", "placeholder", "Last Name")
        .type("Owoseni")
        // Email
        cy.get("input[placeholder='Email']")
        .should("have.attr", "placeholder", "Email")
        .type("Owo@mail.com")
        // Mobile No.
        cy.get("input[placeholder='Mobile No.']")
        .should("have.attr", "placeholder", "Mobile No.")
        .type("09092837465")
        // Highest Qualification
        cy.get("input[placeholder='Highest Qualification']")
        .should("have.attr", "placeholder", "Highest Qualification")
        .type("Bachelor of Science")
        // About you
        cy.get("textarea[placeholder='About you']")
        .should("have.attr", "placeholder", "About you")
        .type("I am an Introvert")
        // Upload CV
        cy.get("#cv_upload")
        .attachFile('AnchorsoftLetterhead-1.pdf')
        cy.get("button[type='submit']")
        .click({force: true})

        // Error
        cy.get("div[role='alert']")
        .should("be.visible")
        
        // CLose Apply
        cy.wait(3000)
        cy.xpath("(//span[@class='w-[55px] h-[55px] rounded-full hover:bg-primaryLight flex items-center justify-center cursor-pointer'])[1]")
        .click()



        // Check Row 2
        // Check Job title
        cy.xpath("(//p[normalize-space()='Data Analyst'])[1]")
        .should("have.text", "Data Analyst")

        // Check dropdown
        cy.xpath("(//button[contains(text(),'View details')])[2]")

        // Check dropdown content
        cy.xpath("(//ul)[3]")
        .children()
        .should("have.length", 5)

        // Check Apply button
        cy.xpath("(//button[contains(@type,'button')][normalize-space()='Apply now'])[2]")
        .click()

        // Fill form
        // First Name
        cy.get("input[placeholder='First Name']")
        .should("have.attr", "placeholder", "First Name")
        .type("Saul")
        // Last Name
        cy.get("input[placeholder='Last Name']")
        .should("have.attr", "placeholder", "Last Name")
        .type("Owoseni")
        // Email
        cy.get("input[placeholder='Email']")
        .should("have.attr", "placeholder", "Email")
        .type("Owo@mail.com")
        // Mobile No.
        cy.get("input[placeholder='Mobile No.']")
        .should("have.attr", "placeholder", "Mobile No.")
        .type("09092837465")
        // Highest Qualification
        cy.get("input[placeholder='Highest Qualification']")
        .should("have.attr", "placeholder", "Highest Qualification")
        .type("Bachelor of Science")
        // About you
        cy.get("textarea[placeholder='About you']")
        .should("have.attr", "placeholder", "About you")
        .type("I am an Introvert")
        // Upload CV
        cy.get("#cv_upload")
        .attachFile('AnchorsoftLetterhead-1.pdf')
        cy.get("button[type='submit']")
        .click({force: true})

        // Error
        cy.get("div[role='alert']")
        .should("be.visible")
        
        // CLose Apply
        cy.wait(3000)
        cy.xpath("(//span[@class='w-[55px] h-[55px] rounded-full hover:bg-primaryLight flex items-center justify-center cursor-pointer'])[1]")
        .click()
    });
});