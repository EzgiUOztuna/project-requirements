const { test, expect } = require("@playwright/test");
import HomePage from '../pages/HomePage';
import CareersPage from '../pages/CareersPage';

test.describe('Careers Page Tests', () => {
    test('Verify Quality Assurance team page and job listings', async ({ page }) => {
        const homePage = new HomePage(page);
        const careersPage = new CareersPage(page);

        // Home Page
        await homePage.goto();
        await homePage.verifyPageLoaded();
        await homePage.goToCareers();

        // Careers Page
        await careersPage.verifyCareersPageLoaded();
        await careersPage.openAllTeams();
        /*await careersPage.goToQualityAssurance();
        await careersPage.verifyJobListLoaded();
        await careersPage.verifyAllJobsAreQA();
 
        // APPLY (NEW TAB)
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            careersPage.clickApply()
        ]);
 
        await newPage.waitForLoadState();
 
        // LEVER PAGE
        const leverPage = new LeverPage(newPage);
        await leverPage.verifyPageLoaded();
 
        // final assertion (extra safety)
        await expect(newPage).toHaveURL(/jobs\.lever\.co\/insiderone/);*/
    });
});