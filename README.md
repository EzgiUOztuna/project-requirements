# Insider QA Automation Bootcamp

## Overview
The purpose of this bootcamp is to build an end-to-end automated testing solution covering UI automation, CI/CD integration, reporting, and AI-supported test automation.

## Scope

### 1. Test Automation
Automate the given career page flow end-to-end.

#### Scenario:
- Visit `https://insiderone.com/` and check that the Insider home page is opened and all main blocks are loaded.
- On `https://insiderone.com/careers/#open-roles`, click **See all teams**, go to **Quality Assurance** open positions, and check the presence of the jobs list.
- Check that all jobs have **Position** containing `Quality Assurance`, **Department** containing `Quality Assurance`, and **Location** containing `Istanbul, Turkey`.
- Click the **Apply** button and check that this action redirects to the **Lever Application** form page.

### 2. CI/CD
Integrate the automation project into a CI/CD pipeline.
- Run on pull requests and pull request updates
- Publish execution outputs
- Use results in pull request validation

### 3. Reporting
Provide a reporting mechanism for test execution results.
- Include pass/fail status, duration, and failure details
- Attach screenshots or other evidence when applicable

### 4. AI-Supported Flow
Use AI as part of the test automation workflow.

Example flow:
- Explore the page and understand the user journey
- Execute the scenario with browser automation tools such as Playwright
- Collect evidence such as snapshots, traces, or execution outputs
- Generate a test plan
- Produce or improve the final automation code

## Deliverables
- Automation project source code
- Implemented test scenario
- CI/CD configuration
- Reporting output
- Short explanation of how AI was used
