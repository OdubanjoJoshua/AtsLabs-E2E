describe('Testing services page', () => {
    beforeEach(() => {
        cy.viewport(1440, 1080);
        cy.visit('/services');
    })

    it('Section One', () => {
        cy.xpath("(//h1[normalize-space()='Software Development Services'])[1]")
        .should("be.visible")
        .should("have.text", "Software Development Services")
    });

    it('testing if the contents exists', () => {        
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
        .should("have.length", 2);

        // Checking its title
        cy.xpath("(//h2[normalize-space()='Bespoke Software Development'])[1]")
        .should("have.text", "Bespoke Software Development")

        // Checking its content
        cy.xpath("(//p[@class='text-[1.7rem] font-medium my-6'][contains(text(),'Lorem ipsum dolor sit amet consectetur, adipisicin')])[1]")
        .should("have.text", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ipsa corrupti. Ex saepe facere totam. Deleniti officiis excepturi, recusandae non culpa iste nesciunt eveniet sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magnam fugit quam minima amet voluptas mollitia ipsam libero, facilis dolorem sint cupiditate possimus deserunt laudantium exercitationem esse delectus alias repudiandae!")

        // Checking the button
        cy.xpath("/html[1]/body[1]/header[1]")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("/html//main/section[2]/div/div[1]/div[2]/a[@href='/contact']").click();
        cy.wait(2000)
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.wait(2000)
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/services")

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
        .should("have.length", 2);
        
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
        cy.xpath("/html//main/section[2]/div/div[2]/div[1]/a[@href='/contact']")
        .invoke("attr", "href").as("https://frontent-atslabs.vercel.app/contact");
        cy.xpath("/html//main/section[2]/div/div[2]/div[1]/a[@href='/contact']").click();
        cy.url().should("include", "https://frontent-atslabs.vercel.app/contact");
        cy.go("back");
        cy.url().should("eq", "https://frontent-atslabs.vercel.app/services")
    });

    it('Section Three', () => {
        // Check how many tags are in the section
        cy.get("body > main:nth-child(4) > section:nth-child(3) > article:nth-child(1)")
        .children()
        .should("have.length", 4)

        // Row 1
        cy.xpath("(//p[contains(text(),'At ATS Labs, we can offer high quality API develop')])[1]")
        .should("have.text", "At ATS Labs, we can offer high quality API development services to our clients thanks to our wealth of experience and expertise in this area of software development.")

        // Row 2
        // Title
        cy.xpath("(//h2[normalize-space()='What kinds of APIs do we build?'])[1]")
        .should("have.text", "What kinds of APIs do we build?")
        // Body
        cy.xpath("(//p[contains(text(),'The two main kinds of API we build are RESTful API')])[1]")
        .should("have.text", "The two main kinds of API we build are RESTful APIs and GraphQL APIs. We are also familiar with Resource Oriented Architecture styles. By following these architectural styles, our APIs are well structured and follow familiar patterns that are easily recognisable to industry practitioners. This also makes our APIs easier to consume. Our APIs often follow the OpenAPI schema, which is increasingly becoming an industry standard and allows for easier integration with existing systems and codebases. It also means that API client libraries can be autogenerated, making consuming the API more convenient for users.")

        // Row 3
        // Title
        cy.xpath("(//h2[normalize-space()='What languages do we use to develop APIs?'])[1]")
        .should("have.text", "What languages do we use to develop APIs?")
        // Body
        cy.xpath("(//p[contains(text(),'The two main kinds of API we build are RESTful API')])[2]")
        .should("have.text", "The two main kinds of API we build are RESTful APIs and GraphQL APIs. We are also familiar with Resource Oriented Architecture styles. By following these architectural styles, our APIs are well structured and follow familiar patterns that are easily recognisable to industry practitioners. This also makes our APIs easier to consume. Our APIs often follow the OpenAPI schema, which is increasingly becoming an industry standard and allows for easier integration with existing systems and codebases. It also means that API client libraries can be autogenerated, making consuming the API more convenient for users.")

        // Row 4
        // Title
        cy.xpath("(//h2[normalize-space()='How secure are our APIs?'])[1]")
        .should("have.text", "How secure are our APIs?")
        // Body
        cy.xpath("(//p[contains(text(),'The two main kinds of API we build are RESTful API')])[3]")
        .should("have.text", "The two main kinds of API we build are RESTful APIs and GraphQL APIs. We are also familiar with Resource Oriented Architecture styles. By following these architectural styles, our APIs are well structured and follow familiar patterns that are easily recognisable to industry practitioners. This also makes our APIs easier to consume. Our APIs often follow the OpenAPI schema, which is increasingly becoming an industry standard and allows for easier integration with existing systems and codebases. It also means that API client libraries can be autogenerated, making consuming the API more convenient for users.")
    });

    it.only('Section Four', () => {
        // Check heading
        cy.xpath("(//h3[normalize-space()='Some of Our Tools and Technologies'])[1]")
        .should("have.text", "Some of Our Tools and Technologies")

        // Check body
        cy.xpath("(//tbody)[1]")
        .children()
        .should("have.length", 9)

        // Row 1
        // Left title
        cy.xpath("(//span[normalize-space()='Web'])[1]")
        .should("have.text", "Web")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='React JS'])[1]")
        .should("have.text", "React JS")
        cy.xpath("(//img[@alt='typescript'])[1]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Freact.png&w=96&q=75")
        // List 2
        cy.xpath("(//span[normalize-space()='Next JS'])[1]")
        .should("have.text", "Next JS")
        cy.xpath("(//img[@alt='typescript'])[2]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fnextjs.png&w=96&q=75")

        // Row 2
        // Left title
        cy.xpath("(//span[normalize-space()='Mobile'])[1]")
        .should("have.text", "Mobile")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='React Native'])[1]")
        .should("have.text", "React Native")
        cy.xpath("(//img[@alt='typescript'])[3]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Freact.png&w=96&q=75")

        // Row 3
        // Left title
        cy.xpath("(//span[normalize-space()='APIs (REST & GraphQL)'])[1]")
        .should("have.text", "APIs (REST & GraphQL)")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='Node JS'])[1]")
        .should("have.text", "Node JS")
        cy.xpath("(//img[@alt='typescript'])[4]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fnodejs.png&w=256&q=75")
        // List 2
        cy.xpath("(//span[normalize-space()='Python'])[1]")
        .should("have.text", "Python")
        cy.xpath("(//img[@alt='typescript'])[5]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fpython-3%201.png&w=128&q=75")

        // Row 4
        // Left title
        cy.xpath("(//span[normalize-space()='Software QA'])[1]")
        .should("have.text", "Software QA")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='Selenium'])[1]")
        .should("have.text", "Selenium")
        cy.xpath("(//img[@alt='typescript'])[6]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fselenium.png&w=96&q=75")
        // List 2
        cy.xpath("(//img[@alt='typescript'])[7]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fcypress.png&w=256&q=75")
        
        // Row 5
        // Left title
        cy.xpath("(//span[normalize-space()='AMQP & Cache'])[1]")
        .should("have.text", "AMQP & Cache")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='Redis'])[1]")
        .should("have.text", "Redis")
        cy.xpath("(//img[@alt='typescript'])[8]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fredis.png&w=128&q=75")
        // List 2
        cy.xpath("(//img[@alt='typescript'])[9]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Frabbitmq.png&w=384&q=75")
        // List 3
        cy.xpath("(//img[@alt='typescript'])[10]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fbullmq.png&w=384&q=75")

        // Row 6
        // Left title
        cy.xpath("(//span[normalize-space()='Containers and Orchestration'])[1]")
        .should("have.text", "Containers and Orchestration")
        // Right list
        // List 1
        cy.xpath("(//span[normalize-space()='Docker'])[1]")
        .should("have.text", "Docker")
        cy.xpath("(//img[@alt='typescript'])[11]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fdocker.png&w=128&q=75")
        // List 2
        cy.xpath("(//span[normalize-space()='Kubernetes'])[1]")
        .should("have.text", "Kubernetes")
        cy.xpath("(//img[@alt='typescript'])[12]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fkubernets.png&w=96&q=75")

        // Row 7
        // Left title
        cy.xpath("(//span[normalize-space()='Databases'])[1]")
        .should("have.text", "Databases")
        // Right list
        // List 1
        cy.xpath("(//img[@alt='typescript'])[13]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fmysql.png&w=256&q=75")
        // List 2
        cy.xpath("(//span[normalize-space()='Postgres'])[1]")
        .should("have.text", "Postgres")
        cy.xpath("(//img[@alt='typescript'])[14]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fpostgresql.png&w=96&q=75")
        // List 3
        cy.xpath("(//img[@alt='typescript'])[15]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fsqlserver.png&w=128&q=75")
        // List 4
        cy.xpath("(//img[@alt='typescript'])[16]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Foracle.png&w=256&q=75")
        // List 5
        cy.xpath("(//img[@alt='typescript'])[17]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fmongodb.png&w=128&q=75")
        
        // Row 8
        // Left title
        cy.xpath("(//span[normalize-space()='Cloud'])[1]")
        .should("have.text", "Cloud")
        // Right list
        // List 1
        cy.xpath("(//img[@alt='typescript'])[18]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Faws.png&w=96&q=75")
        // List 2
        cy.xpath("(//span[normalize-space()='Digital Ocean'])[1]")
        .should("have.text", "Digital Ocean")
        cy.xpath("(//img[@alt='typescript'])[19]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fdigitalocean.png&w=96&q=75")
        // List 3
        cy.xpath("(//span[normalize-space()='Vercel'])[1]")
        .should("have.text", "Vercel")
        cy.xpath("(//img[@alt='typescript'])[20]")
        .should("exist")
        .should("be.visible")
        .should('have.attr', 'src', "/_next/image?url=%2Fvercel.png&w=96&q=75")
    });
});