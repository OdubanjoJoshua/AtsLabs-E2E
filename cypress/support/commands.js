import 'cypress-file-upload';
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />


// Cypress.Commands.add("form_request", (url, formData) => {
//     return cy
//       .intercept("POST", url)
//       .as("formRequest")
//       .window()
//       .then(win => {
//         var xhr = new win.XMLHttpRequest();
//         xhr.open('POST', url);
//         xhr.send(formData);
//       })
//       .wait("@formRequest");
// });



Cypress.Commands.add("uploadFile", (method, url, formData) => {
	return cy.request({
	   method: method,
	   url: url,
	   headers: {
		 'Content-Type': 'application/json; charset=utf-8'  
	   },
	   body: formData
	 }).as('uploadFileRequest')
	 
})




// Cypress.Commands.add("uploadFile", (method, url, formData) => {
//   return cy
//     .intercept(method, url)
//     .as("uploadFileRequest")
//     .window()
//     .then(window => {
//       var xhr = new window.XMLHttpRequest();
//       xhr.open(method, url);
//       xhr.send(formData);
//     })
//     .wait("@uploadFileRequest");
// });