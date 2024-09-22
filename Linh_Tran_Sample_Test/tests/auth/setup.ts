import {test as setup} from '@playwright/test'

setup("Open submit web", async({page}) => {
    await page.goto("https://raksul.github.io/recruit-qa-engineer-work-sample/")
    await page.waitForTimeout(5000)
})