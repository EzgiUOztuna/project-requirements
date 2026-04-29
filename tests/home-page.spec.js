import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage';

test.describe('Insider Careers Flow', async () => {
  test('Home page loads and Careers flow works correctly', async ({ page }) => {
    const homePage = new HomePage(page);

    //1. Navigate to the homepage
    await homePage.goto();

    //2. Verify the homepage is loaded
    await homePage.verifyPageLoaded();

    //3. Click on the "We're hiring" link in the footer
    await homePage.goToCareers();

    //4. Verify that the careers page is loaded
    await expect(page).toHaveURL('https://insiderone.com/careers/');
  });

});