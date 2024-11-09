import { BasePage } from "./base.page.js";

export class CreateAccount extends BasePage {    
    constructor(page) {
        super(page);
        this.forgotPassword = page.locator('.ec_account_login_link');
    }

    async clickForgotPassword(){
        await this.forgotPassword.click();
    }
}