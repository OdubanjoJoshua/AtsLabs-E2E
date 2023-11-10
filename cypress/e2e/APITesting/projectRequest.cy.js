describe('Testing the home page services', () => {
    it('GET Call', () => {
        const apiUrl = "165.22.122.189/api/v1/projectrequests";

        cy.request({
            method: 'GET',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })


    // it('POST request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/projectrequests";
    //     const requestBody = {
    //         "industryName": "MernStark",
    //         "companyName": "StarTrek",
    //         "firstName": "molly",
    //         "lastName": "polly",
    //         "email": "duck@demn.com",
    //         "mobile": "08029501995",
    //         "projectBrief": "proceed"
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


    // it('UPDATE request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/projectrequests/4";
    //     const requestBody = {
    //         "companyName": "StarLabs",
    //         "firstName": "brolly",
    //         "lastName": "folly",
    //     };
    //     cy.request({
    //         method: 'PUT',
    //         url: apiUrl,
    //         body: requestBody
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // });


    // it('DELETE request', () => {
    //     const apiUrl = "http://165.22.122.189/api/v1/projectrequests/4";
    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl,
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // });
})