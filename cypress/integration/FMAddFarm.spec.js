describe('Add a farm', function() {

    before(function() {
      cy.SignIn()
    })

    it('Add farm', function() {
      cy.get("div").within(($div) => {
        cy.contains('CALENDAR').click()
        cy.url().should('include', 'tasks')
      })
    })

    it('Change months', function() {
      cy.get("[class='vfc-arrow-right']").click()
      cy.get('.vfc-top-date').should('equal', 'November')
      
    })

})