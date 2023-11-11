import HomePage from "./homePage";
import LoginPage from "./loginPage";
import SignUpPage from "./signUpPage";

class BasePage {


    //Page Objects
    homePage = new HomePage();
    loginPage = new LoginPage();
    signUpPage = new SignUpPage();
    
}
export default BasePage;