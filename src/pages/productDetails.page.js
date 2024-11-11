import { BasePage } from "./base.page.js";
import { faker } from "@faker-js/faker";
import * as allure from "allure-js-commons";

export class ProductDetails extends BasePage {
    productInfo = this.page.locator('.ec_add_to_cart_form');

    constructor(page) {
        super(page);
        this.currency = page.locator('.ec_currency_select');

        this.commentField = page.getByPlaceholder('Comment');
        this.nameField = page.getByPlaceholder('Name*');
        this.emailField = page.getByPlaceholder('Email*');
        this.submitButton = page.locator('.submit');

        this.manufacturer = page.locator('.ec_details_manufacturer');

        this.productWidget = page.locator('.ec_product_widget_images');
        this.pricePointWidget = page.locator('.ec_pricepoint_widget');

        this.productDescription = this.productInfo.locator('.ec_details_description');
        this.detailsOptions = page.locator('.ec_details_swatch');
        this.plusButton = page.locator('.ec_plus');

        this.bugInfo = page.locator('.academy-bug-info-overlay');
        this.bugSpinner = page.locator('.ec_cart_billing_info_update_loader');
    }

    async selectCurrency(cur) {
        await allure.step(`Выбрать валюту ${cur}`, async ({ page }) => {
            await this.currency.click();
            await this.currency.selectOption(cur);
        });
    }

    async fillFieldComment() {
        await allure.step(`Заполнить поля в блоке "Leave a Reply"`, async ({ page }) => {
            await this.commentField.click();
            await this.commentField.fill(faker.lorem.words(10));
            await this.nameField.click();
            await this.nameField.fill(faker.person.firstName());
            await this.emailField.click();
            await this.emailField.fill(faker.internet.email());
        });
    }

    async sendComment() {
        await allure.step(`Нажать кнопку submit в блоке "Leave a Reply"`, async ({ page }) => {
            await this.submitButton.click();
        });
    }

    async clickProductWidget() {
        await allure.step(`Нажать на продукт в блоке widget`, async ({ page }) => {
            await this.productWidget.click();
        });
    }

    async clickManufacturer() {
        await allure.step(`Нажать на Manufacturer в блоке описания продукта`, async ({ page }) => {
            await this.manufacturer.getByRole('link').click();
        });
    }

    async chooseDetailsOption(options) {
        await allure.step(`Выбрать цвет/размер продукта ${options} `, async ({ page }) => {
            await this.detailsOptions.getByTitle(options).click();
        });
    }

    async addQuantity() {
        await allure.step(`Добавить кол-во единиц продукта`, async ({ page }) => {
            await this.plusButton.click();
        });
    }

    async clickPricePointWidget() {
        await allure.step(`Нажать на фильтр по цене в блоке widget`, async ({ page }) => {
            await this.pricePointWidget.first().click();
        });
    }

    async clickSignUpButton() {
        await allure.step(`Нажать на кнопку Sign UP`, async ({ page }) => {
            await this.page.locator('.ec_cart_input_row').getByRole('link').click();
        });
    }

    async waitLoadPage() {
        await this.page.waitForLoadState('networkidle');
    }
}