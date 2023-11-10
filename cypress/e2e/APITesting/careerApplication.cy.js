describe('Testing the Career Openings', () => {
    // it('GET Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careerapplications';

    //     cy.request({
    //         method: 'GET',
    //         url: apiUrl
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body).to.have.length.greaterThan(0)
            
    //     })
    // })

    // it('POST Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careerapplications';

    //     cy.request({
    //         method: 'POST',
    //         url: apiUrl,
    //         body: {
    //             firstName:"Test 17",
    //             lastName:"Batch 17",
    //             email:"mailemo@mail.com",
    //             mobile:"999988",
    //             highestQualification:"NCE",
    //             briefAboutYou:"I code"
    //         }
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body.firstName).to.be.a('string')
    //         expect(response.body.lastName).to.be.a('string')
    //         expect(response.body.email).to.be.a('string')
    //         expect(response.body.mobile).to.be.a('string')
    //         expect(response.body.highestQualification).to.be.a('string')
    //         expect(response.body.briefAboutYou).to.be.a('string')
    //     })
    // })

    // it('PUT Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careerapplications/20';

    //     cy.request({
    //         method: 'PUT',
    //         url: apiUrl,
    //         body: {
    //             mobile:"09293838920",
    //         }
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // })

    // it('PUT Call to Submit PDF to CV Endpoint', () => {
    //     cy.fixture('/AnchorsoftLetterhead-1.pdf', 'binary').then(pdfData => {
    //         const fileName = 'AnchorsoftLetterhead-1.pdf';
    //         const blob = Cypress.Blob.binaryStringToBlob(pdfData);
    //         const file = new File([blob], fileName);
    
    //         const formData = new FormData();
    //         formData.set('image', file);
    
    //         cy.request({
    //             method: 'PUT',
    //             url: 'http://165.22.122.189/api/v1/careerapplications/20/cvupload',
    //             headers: {
    //                 'Content-Type': 'application/json; charset=utf-8',
    //             },
    //             body: formData,
    //         }).then(response => {
    //             // Assuming a successful response has a status code of 200
    //             expect(response.status).to.eq(200);
    //             // Add more assertions as needed based on your API response
    //         });
    //     });
    // });
    

    // it('DELETE Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careerapplications/20';

    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // })
});