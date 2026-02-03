describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    })
    it('Test subscribe form', () => {
        cy.contains(/testing forms/i)
        cy.get('@subscribe-input').type('babar@gmail.com')
        cy.contains(/Successfully subbed: babar@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: babar@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: babar@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('babar@gmail.io')
        cy.contains(/Invalid email: babar@gmail.io!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: babar@gmail.io!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: babar@gmail.io!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')
        cy.wait(3000)
        cy.contains(/fail!/i).should('not.exist')
    })
})