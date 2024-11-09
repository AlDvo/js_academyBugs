import { BasePage } from "./base.page.js";

export class Manufacturer extends BasePage {    
    constructor(page) {
        super(page);
        this.bugInfo = page.locator('.sq-main-title');
    }
}