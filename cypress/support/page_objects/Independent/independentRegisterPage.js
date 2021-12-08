export class independentRegisterPage { }

export function loginBttn() {

    cy.wait(5000)

    cy.get('.sc-jlJPPZ [data-js-open-login-sidebar]').dblclick()

}

export function regBttn() {

    cy.get('#registerLink').click()

    cy.get('#sp_message_iframe_575443').its('0.contentDocument.body').then(cy.wrap).find('[title="AGREE"]').click()

    cy.wait(2000)

    cy.get('div.main-content')
        .find('h1.tag-line')
        .should('have.text', 'Create your Free Account')
}

export function email() {

    cy.get('#reg-form-email')
        .should('be.visible')
        .type('herov25570@simdpi.com')

}

export function firstName() {

    const firstNameText = 'Hobi'
    cy.get('#reg-form-firstname')
        .should('be.visible')
        .type(firstNameText)
        .invoke('val')
        .should('match', /^[a-zA-Z]+$/)
        .should(txt => {

            expect(txt).to.have.length.of.at.most(70)
        })

}

export function lastName() {

    const lastNameText = 'Ki'
    cy.get('#reg-form-lastname')
        .should('be.visible')
        .type(lastNameText)
        .invoke('val')
        .should('match', /^[a-zA-Z]+$/)
        .should(txt => {

            expect(txt).to.have.length.of.at.most(70)
        })

}

export function yearOfBirth() {

    cy.get('[name="birthYear"]').select('1961')
        .should('be.visible')

}

export function password() {

    cy.get('div[class="sc-jSppzZ dljDIx"]')
        .find('a[style]')
        .first()
        .click({ force: true })

    cy.wait(2000)

    const passwordText = 'HobiKi1'
    cy.get('#reg-form-password')
        .should('be.visible')
        .type(passwordText)
        .invoke('val')
        .should(txt => {

            expect(passwordText).to.have.length.of.at.least(6)

            cy.wait(1000)
        })

}

export function submit() {

    cy.get('button[type="submit"]')
        .contains('Create my account')
        .should('be.visible')
        .dblclick()

    cy.get('#sp_message_iframe_575443').its('0.contentDocument.body').then(cy.wrap).find('[title="AGREE"]').click()

    cy.wait(2000)

    cy.get('.sc-iBINNC Oahbk')
        .find('.sc-eJCefv gpHHEn')
        .should('include', 'for completing your registration')

}




