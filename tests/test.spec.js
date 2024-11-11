import { test, expect } from '@playwright/test';
import { App } from "../src/pages/index.js";
import * as allure from "allure-js-commons";

const URL = "https://academybugs.com/find-bugs/";
const mistakeText = 'You found a crash bug, examine the page for';
const pageError = "404 Error";
const product = 'Professional Suit';
const productOptions = 'Green';
const cur = 'JPY';
let app;

test.beforeEach(async ({ page }) => {
    app = new App(page);
    await app.mainPage.open(URL);
    await app.mainPage.clickCokkie('Functional only');
});

test("Change perPage @Crash", async ({ page }) => {
    await app.mainPage.choosePerPage(10);
    await expect(await app.mainPage.bugInfo).toContainText(mistakeText);

});

test("Select currency @Crash", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.selectCurrency(cur);
    await app.productDetails.waitLoadPage();
    await expect(await app.productDetails.bugInfo).toContainText(mistakeText);
});

test("Send post comment @Crash", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.fillFieldComment();
    await app.productDetails.sendComment();
    await expect(await app.productDetails.bugInfo).toContainText(mistakeText);
});

test("Choose Product in hot item @Perfomance", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.clickProductWidget();
    await app.productDetails.waitLoadPage();
    await expect(await app.productDetails.bugSpinner).toBeVisible();
});

test("Check manufacturer link @Functional", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.clickManufacturer();
    await expect(await app.manufacturer.bugInfo).toContainText(pageError);
});

test("Choose product with select options @Crash", async ({ page }) => {

    await app.mainPage.clickByProduct(product);
    await app.productDetails.chooseDetailsOption(productOptions);
    await app.productDetails.addQuantity();
    await app.productDetails.waitLoadPage(); 
    await expect(await app.productDetails.bugInfo).toContainText(mistakeText);
});

test("Filter by Price on product details @Functional", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    let urlProduct = page.url();
    await app.productDetails.clickPricePointWidget(); 
    await expect(page).toHaveURL(urlProduct);
});

test("Check product description @Content", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.waitLoadPage();
    await expect(await app.productDetails.productDescription).toContainText('Nam nec tellus a odio tincidunt auctor a ornare odio.');
});

test("Retrieve password @Crash", async ({ page }) => {

    await app.mainPage.clickByFirstProduct();
    await app.productDetails.clickSignUpButton();
    await app.createAccount.clickForgotPassword();
    await app.retrievePassword.clickRetrieveButton();
    await expect(await app.retrievePassword.bugInfo).toContainText(mistakeText);
});