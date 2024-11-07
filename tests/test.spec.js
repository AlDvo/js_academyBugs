import { test, expect } from '@playwright/test';
import { App } from "../src/pages/index.js";
import * as allure from "allure-js-commons";

const URL = "https://academybugs.com/find-bugs/";
let app;

test.beforeEach(async ({ page }) => {
});

test("First", async ({ page }) => {

    app = new App(page);
    await app.mainPage.open(URL);
    await app.mainPage.choosePerPage(10);
    expect(await app.mainPage.bugInfo).toContainText('You found a crash bug, examine the page for');

});


test("Second", async ({ page }) => {


});