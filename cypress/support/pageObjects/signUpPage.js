import Header from "../sectionObjects/headerSection";

class SignUpPage {

    //Section Objects
    headerSection = new Header();

    //Locators
    enterAccountInformationLocator = 'div > h2 > b';
    titleGender1Locator = '#id_gender1';
    titleGender2Locator = '#id_gender2';
    passwordLocator = '#password';
    firstNameAddressLocator = '#first_name';
    lastNameAddressLocator = '#last_name';
    streetAddressLocator = '#address1';
    countryListLocator = '#country';
    stateAddressLocator = '#state';
    cityAddressLocator = '#city';
    zipCodeAddressLocator = '#zipcode';
    mobileNumberAddressLocator = '#mobile_number';
    createAccountLocator = '#form div > form > button';

    waitForPageToLoad(){
        cy.waitForElementToBeDisplayed(this.enterAccountInformationLocator);
    }

    enterAccountInformation(password, firstName, lastName) {
        cy.get(this.titleGender1Locator).click();
        cy.get(this.passwordLocator).type(password);
        cy.get(this.firstNameAddressLocator).type(firstName);
        cy.get(this.lastNameAddressLocator).type(lastName);
        cy.get(this.countryListLocator).then( countryList =>{
            cy.wrap(countryList).click();
            cy.get(`#country > option:nth-chiild(${Math.random()*6})`).click();
        });
        cy.get(this.stateAddressLocator).type(cy.generateRandomString(5));
        cy.get(this.cityAddressLocator).type(cy.generateRandomString(5));
        
    }

}
export default SignUpPage;