export class independentLoginPage { }

export function loginBttn() {

    cy.wait(5000)

    cy.get('.sc-jlJPPZ [data-js-open-login-sidebar]').dblclick()

}

export function email() {

    cy.get('#login-form-email')
        .should('be.visible')
        .type('sacov86299@servergem.com')

}

export function password() {

    cy.get('#login-form-password')
        .should('be.visible')
        .type('HobiKi1')

}

export function submit() {

    cy.get('button[name="submitBtn"]')
        .should('be.visible')
        .click({ force: true })

    cy.wait(2000)

    //after clicking submit the expected page does not open, that's why I could not see this assertion
    cy.get('div.sc-gHzWME sutVQ tab overview active')
        .find('h2.sc-iBoOyE kLJiZZ')
        .should('include', 'Welcome back')

}
