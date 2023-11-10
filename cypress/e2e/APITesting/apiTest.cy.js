describe('Testing the Contact section ', () => {
      it('GET all enquiry', () => {
        
        const apiUrl = '165.22.122.189/api/v1/enquiries';
        
        cy.request({
          method: 'GET',
          url: apiUrl
        })
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.an('array')
          expect(response.body).to.have.length.greaterThan(0)
  
          const numberOfObjects = response.body.length;
          cy.log(`Number of objects in the API response: ${numberOfObjects}`);
        })
      });
      
  
      it('GET a single enquiry', () => {
  
        const apiUrl = '165.22.122.189/api/v1/enquiries/1';
      
        cy.request(apiUrl)
        .then((response) => {
          expect(response.status).to.equal(200); 
          expect(response.body).to.be.an('object'); 
  
          const expectedObjectProperties = ['id', 'firstName', 'lastName', 'email', 'mobile', 'message'];
          expect(response.body).to.have.all.keys(...expectedObjectProperties);
  
          expect(response.body.id).to.be.a('number');
          expect(response.body.firstName).to.be.a('string');
          expect(response.body.lastName).to.be.a('string');
          expect(response.body.mobile).to.be.a('string');
  
          cy.log('Fetched Object:', response.body);
        })
      });
  
  
      it('POST an enquiry', () => {
          
        const apiUrl = '165.22.122.189/api/v1/enquiries';
  
        const validFormData = {
          firstName: 'John',
          lastName: 'Doe',
          email: 'johnny.doe@exampler.com',
          mobile: '1234567890',
          message: 'This is a test message.',
        };
  
        // const invalidFormData = {
        //   firstName: '', 
        //   lastName: 'Doe',
        //   email: 'invalid-email',
        //   mobile: '123abc',
        //   message: '',
        // };
  
        // POST Request for the valid Data
        cy.request({
          method: 'POST',
          url: apiUrl,
          body: validFormData,
        }).then((response) => {
          expect(response.status).to.equal(200);
        });
  
      // POST Request for the invalid Data    
        // cy.request({
        //   method: 'POST',
        //   url: apiUrl,
        //   body: invalidFormData,
        // }).then((response) => {
        //   expect(response.status).to.equal(400);
        // });
      });
  
  
    it('UPDATE a single enquiry', () => {
  
      const apiUrl = '165.22.122.189/api/v1/enquiries/27';
  
      const updatedData = {
        firstName: 'Mark',
        lastName: 'Joseph',
        email: 'Jose.marcus@exam.com',
        mobile: '9876543210',
        message: 'message content.',
      };
  
      cy.request({
        method: 'PUT',
        url: apiUrl,
        body: updatedData,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
      });
  
  
    it('DELETE an enquiry', () => {
  
      const apiUrl = '165.22.122.189/api/v1/enquiries/27';
  
      // Make a DELETE request to delete the resource
      cy.request({
        method: 'DELETE',
        url: apiUrl,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
});




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


    // it('GET Image Request', () => {

    //     const apiUrl = "http://165.22.122.189/api/v1/heroesimages";

    //     cy.request({
    //         method: "GET",
    //         url: apiUrl
    //     })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //     })
    // });


    it('POST request', () => {

        const apiUrl = "http://165.22.122.189/api/v1/heroes";
        const requestBody = {
            heroText: "We are a Creative Software Development Agency",
            heroTextSummary: "Leverage Anchorsoft Tech System's world-class engineering teams to get your ideas and projects up and running quickly. Anchorsoft Tech System helps you set the stage for user-centric products.",
        };
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    // it('POST Image request', () => {

    //     const apiUrl = "http://165.22.122.189/api/v1/heroesimages/4/addimage";
    //     const imagePath = 'C:\Users\JoshuaOdubanjo\Desktop\ATS\cypress\fixtures\ale.jpg';

    //     // cy.fixture(imagePath, 'binary').then((fileContent) => {
    //     //     const formData = new FormData();
    //     //     formData.append('image', new File([fileContent], 'ale.jpg'));
            
    //     const formData = new FormData();
    //     formData.append('image', 'cypress\fixtures\ale.jpg');
      
    //     // cy.request({
    //     //     method: 'POST',
    //     //     url: apiUrl,
    //     //     body: formData
    //     // })
    //         cy.form_request(apiUrl, formData)
    //         .then((response) => {
    //         expect(response.status).to.equal(200);
    //         expect(response.body).to.have.property('success', true);
    //         expect(response.body).to.have.property('imageUrl');
    //         cy.log('Uploaded Image:', response.body.imageUrl);
    //     });
    // });


    it('UPDATE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/heroes/12";
        const requestBody = {
            heroText: "We are a Creative Software Development Agency",
            heroTextSummary: "Leverage Anchorsoft Tech System's world-class engineering teams.",
        };
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    })


    it('DELETE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/heroes/12";
        cy.request({
            method: 'DELETE',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    })


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




describe('Testing the home page services', () => {
    it('GET Call', () => {
        const apiUrl = "165.22.122.189/api/v1/homepageservices";

        cy.request({
            method: 'GET',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })


    it('POST request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/homepageservices";
        const requestBody = {
            title: "Bespoke Software Development",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, ipsa corrupti. Ex saepe facere totam. Deleniti officiis excepturi, recusandae non culpa iste nesciunt eveniet sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magnam fugit quam minima amet voluptas mollitia ipsam libero, facilis dolorem sint cupiditate possimus deserunt laudantium exercitationem esse delectus alias repudiandae!",
        };
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('UPDATE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/homepageservices/14";
        const requestBody = {
            "title": "Wespoke Software Development",
        };
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('DELETE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/homepageservices/14";
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });
});





describe('Testing Industries', () => {

    const apiUrl = "http://165.22.122.189/api/v1/industries";

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


    it('POST Request', () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: {
                title: "Entertainment",
                description: "Anchorsoft Tech System brings you its expertise in the form of multiple development services that you can choose from."
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('UPDATE Request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/industries/18";
        cy.request({
            method: "PUT",
            url: apiUrl,
            body: {
                title: "Sports & News",
                description: "Anchorsoft Tech System brings you its expertise in the form of multiple development services that you can choose from."
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('DELETE an enquiry', () => {
        const apiUrl = '165.22.122.189/api/v1/industries/18';
      
        // Make a DELETE request to delete the resource
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});




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


    it('POST Request', () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: {
                pageName:"StackOver Page"
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('UPDATE Request', () => {
        const apiUrl = "165.22.122.189/api/v1/pages/13";
        cy.request({
            method: "PUT",
            url: apiUrl,
            body: {
                "pageName":"Mainus Page"
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('DELETE an enquiry', () => {
        const apiUrl = '165.22.122.189/api/v1/pages/13';
      
        // Make a DELETE request to delete the resource
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});




describe('Testing Pages Sections', () => {

    const apiUrl = "165.22.122.189/api/v1/pagesections";

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


    it('POST Request', () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: {
               sectionName:"About Us",
               content:"some conts here",
               pageId:1
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('UPDATE Request', () => {
        const apiUrl = "165.22.122.189/api/v1/pagesections/17";
        cy.request({
            method: "PUT",
            url: apiUrl,
            body: {
                pageName:"Main Page"
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('DELETE an enquiry', () => {
        const apiUrl = '165.22.122.189/api/v1/pagesections/17';
      
        // Make a DELETE request to delete the resource
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});




describe('Testing the Posts', () => {
    it('GET Request', () => {

        const apiUrl = "165.22.122.189/api/v1/posts";

        cy.request({
            method: "GET",
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('POST request', () => {
        const apiUrl = "165.22.122.189/api/v1/posts";
        const requestBody = {
            title: "The Journey Of a Convener Artist",
            content: "csclkscksclskdmcsdkldcmsdldcsdlkdcspdcslcmspcmcs",
            userId: 2,
            categoryId: 5
        }
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('UPDATE request', () => {
        const apiUrl = "165.22.122.189/api/v1/posts/25";

        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: {
                title: "The Journey Of a Media Personnel",
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    })


    it('DELETE request', () => {
        const apiUrl = "165.22.122.189/api/v1/posts/25";
        cy.request({
            method: 'DELETE',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    })
});




describe('Testing Post categories', () => {

    const apiUrl = "165.22.122.189/api/v1/postcategories";

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


    it('POST Request', () => {
        cy.request({
            method: "POST",
            url: apiUrl,
            body: {
               title:"Funny Talk"
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('UPDATE Request', () => {
        const apiUrl = "165.22.122.189/api/v1/postcategories/19";
        cy.request({
            method: "PUT",
            url: apiUrl,
            body: {
                title:"Main Page Cat"
        }})
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    });


    it('DELETE an enquiry', () => {
        const apiUrl = '165.22.122.189/api/v1/postcategories/19';
      
        // Make a DELETE request to delete the resource
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});




describe('Testing the Project request', () => {
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


    it('POST request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/projectrequests";
        const requestBody = {
            industryName: "MernStarky",
            companyName: "StarTreky",
            firstName: "molly",
            lastName: "polly",
            email: "ducky@demise.com",
            mobile: "08029501995",
            projectBrief: "proceed"
        };
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('UPDATE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/projectrequests/10";
        const requestBody = {
            companyName: "StarLaboratory",
            firstName: "Goku",
            lastName: "Son"
        };
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: requestBody
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });


    it('DELETE request', () => {
        const apiUrl = "http://165.22.122.189/api/v1/projectrequests/10";
        cy.request({
            method: 'DELETE',
            url: apiUrl,
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    });
})




describe('Testing Users', () => {

    const apiUrl = "165.22.122.189/api/v1/users";

    it('GET all users', () => {
        cy.request({
            method: 'GET',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.length.greaterThan(0)
        })
    })


    it('POST a user', () => {
        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                username: "Rengoku",
                email: "andrew@tate.com",
                password: "01234"
            }
        })
       .then((response) => {
           expect(response.status).to.equal(200)
       })
    })


    it('UPDATE a User', () => {
        const apiUrl = "165.22.122.189/api/v1/users/13";
        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: {
                username: "Marshall"
            }
        })
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    })


    it('DELETE a User', () => {
        const apiUrl = "165.22.122.189/api/v1/users/13";
        cy.request({
            method: 'DELETE',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.equal(200)
        })
    })
})




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

    it('POST Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careeropenings';

        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                title:"opening 7",
                jobType:"jtype 7",
                description:"talker 7"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.be.a('string')
            expect(response.body.jobType).to.be.a('string')
            expect(response.body.description).to.be.a('string')
        })
    })

    it('PUT Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careeropenings/7';

        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: {
                title:"opening 5",
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('DELETE Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careeropenings/7';

        cy.request({
            method: 'DELETE',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
});




describe('Testing the Career Openings', () => {
    it('GET Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careerapplications';

        cy.request({
            method: 'GET',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length.greaterThan(0)
            
        })
    })

    it('POST Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careerapplications';

        cy.request({
            method: 'POST',
            url: apiUrl,
            body: {
                firstName:"Test 17",
                lastName:"Batch 17",
                email:"mailemo@mail.com",
                mobile:"999988",
                highestQualification:"NCE",
                briefAboutYou:"I code"
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.firstName).to.be.a('string')
            expect(response.body.lastName).to.be.a('string')
            expect(response.body.email).to.be.a('string')
            expect(response.body.mobile).to.be.a('string')
            expect(response.body.highestQualification).to.be.a('string')
            expect(response.body.briefAboutYou).to.be.a('string')
        })
    })

    it('PUT Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careerapplications/21';

        cy.request({
            method: 'PUT',
            url: apiUrl,
            body: {
                mobile:"09293838920",
            }
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('PUT Call to Submit PDF', () => {
        cy.fixture('/AnchorsoftLetterhead-1.pdf', 'binary').then(pdfData => {
            const fileName = 'AnchorsoftLetterhead-1.pdf';
            const blob = Cypress.Blob.binaryStringToBlob(pdfData);
            const file = new File([blob], fileName);
    
            const formData = new FormData();
            formData.set('image', file);
    
            cy.request({
                method: 'PUT',
                url: 'http://165.22.122.189/api/v1/careerapplications/21/cvupload',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: formData,
            }).then(response => {
                // Assuming a successful response has a status code of 200
                expect(response.status).to.eq(200);
                // Add more assertions as needed based on your API response
            });
        });
    });
    

    it('DELETE Call', () => {
        const apiUrl = 'http://165.22.122.189/api/v1/careerapplications/21';

        cy.request({
            method: 'DELETE',
            url: apiUrl
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
});