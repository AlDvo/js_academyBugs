import { BasePage } from "./base.page.js";

export class MainPage extends BasePage {    
    constructor(page) {
        super(page);
        this.bugInfo = page.locator('.academy-bug-overlay');
        //this.productList = page.locator('.ec_product_li');
    }

    async choosePerPage(quantity) {
        await this.page.getByRole('link', { name: quantity }).click();
    }

    // async clickByFirstProduct(){
    //     for (const row of await this.productList.all()){
    //         await row.click();
    //         break;
    //     }
    // }
}