Cypress.Commands.add('SignIn', function() {

  cy.visit('https://farmmap.appetiserdev.tech/')
  cy.title().should('equal', 'FARMap')
  cy.location('protocol').should('equal', 'https:')
  
  cy.get('div').within(($div) => {
    cy.get('.nav-link').contains('SIGN IN').click()
  })
  cy.url().should('include', '/login')

  cy.get('form').within(($form) => {
  //Using Then statement
  cy.fixture('userLoginDetails').then((user) => {
    cy.get('input[type="email"]').type(user.email)
   cy.get('input[type="password"]').type(user.password)
   cy.contains('SIGN IN').click()
  })
  
  }) 
  cy.url().should('include', 'farm')
})