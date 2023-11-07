import BasePage from "../support/pageObjects/pages";

const basePage = new BasePage();

describe('Register User Tests', () => {

    it("Test Case 1: Register User", () => {
        
        cy.openPage("homepage");
        basePage.homePage.featuresItemsText();
        basePage.homePage.headerSection.clickSignUpLoginButton();
    })
})