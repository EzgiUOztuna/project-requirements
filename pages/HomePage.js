const { expect } = require("@playwright/test");

class HomePage {
    constructor(page) {
        this.page = page;

        this.logo = page.locator('.header-logo a');
        this.navBar = page.locator('.header-top-menu nav');
        this.careerLink = page.locator('.footer-links-col-item-body a[href="/careers/"]', { hasText: "We're hiring" });
    }

    async goto() {
        await this.page.goto('https://insiderone.com/');
    }

    async verifyPageLoaded() {
        await expect(this.page).toHaveURL('https://insiderone.com/');
        await expect(this.logo).toBeVisible();
        await expect(this.navBar).toBeVisible();
    }

    async goToCareers() {
        await this.careerLink.click();
    }

}

module.exports = HomePage;