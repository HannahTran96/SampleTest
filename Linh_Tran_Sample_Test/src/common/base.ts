import { Page, expect } from "@playwright/test";
export default class Base {
    constructor (public page: Page) {}

    public CommonEle = {
        divText: (param) => `//span[text()='${param}']`
    }

    // Verify element visible or not
    public async isElementVisible(elem: string, flag: boolean) {
        const pageElement = await this.page.locator(elem);
        if(flag) {
            await expect(pageElement).toBeVisible();
        } else {
            await expect(pageElement).not.toBeVisible();
        }
    }

    // Enter text
    public async enterText(elem: string, value: string) {
        // await this.isElementVisible(elem, true);
        await this.page.locator(elem).fill(value);
    }

    public async clickOnElem(elem: string) {
        await this.isElementVisible(elem, true);
        await this.page.locator(elem).click();
    }
}