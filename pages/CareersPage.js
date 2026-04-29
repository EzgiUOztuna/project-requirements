const { expect } = require("@playwright/test");

class CareersPage {
    constructor(page) {
        this.page = page;

        this.seeAllTeamsButton = page.locator('.insiderone-icon-cards-button-group a.inso-btn.see-more');
        this.qualityAssuranceCard = page.locator('[data-department="Quality Assurance"]');
        this.jobList = page.locator('.postings-wrapper');
        this.positionTitles = this.jobList.locator('[data-qa="posting-name"]');
        this.locations = this.jobList.locator('.sort-by-location.location');
        this.applyButtons = this.jobList.locator('.postings-wrapper .posting-btn-submit');
    }

    async verifyCareersPageLoaded() {
        await expect(this.page).toHaveURL(/careers/);
        await expect(this.seeAllTeamsButton).toBeVisible();
    }

    async openAllTeams() {
        const btn = this.page.locator('a.inso-btn.see-more');
        await btn.click();
        await expect(btn).toHaveAttribute('aria-expanded', 'true');
    }
    /*
        async goToQualityAssurance() {
            await this.qualityAssuranceCard.waitFor({ state: 'visible' });
            await this.qualityAssuranceCard.scrollIntoViewIfNeeded();
            await this.qualityAssuranceCard.click();
        }
    
        async verifyJobListLoaded() {
            await expect(this.jobList.first()).toBeVisible();
        }
    
        async verifyAllJobsAreQA() {
            const positions = await this.positionTitles.allTextContents();
            const locations = await this.locations.allTextContents();
    
            for (let i = 0; i < positions.length; i++) {
                expect(positions[i]).toContain('Quality Assurance') || positions[i].toContain('QA').toBeTruthy();
                //There is no any department section for the positions, that's why, it hasn't been shown the department of the positions. 
                expect(locations[i]).toContain('Istanbul');
            }
        }
    
        async clickApplyFirstJob() {
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'),
                this.applyButtons.first().click()
            ]);
    
            return newPage;
        }*/
}
module.exports = CareersPage;
