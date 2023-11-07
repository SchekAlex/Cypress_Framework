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

Cypress.Commands.add('openPage', (page) => {
    switch (page) {
        case 'homepage':
            cy.log(`-> Visiting homepage url: ${Cypress.config("baseUrl")}`);
            cy.visit(Cypress.config("baseUrl"));
            break;
        default:
            break;
    }
})

Cypress.Commands.add('waitForElementToBeDisplayed', (element) => {
    cy.log(`Waiting for "${element}" to be displayed...`);
    cy.get(element, { timeout: 15 })
      .should('be.visible')
      .then(() => {
        cy.log(`"${element}" is displayed.`);
      })
  });