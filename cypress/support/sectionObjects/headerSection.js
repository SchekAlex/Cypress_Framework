
class Header{
   
   //Locators
   signUpLoginSelector = 'div.col-sm-8 > div > ul > li:nth-child(4) > a';
   
   clickSignUpLoginButton(){
        cy.waitForElementToBeDisplayed(this.signUpLoginSelector);
        return cy.get(this.signUpLoginSelector).click();
   }
}

export default Header;