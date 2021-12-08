import "cypress-iframe";
import * as loginPage from '../support/page_objects/Independent/independentLoginPage.js'

describe('INDEPENDENT Login Test', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    });

    it('User navigates to the Independent web page and handle popup', () => {

        cy.visit('/')
        cy.get('#sp_message_iframe_575443').its('0.contentDocument.body').then(cy.wrap).find('[title="AGREE"]').click()

    })

    it('User clicks Login button', () => {

        loginPage.loginBttn()

    })

    it('User enters valid and registered email', () => {

        loginPage.email()

    })

    it('User enters valid and registered password', () => {

        loginPage.password()

    })

    it('After filling all values User clicks Submit button and see confirmation about login', () => {

        loginPage.submit()

    })

})