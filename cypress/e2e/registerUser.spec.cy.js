import BasePage from "../support/pageObjects/pages";

const basePage = new BasePage();

let name = `${cy.generateRandomString(6)}`;
let emailAddress = `${name}@gmail.com`;
let password = `${cy.generateRandomString(10)}`;

describe('Register User Tests', () => {

    it("Test Case 1: Register User", () => {
        
        cy.log("-> Launch browser");
        cy.log("-> Navigate to url 'http://automationexercise.com'")
        cy.openPage("homepage");
        cy.log("-> Verify that home page is visible successfully");
        basePage.homePage.featuresItemsText();
        cy.log("-> Click on 'Signup / Login' button");
        basePage.homePage.headerSection.clickSignUpLoginButton();
        cy.log("-> Verify 'New User Signup!' is visible");
        basePage.signUpPage.newUserSignUpText();
        cy.log("-> Enter name and email address");
        basePage.signUpPage.fillInNewUserSignUpForm(name, emailAddress);
        cy.log("-> Click 'Signup' button");
        
        

    })
})