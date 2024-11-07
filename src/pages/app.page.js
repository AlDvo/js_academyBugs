import { MainPage} from "./index";

export class App{
    constructor(page){
        this.page = page;
        this.mainPage = new MainPage(page);
    }
}