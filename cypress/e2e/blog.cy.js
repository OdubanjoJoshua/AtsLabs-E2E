describe('Testing the blog', () => {
    beforeEach(() => {
        cy.viewport(1440, 720);
        cy.visit('/blog');
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

    it.only("Testing the blog section", () => {
        // Checking the number of post in the blog post grid
        cy.xpath("//div[contains(@class,'grid lg:grid-cols-2 gap-10')]").children().should("have.length", 12);

        // Post 1
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[1]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[contains(text(),'Design')])[1]").should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='The Journey Of a Design Guru'])[1]")
        .should("have.text", "The Journey Of a Design Guru");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/1']//span[.='Posted Nov 7, 2023']")
        .contains("2023");

        // Post 2
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[2]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[contains(@class,'px-5 py-3 text-2xl rounded-full w-max undefined bg-primary text-white')][normalize-space()='Design'])[2]")
        .should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='The Journey Of a Graphics Designer'])[1]")
        .should("have.text", "The Journey Of a Graphics Designer");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/2']//span[.='Posted Nov 7, 2023']")
        .contains("2023");

        // Post 3
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[3]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[@class='px-5 py-3 text-2xl rounded-full w-max undefined bg-primary text-white'][normalize-space()='Design'])[3]")
        .should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='The Journey Of Building an AI'])[1]")
        .should("have.text", "The Journey Of Building an AI");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/2']//span[.='Posted Nov 7, 2023']")
        .contains("2023");

        // Post 4
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[4]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[@class='px-5 py-3 text-2xl rounded-full w-max undefined bg-primary text-white'][normalize-space()='Design'])[4]")
        .should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='Elon Musk has sold his shares in Open AI'])[1]")
        .should("have.text", "Elon Musk has sold his shares in Open AI");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/2']//span[.='Posted Nov 7, 2023']")
        .contains("2023");

        // Post 5
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[5]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[@class='px-5 py-3 text-2xl rounded-full w-max undefined bg-primary text-white'][normalize-space()='Design'])[5]")
        .should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='The Journey of creating Fast API'])[1]")
        .should("have.text", "The Journey of creating Fast API");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/2']//span[.='Posted Nov 7, 2023']")
        .contains("2023");

        // Post 6
        // Check if image exists and is visible
        cy.xpath("(//img[contains(@alt,'blog')])[6]")
        .should("exist")
        .should("be.visible")
        .should("have.attr", "src")
        .and("contain", "/_next/image?url=http%3A%2F%2F165.22.122.189%2Fstatic%2Fuploads%2Fpostimages%2Fales-nesetril-Im7lZjxeLhg-unsplash.jpg&w=640&q=75")
        // post category
        cy.xpath("(//div[contains(@class,'px-5 py-3 text-2xl rounded-full w-max undefined bg-primary text-white')][normalize-space()='Design'])[6]")
        .should("be.visible")
        .should("have.text", "Design");
        // checking the title of the first post
        cy.xpath("(//p[normalize-space()='The Journey of Building a Solid Backend'])[1]")
        .should("have.text", "The Journey of Building a Solid Backend");
        // checking the posted time 
        cy.xpath("/html/body/main/section[2]//a[@href='/blog/2']//span[.='Posted Nov 7, 2023']")
        .contains("2023");
    });
});