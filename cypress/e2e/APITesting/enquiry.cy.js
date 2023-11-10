describe('Testing the Contact section ', () => {
  //   it('GET all enquiry', () => {
      
  //     const apiUrl = '165.22.122.189/api/v1/enquiries';
      
  //     cy.request({
  //       method: 'GET',
  //       url: apiUrl
  //     })
  //     .then((response) => {
  //       expect(response.status).to.eq(200)
  //       expect(response.body).to.be.an('array')
  //       expect(response.body).to.have.length.greaterThan(0)

  //       const numberOfObjects = response.body.length;
  //       cy.log(`Number of objects in the API response: ${numberOfObjects}`);
  //     })
  //   });
    

  //   it('GET a single enquiry', () => {

  //     const apiUrl = '165.22.122.189/api/v1/enquiries/1';
    
  //     cy.request(apiUrl)
  //     .then((response) => {
  //       expect(response.status).to.equal(200); 
  //       expect(response.body).to.be.an('object'); 

  //       const expectedObjectProperties = ['id', 'firstName', 'lastName', 'email', 'mobile', 'message'];
  //       expect(response.body).to.have.all.keys(...expectedObjectProperties);

  //       expect(response.body.id).to.be.a('number');
  //       expect(response.body.firstName).to.be.a('string');
  //       expect(response.body.lastName).to.be.a('string');
  //       expect(response.body.mobile).to.be.a('string');

  //       cy.log('Fetched Object:', response.body);
  //     })
  //   });


  //   it('POST an enquiry', () => {
        
  //     const apiUrl = '165.22.122.189/api/v1/enquiries';

  //     const validFormData = {
  //       firstName: 'John',
  //       lastName: 'Doe',
  //       email: 'john.doe@example.com',
  //       mobile: '1234567890',
  //       message: 'This is a test message.',
  //     };

  //     const invalidFormData = {
  //       firstName: '', 
  //       lastName: 'Doe',
  //       email: 'invalid-email',
  //       mobile: '123abc',
  //       message: '',
  //     };

  //     // POST Request for the valid Data
  //     cy.request({
  //       method: 'POST',
  //       url: apiUrl,
  //       body: validFormData,
  //     }).then((response) => {
  //       expect(response.status).to.equal(200);
  //     });

  //   // POST Request for the invalid Data    
  //     cy.request({
  //       method: 'POST',
  //       url: apiUrl,
  //       body: invalidFormData,
  //     }).then((response) => {
  //       expect(response.status).to.equal(400);
  //     });
  //   });


  // it('UPDATE a single enquiry', () => {

  //   const apiUrl = '165.22.122.189/api/v1/enquiries/20';

  //   const updatedData = {
  //     firstName: 'Mark',
  //     lastName: 'Joseph',
  //     email: 'Jose.mark@ex.com',
  //     mobile: '9876543210',
  //     message: 'message content.',
  //   };

  //   cy.request({
  //     method: 'PUT',
  //     url: apiUrl,
  //     body: updatedData,
  //   }).then((response) => {
  //     expect(response.status).to.equal(200);
  //   });
  //   });


  // it('DELETE an enquiry', () => {

  //   const apiUrl = '165.22.122.189/api/v1/enquiries/20';

  //   // Make a DELETE request to delete the resource
  //   cy.request({
  //     method: 'DELETE',
  //     url: apiUrl,
  //   }).then((response) => {
  //     expect(response.status).to.equal(200);
  //   });
  // });
});