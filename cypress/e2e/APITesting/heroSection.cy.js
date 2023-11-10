describe('Testing the hero section', () => {
    it('GET Request', () => {

        const apiUrl = "http://165.22.122.189/api/v1/heroes";

        cy.request({
            method: "GET",
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('GET Image Request', () => {

        const apiUrl = "http://165.22.122.189/api/v1/heroesimages";

        cy.request({
            method: "GET",
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    // it('POST request', () => {

    //     const apiUrl = "http://165.22.122.189/api/v1/heroes";
    //     const requestBody = {
    //         heroText: "We are a Creative Software Development Agency",
    //         heroTextSummary: "Leverage Anchorsoft Tech System's world-class engineering teams to get your ideas and projects up and running quickly. Anchorsoft Tech System helps you set the stage for user-centric products.",
    //     };
    //     cy.request({
    //         method: 'POST',
    //         url: apiUrl,
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // });


    it('POST Image request', () => {

        const apiUrl = "http://165.22.122.189/api/v1/heroesimages/4/addimage";
        const imagePath = 'C:\Users\JoshuaOdubanjo\Desktop\ATS\cypress\fixtures\ale.jpg';

        // cy.fixture(imagePath, 'binary').then((fileContent) => {
        //     const formData = new FormData();
        //     formData.append('image', new File([fileContent], 'ale.jpg'));
            
        const formData = new FormData();
        formData.append('image', 'cypress\fixtures\ale.jpg');
      
        // cy.request({
        //     method: 'POST',
        //     url: apiUrl,
        //     body: formData
        // })
            cy.form_request(apiUrl, formData)
            .then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('success', true);
            expect(response.body).to.have.property('imageUrl');
            cy.log('Uploaded Image:', response.body.imageUrl);
        });
    });


    // it('UPDATE request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/heroes/4";
    //     const requestBody = {
    //         heroText: "We are a Creative Software Development Agency",
    //         heroTextSummary: "Leverage Anchorsoft Tech System's world-class engineering teams.",
    //     };
    //     cy.request({
    //         method: 'PUT',
    //         url: apiUrl,
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.equal(200);
    //     });
    // })

    // it('DELETE request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/heroes/4";
    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl,
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.equal(200);
    //     });
    // })


    // it('DELETE Image request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/heroesimages/5";
    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl,
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.equal(200);
    //     });
    // })
});