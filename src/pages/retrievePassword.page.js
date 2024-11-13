import { BasePage } from "./base.page.js";
import { faker } from "@faker-js/faker";
import * as allure from "allure-js-commons";

export class RetrievePassword extends BasePage {
    constructor(page) {
        super(page);
        this.emailField = page.locator('.ec_account_forgot_password_input_field');
        this.retrieveButton = page.getByRole('button', { name: 'RETRIEVE PASSWORD' });
        this.bugInfo = page.locator('.academy-bug-info-overlay');
    }

    async clickRetrieveButton() {
        await allure.step(`Нажать на кнопку Retrieve Button`, async ({ page }) => {
            await this.emailField.click();
            await this.emailField.fill(faker.internet.email());
            await this.retrieveButton.click();
        });
    }
}