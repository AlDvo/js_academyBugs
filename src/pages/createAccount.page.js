import { BasePage } from "./base.page.js";
import * as allure from "allure-js-commons";

export class CreateAccount extends BasePage {    
    constructor(page) {
        super(page);
        this.forgotPassword = page.locator('.ec_account_login_link');
    }

    async clickForgotPassword(){
        await allure.step("Кликнуть на кнопку `Forgot Your Password?`", async ({ page }) => {
            await this.forgotPassword.click();
        });
    }
}