import "cypress-iframe";
import * as regPage from '../support/page_objects/Independent/independentRegisterPage.js'

describe('INDEPENDENT Register Test', () => {

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

        regPage.loginBttn()

    })

    it('User clicks Register button and sees the registration page', () => {

        regPage.regBttn()

    })

    it('User enters a valid email', () => {

        regPage.email()

    })

    it('User enters a valid first name', () => {

        regPage.firstName()

    })

    it('User enters a valid last name', () => {

        regPage.lastName()

    })

    it('User select year of birth', () => {

        regPage.yearOfBirth()

    })

    it('User select a valid password', () => {

        regPage.password()

    })

    it('After filling all values User clicks Create My Account button and see confirmation about register', () => {

        regPage.submit()

    })



})