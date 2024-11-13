import { CreateAccount, MainPage, Manufacturer, ProductDetails, RetrievePassword} from "./index";

export class App{
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.productDetails = new ProductDetails(page);
        this.manufacturer = new Manufacturer(page);
        this.createAccount = new CreateAccount(page);
        this.retrievePassword = new RetrievePassword(page);
    }
}