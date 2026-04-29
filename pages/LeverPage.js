const { expect } = require('@playwright/test');

class LeverPage {
    constructor(page) {
        this.page = page;
    }

    async verifyPageLoaded() {
        await expect(this.page).toHaveURL(/jobs\.lever\.co\/insiderone/);
        await expect(this.page.locator('body')).toBeVisible();
    }
}

module.exports = { LeverPage };