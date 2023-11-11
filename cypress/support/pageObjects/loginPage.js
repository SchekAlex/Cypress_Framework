import Header from "../sectionObjects/headerSection";

class LoginPage {

    //objects
    headerSection = new Header()

    //Locators
    newUserSignUpTextLocator = 'div:nth-child(3) > div > h2'
    newUserSignUpNameLocator = 'div:nth-child(3) > div > form > input[type=text]:nth-child(2)'
    newUserSignUpEmailAddressLocator = 'div:nth-child(3) > div > form > input[type=email]:nth-child(3)'

    newUserSignUpText(){
        cy.waitForElementToBeDisplayed(this.newUserSignUpTextLocator);
    }

    fillInNewUserSignUpForm(name, emailAddress) {
        cy.waitForElementToBeDisplayed(this.newUserSignUpNameLocator);
        cy.waitForElementToBeDisplayed(this.newUserSignUpEmailAddressLocator);
        cy.type(name);
        cy.type(emailAddress);
    }

}
export default LoginPage;