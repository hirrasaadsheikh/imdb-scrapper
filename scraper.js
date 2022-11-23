const puppeteer = require("puppeteer");

async function imdb (){
    try {
        const browser = await puppeteer.launch({headless: false, slowMo:10});
        const page = await browser.newPage();
        await page.goto("https://www.imdb.com/", { waitUntil: 'load', timeout: 0 });
        console.log('Welcome to IMDb Page');
        await delay(5000);

        await page.waitForSelector("#suggestion-search");
        await page.type("#suggestion-search","The Office", {delay: 20});
        console.log('Clicked');
        await page.click("#suggestion-search-button");
    }
    catch (e) {
        console.log("Unable to extract data", e);
    }

} imdb();