

describe('Test for the main page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.viewport(1440, 720);
    });
    it('Testing the drop-down of the navbar', () => {
        // Home
        cy.xpath("(//a[normalize-space()='Home'])[1]")
        .should("have.text", "Home")
        .should("have.attr", "href")
        .and("include", "/")
        
        // Services
        cy.xpath("(//a[normalize-space()='Services'])[1]")
        .should("exist")
        .should("have.text", "Services")
        .should("have.attr", "href")
        .should("not.be.empty")
        .and("include", "/services")

        // About Us
        cy.xpath("(//button[normalize-space()='About'])[1]").click();
        cy.xpath("(//div)[4]").should("be.visible").wait(1000);
        cy.xpath("(//ul[contains(@class,'flex flex-col')])[1]").children().should("have.length", 3).wait(1000);
        cy.xpath("(//button[normalize-space()='About'])[1]").click();

        // Contact
        cy.xpath("(//a[normalize-space()='Contact'])[1]")
        .should("exist")
        .should("have.text", "Contact")
        .should("have.attr", "href")
        .should("not.be.empty")
        .and("include", "/contact")
    });

    it('Section one: Hero title, content text and Get in touch button', () => {
        // Testing the title and content
        cy.xpath("(//h1[contains(text(),'We are a')])[1]")
        .should("exist")
        cy.xpath("(//p[contains(@class,'text-2xl font-medium text-customBlack mt-3 md:pr-16 2xl:pr-32')])[1]")
        .should("exist")
        .contains("Leverage ATS Labs' world-class engineering teams to get your ideas and projects up and running quickly.")

        // Testing the "Get in touch" button
        cy.xpath("(//a[normalize-space()='Get in touch'])[1]").invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("(//a[normalize-space()='Get in touch'])[1]").click();
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/")
    });
})


describe('Section one: Automation of the carousel images', () => {
    it('Automation test of the carousel images', () => {
        cy.viewport(1440, 720);
        cy.visit('/');

        cy.xpath("(//img[contains(@alt,'ATS Labs')])[1]").should('be.visible');
        cy.wait(5000);
        cy.xpath("(//img[contains(@alt,'ATS Labs')])[2]").should('be.visible');
        cy.wait(5000);
        cy.xpath("(//img[contains(@alt,'ATS Labs')])[3]").should('be.visible');
        cy.wait(5000);
        cy.xpath("(//img[contains(@alt,'ATS Labs')])[4]").should('be.visible');
    });
});


describe('Section Two: Industries on our radar', () => {
    beforeEach(() => {
        cy.viewport(1, 1080);
        cy.visit("/");
    });

    it('confirming the title, content and number of the cards', () => {
        // Header
        cy.xpath("(//h2[normalize-space()='Industries on Our Radar'])[1]").should("be.visible").should("have.text", "Industries on Our Radar");
        // Content
        cy.xpath("(//p[contains(@class,'text-center text-2xl md:text-3xl text-customBlack font-medium')])[1]")
        .should("exist")
        .should("contain", "Anchorsoft Tech System brings you its expertise in the form of multiple development services that you can choose from.")

        // Card 1
        cy.xpath("(//div[contains(@class,'mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8')])[1]").children()
        .should("have.length.greaterThan", 0);
        
        cy.xpath("(//div[contains(@class,'mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8')])[1]").each(($card, index) => {
            // Interact with the current blog post card

            // 1. Check if the card has an image
            cy.get($card).find('img').should('exist');
      
            // 2. Check if the card has a title
            cy.get($card).find('h5').should('exist');
      
            // 3. Check if the card has content
            cy.get($card).find('p').should('exist');
      
            // 4. Click the button to open the modal
            cy.get($card).find('button').click();
      
            // 5. Check if the modal is opened
            const modalSelector = 'form';
            cy.get(modalSelector).should('exist');
      
            // 6. Close the modal (assuming there's a close button)
            cy.get(modalSelector).find('svg').click();
      
            // Log a message for each blog post card
            cy.log(`Interacted with Blog Post Card ${index + 1}`);
        })
    });
})


