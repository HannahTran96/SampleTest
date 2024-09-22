import { Page } from "@playwright/test";
import Base from '../common/base'

export default class Form extends Base {
    constructor(page: Page) {
        super(page)
    }

    public formElement = {
        inputName: (param) => `//input[@id='form_item_${param}']`,
        serviceOfInterest: (param) => `span[text()='${param}']`,
        association: (param) => `span[text()='${param}']`,
        buttonType: "//button[@type='submit']",
        wduhaboutus: "//span[@class='ant-select-selection-item']",

    }
    async enterInformation(email: string, lastName: string, firtName: string, serviceOfInterest: string, association: string) {
        await this.enterText(this.formElement.inputName("email"), email)
        await this.enterText(this.formElement.inputName("lastName"), lastName)
        await this.enterText(this.formElement.inputName("firstName"), firtName)
        await this.clickOnElem(this.formElement.serviceOfInterest(serviceOfInterest))
        await this.clickOnElem(this.formElement.association(association))
    }
    async clickOnSubmitButton() {
        await this.clickOnElem(this.formElement.buttonType);
    }
    async selectItem(item: string) {
        await this.clickOnElem(this.formElement.wduhaboutus)
        await this.clickOnElem(this.CommonEle.divText(item))
    }
    async verifyMessage(message: string) {
        await this.isElementVisible(this.CommonEle.divText(message), true);
    }
}