import Header from "../sectionObjects/headerSection";
import BasePage from "./pages";

class HomePage {

    //objects
    headerSection = new Header()

    //Locators
    featuresItems = 'div.features_items > h2'

    featuresItemsText(){
        cy.waitForElementToBeDisplayed(this.featuresItems);
    }
}

export default HomePage;