describe('Section Three: Our Services', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit("/");
    });

    it('testing if the contents exists', () => {
        // Testing the Whole Section
        cy.get("section[class='undefined py-16 bg-customLight px-8 lg:px-[5rem] xl:px-[9rem] 2xl:px-[11rem]']")
        .should("exist")

        // Check if there are only two tags in the section
        cy.get("section[class='undefined py-16 bg-customLight px-8 lg:px-[5rem] xl:px-[9rem] 2xl:px-[11rem]']")
        .children()
        .should("have.length", 2)

        // Check if there are only 2 content (bespoke and saas)
        cy.get(".flex.flex-col.gap-y-16.w-full")
        .should("exist");
        cy.get(".flex.flex-col.gap-y-16.w-full")
        .children()
        .should("have.length", 2);
        
        // Checking the bespoke content
        cy.xpath("(//div[@class='flex flex-col lg:flex-row gap-8 items-center'])[1]")
        .should("exist");
        cy.xpath("(//div[@class='flex flex-col lg:flex-row gap-8 items-center'])[1]")
        .children()
        .should("have.length", 2);
        
        // checking the image on the left
        cy.xpath("(//img[@alt='SAAS'])[1]")
        .should("be.visible")
        .should("have.attr", "src")
        .and("include", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fhomeservices%2Funsplash_m_HRfLhgABo.png&w=1080&q=75")
        
        // Checking the text content on the right
        cy.xpath("(//div)[37]")
        .should("exist");
        cy.xpath("(//div)[37]")
        .children()
        .should("have.length", 3);

        // Checking its title
        cy.xpath("(//h2[normalize-space()='Bespoke Software Development'])[1]")
        .should("have.text", "Bespoke Software Development")

        // Checking its content
        cy.xpath("(//p[@class='text-[1.7rem] font-medium my-6'][contains(text(),'Lorem ipsum dolor sit amet consectetur, adipisicin')])[1]")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ipsa corrupti. Ex saepe facere totam. Deleniti officiis excepturi, recusandae non culpa iste nesciunt eveniet sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magnam fugit quam minima amet voluptas mollitia ipsam libero, facilis dolorem sint cupiditate possimus deserunt laudantium exercitationem esse delectus alias repudiandae!")

        // Checking the button
        cy.xpath("/html/body/main/section[3]/div/div[1]/div[2]/a[@href='/contact']")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("/html/body/main/section[3]/div/div[1]/div[2]/a[@href='/contact']").click();
        cy.wait(2000)
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.wait(2000)
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/")

        // Checking the saas content
        cy.xpath("(//div[@class='flex flex-col lg:flex-row gap-8 items-center'])[2]")
        .should("exist");
        cy.xpath("(//div[@class='flex flex-col lg:flex-row gap-8 items-center'])[2]")
        .children()
        .should("have.length", 2);
        
        // Checking the text content on the left
        cy.xpath("(//div)[39]")
        .should("exist");
        cy.xpath("(//div)[39]")
        .children()
        .should("have.length", 3);
        
        // Checking its title
        cy.xpath("(//h2[normalize-space()='Software as a service (Saas)'])[1]")
        .should("have.text", "Software as a service (Saas)")
        
        // Checking its content
        cy.xpath("(//p[@class='text-[1.7rem] font-medium my-6'][contains(text(),'Lorem ipsum dolor sit amet consectetur, adipisicin')])[1]")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ipsa corrupti. Ex saepe facere totam. Deleniti officiis excepturi, recusandae non culpa iste nesciunt eveniet sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magnam fugit quam minima amet voluptas mollitia ipsam libero, facilis dolorem sint cupiditate possimus deserunt laudantium exercitationem esse delectus alias repudiandae!")
        
        // checking the image on the right
        cy.xpath("(//img[@alt='SAAS'])[2]")
        .should("be.visible")
        .should("have.attr", "src")
        .and("include", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fhomeservices%2Funsplash_QUHuwyNgSA0.png&w=1080&q=75")

        // Checking the button
        cy.xpath("/html/body/main/section[3]/div/div[2]/div[1]/a[@href='/contact']")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("/html/body/main/section[3]/div/div[2]/div[1]/a[@href='/contact']").click();
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/")
    });
});


describe('Section Four: Our Blog', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit("/");
    });

    it('Testing its content', () => {

        // Check the content and its children exist
        cy.get("div[class='flex items-center justify-between']")
        .should("exist")
        cy.get("div[class='flex items-center justify-between']")
        .children()
        .should("have.length", 2)

        // Check the header 
        cy.get("div[class='flex items-center justify-between']")
        .should("exist")
        cy.get("div[class='flex items-center justify-between']")
        .children()
        .should("have.length", 2)

        // Check the title
        cy.xpath("(//h5[normalize-space()='Our Blog'])[1]")
        .should("be.visible")
        .should("have.text", "Our Blog")

        // Check the button
        cy.xpath("(//a[normalize-space()='Visit our blog'])[1]")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/blog");
        cy.xpath("(//a[normalize-space()='Visit our blog'])[1]").click();
        cy.url().should("include", "https://frontent-atslabs.vercel.app/blog");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/")

        // check the svg
        cy.xpath("(//*[name()='svg'])[7]")
        .should("be.visible")

        // check the div for the blog
        cy.get(".w-full.overflow-auto")
        .should("exist")
        cy.get(".w-full.overflow-auto")
        .children()
        .should("have.length", 1)

        // check the blog contents
        const blogRowSelector = "div[class='w-max xl:w-full mt-12 grid grid-cols-3 gap-12']"

        cy.get(blogRowSelector).each(($row, rowIndex) => {
            // Log a message for each row
            cy.log(`Iterating over Blog Row ${rowIndex + 1}`);
      
            // Iterate over each blog card in the row
            cy.get($row).find('a').each(($card, cardIndex, $cards) => {
                // Log a message for each blog card
                cy.log(`Clicking Blog Card ${cardIndex + 1}`);
      
                // Use invoke to trigger the click without relying on .click()
                cy.wrap($card).invoke('removeAttr', 'target').invoke('click'); 
      
                // Navigate back to the original page
                cy.go('back');
            });
        })
    });
});


describe('Section Five: How may we serve you?', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit("/");
    });

    it('testing the contents', () => {
        cy.get("section[class='py-12 bg-customLight flex flex-col items-center justify-center px-8 lg:px-[4rem] xl:px-[8rem]']")
        .should("exist")
        .should("be.visible")
        cy.get("section[class='py-12 bg-customLight flex flex-col items-center justify-center px-8 lg:px-[4rem] xl:px-[8rem]']")
        .children()
        .should("exist")
        .should("have.length", 3)

        // Check the title
        cy.xpath("(//h4[normalize-space()='How may we serve you?'])[1]")
        .should("have.text", "How may we serve you?")

        // Check the content
        cy.get("p[class='text-[1.8rem] text-primary text-center max-w-[52.3rem] my-6']")
        .should("have.text", "Leverage our world-class engineering teams to get your ideas and projects up and running quickly.")

        // Check the link
        cy.xpath("/html//main/section[5]/a[@href='/contact']")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("/html//main/section[5]/a[@href='/contact']").click();
        cy.wait(3000)
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/")
    });
});