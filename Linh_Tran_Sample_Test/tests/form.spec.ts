import path from 'path'
import {test} from '../src/fixture/fixture'
// import * as user from '../testdata/user.json'
import * as fs from 'fs'
interface Information {
    email: string
    firstName: string
    lastName: string
    service: string
    hear: string
    associate: string
    message: string
}
interface TestData{
    positive: Information[]
    negative: Information[]
}

const filePath = path.join(__dirname, './data', 'form.json')
const testData: TestData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

test.describe("Submit form", async() =>{
    testData.positive.forEach((data, index) => {
        test("User submit form successfully", async({form, page}) => {
            await test.step("User fill information for first name, last name, email, Services of Interest, Type of Association", async() => {
                await form.enterInformation(data.email, data.firstName, data.lastName, data.service, data.associate)
            })
            await test.step("User select item: where you hear about us", async() =>{
                await form.selectItem(data.hear)
            })
            await test.step("User select item: where you hear about us", async() =>{
                await form.clickOnSubmitButton()
            })
            await test.step("form should be submitted successfull", async() =>{
                await form.verifyMessage(data.message)
            })
        })
    })
    testData.positive.forEach((data, index) => {
        test("User submit form successfully", async({form, page}) => {
            await test.step("User fill information for first name, last name, email, Services of Interest, Type of Association", async() => {
                await form.enterInformation(data.email, data.firstName, data.lastName, data.service, data.associate)
            })
            await test.step("User select item: where you hear about us", async() =>{
                await form.selectItem(data.hear)
            })
            await test.step("Verify error message should be displayed", async() =>{
                await form.verifyMessage(data.message)
            })
        })
    })
    
})