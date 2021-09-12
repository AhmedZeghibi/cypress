/*
Author: Ahmed Zeghibi
Email: ahmed.zeghibi@esprit.tn
*/

describe('Tests the website', () => {
    /*
        This is to delete the project created, after nunning all of the tests,
        to be able to run the same code again, without having to manually do it.
    */    
    after(() => {
        cy.contains('This is a test').click()
        cy.get('[class="button button--light-blue button-icon button--icon-only"]').click()
        cy.contains('Delete').click()
        cy.contains("I'm sure").click()
    })


    context('Tests the ability to Login', () => {
        it('Visits D3A.io and logs in', () => {
            cy.visit('https://www.d3a.io/')
            cy.contains('log in').click()
            cy.get('#email').type('ahmed.zeghibi@esprit.tn')
            cy.get('#password').type('@GGtZC3qF635ED2')
            cy.get('.button__label').click()
        })
    })

    context('Tests the ability to create a project', () => {
        it('Simulates a project creation', () => {
            cy.get('.icon-projects').click()
            cy.contains('new project').click()
            cy.get('#input-field-name').type('This is a test')
            cy.get('#textarea-field-nameTextArea').type('This is a description')
            cy.contains('Add').click()
            cy.get('.GraphQLErrorDisplay__error-msg').should('not.exist')
            cy.contains('This is a test').should('be.visible')
        })
    })
    
    context('Tests the ability to create a simulation', () => {
        it('Simulates the creation of a simulation', () => {
            /*
                After the successful creation of the project, I am forced into an unexplained logout.
                To get around the problem, I proceed to a new login before creating a simulation.
            */
            cy.visit('https://www.d3a.io/')
            cy.contains('log in').click()
            cy.get('#email').type('ahmed.zeghibi@esprit.tn')
            cy.get('#password').type('@GGtZC3qF635ED2')
            cy.get('.button__label').click()
            cy.visit('https://www.d3a.io/projects')
            cy.contains('This is a test').click()
            cy.contains('new simulation').click()
            cy.get('.settings-form__submit').click()
            cy.visit('https://www.d3a.io/projects')
            cy.contains('This is a test').click()
            cy.contains('default simulation').should('be.visible')
        })
    })
})