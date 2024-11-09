import { BasePage } from "./base.page.js";
import { faker } from "@faker-js/faker";

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
        await this.currency.click();
        await this.currency.selectOption(cur);
    }

    async fillFieldComment(){
        await this.commentField.click();
        await this.commentField.fill(faker.lorem.words(10));
        await this.nameField.click();
        await this.nameField.fill(faker.person.firstName());
        await this.emailField.click();
        await this.emailField.fill(faker.internet.email());
    }

    async sendComment(){
        await this.submitButton.click();
    }

    async clickProductWidget(){
        await this.productWidget.click();
    }

    async clickManufacturer(){
        await this.manufacturer.getByRole('link').click();
    }

    async chooseDetailsOption(options){
        await this.detailsOptions.getByTitle(options).click();
    }

    async addQuantity(){
        await this.plusButton.click();
    }

    async clickPricePointWidget(){
        await this.pricePointWidget.first().click();
    }

    async clickSignUpButton(){      
        await this.page.locator('.ec_cart_input_row').getByRole('link').click();
    }
}