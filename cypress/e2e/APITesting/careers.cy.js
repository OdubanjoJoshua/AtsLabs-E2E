describe('Testing the Career Openings', () => {
    it('GET Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careeropenings';

        cy.request({
            method: 'GET',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length.greaterThan(0)
            
        })
    })

    // it('POST Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careeropenings';

    //     cy.request({
    //         method: 'POST',
    //         url: apiUrl,
    //         body: {
    //             title:"opening 3",
    //             jobType:"jtype 3",
    //             description:"talker 3"
    //         }
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //         expect(response.body.title).to.be.a('string')
    //         expect(response.body.jobType).to.be.a('string')
    //         expect(response.body.description).to.be.a('string')
    //     })
    // })

    // it('PUT Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careeropenings/6';

    //     cy.request({
    //         method: 'PUT',
    //         url: apiUrl,
    //         body: {
    //             title:"opening 5",
    //         }
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // })

    // it('DELETE Call', () => {
    //     const apiUrl = 'http://165.22.122.189/api/v1/careeropenings/6';

    //     cy.request({
    //         method: 'DELETE',
    //         url: apiUrl
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // })
});