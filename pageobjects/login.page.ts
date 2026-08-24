
import { environment } from '../config/environment.config';
class LoginPage{

    get usernameInput()
    {
        return $('#user-name');
    }
    
    get passwordInput()
    {
    return $('#password');
    }

    get loginButton()
    {
    return $('#login-button');
    }

    get menuButton()
    {
        return $('#react-burger-menu-btn');
    }

    get logoutButton()
    {
        return $('#logout_sidebar_link');
    }

    get errorMessage()
    {
        return $('[data-test="error"]');
    }

    async open(){
    await browser.url(environment.baseUrl);
    }

    async login(username: string, password: string){
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
    }

    async logout()
    {
        await this.menuButton.click();
        await this.logoutButton.click();

    }
}
export default new LoginPage();