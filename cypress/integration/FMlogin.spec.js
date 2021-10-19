
 describe('Login', function() {
    it ('Sign in', function() {
      cy.visit('https://farmmap.appetiserdev.tech/')
      cy.title().should('equal', 'FARMap')
      cy.location('protocol').should('equal', 'https:')
      
      cy.get('div').within(($div) => {
        cy.get('.nav-link').contains('SIGN IN').click()
      })
      cy.url().should('include', '/login')

      cy.get('form').within(($form) => {
      cy.get('input[type="email"]').type('farmap.test@gmail.com')
      cy.get('input[type="password"]').type('p@ssw0rd')
      cy.contains('SIGN IN').click()
      }) 
      cy.url().should('include', 'farm')
    })
})


