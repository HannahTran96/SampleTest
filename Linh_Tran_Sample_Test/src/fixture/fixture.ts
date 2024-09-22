import { type } from "os";
import{ test as baseTest, Browser, BrowserContext, Page} from '@playwright/test'
import Form from "../feature/form";

type Myfixtures = {
    form: Form
}

export const test = baseTest.extend<Myfixtures>({
    page: async({browser}, use) =>{
        let context: BrowserContext, page: Page
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto("https://raksul.github.io/recruit-qa-engineer-work-sample/")
        await use(page)
    },
    form: async({page}, use) => {
        await use(new Form(page));
    },
})
