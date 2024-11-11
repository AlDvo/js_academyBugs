import { BasePage } from "./base.page.js";
import * as allure from "allure-js-commons";

export class MainPage extends BasePage {    
    constructor(page) {
        super(page);
        this.bugInfo = page.locator('.academy-bug-overlay');
        this.productList = page.locator('.ec_product_li');
    }

    async choosePerPage(quantity) {
        await allure.step(`Выбрать кол-во отображаемых элементов на странице ${quantity}`, async ({ page }) => {
            await this.page.getByRole('link', { name: quantity }).click();
        });
    }

    async clickByFirstProduct(){
        await allure.step(`Открыть первый продукт на главной странице`, async ({ page }) => {
            for (const row of await this.productList.all()){
                await row.getByRole('link').first().click();
                break;
            }
        });
    }

    async clickByProduct(productName){
        await allure.step(`Выбрать ${productName} продукт главной на странице`, async ({ page }) => {
            await this.productList.getByRole('link', { name: productName }).click();
        });
    }

    async clickCokkie(accept){
        await allure.step(`Нажать на всплывающем окне cookies ${accept}`, async ({ page }) => {
            await this.page.getByText(accept).click();
        });
    }
}