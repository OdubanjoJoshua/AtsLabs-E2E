describe('Testing Pages', () => {

    const apiUrl = "165.22.122.189/api/v1/pages";

    it('GET Request', () => {
        cy.request({
            method: "GET",
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.greaterThan(0)
        })
    });


    // it('POST Request', () => {
    //     cy.request({
    //         method: "POST",
    //         url: apiUrl,
    //         body: {
    //          "pageName":"Stack Page"
    //     }})
    //     .then((response) => {
    //         expect(response.status).to.equal(200)
    //     })
    // });


    // it('UPDATE Request', () => {
    //     const apiUrl = "165.22.122.189/api/v1/pages/6";
    //     cy.request({
    //         method: "PUT",
    //         url: apiUrl,
    //         body: {
    //             "pageName":"Main Page"
    //     }})
    //     .then((response) => {
    //         expect(response.status).to.equal(200)
    //     })
    // });


    // it('DELETE an enquiry', () => {
    //     const apiUrl = '165.22.122.189/api/v1/industries/6';
      
    //     // Make a DELETE request to delete the resource
    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl,
    //     })
    //     .then((response) => {
    //         expect(response.status).to.equal(200);
    //     });
    // });
});