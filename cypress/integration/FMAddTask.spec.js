describe('Add a farm', function() {

    before(function() {
      cy.SignIn(this.url)
    })

    it('Go to calendar', function() {
      cy.get("div").within(($div) => {
        cy.contains('CALENDAR')
          .click()
        cy.url()
          .should('include', 'tasks')
      })
    })

    it('Add task', function() {
     cy.get('.vfc-day').within(($div) => {
      cy.contains('23')
        .click()
     })
     cy.get('.date-task')
       .should('contain', 'October 23, 2021')
     cy.get('.add > img')
       .click()
     cy.contains('Add New Task')
       .should('be.visible')
     cy.get('#title').type('Feed Cows')

     cy.get('input[id="start_time"]')
       .click({force: true})
     cy.get('input[type="number"]')
       .should('be.visible')
     for (let clicks = 0; clicks < 6; clicks++) {
       cy.get('.arrowTop > .flatpickr-time > :nth-child(1) > .arrowDown')
         .click({force: true})
       cy.get('.arrowTop > .flatpickr-time > :nth-child(3) > .arrowUp')
         .click({force: true})
     }

     cy.wait(1000)
     cy.get('#textarea')
       .click()
       .type('Test 12345')

     cy.xpath("(//input[contains(@id, 'end_time')])")
       .click({force: true})
      

     cy.xpath("(//input[contains(@class, 'flatpickr-hour')])[2]")
       .type('7{enter}')
     
     cy.xpath("//input[contains(@id, 'start_time')]")
       .should('have.value', '06:30')
     cy.get('#end_time')
       .should('have.value', '12:00')

     cy.get('.btn-primary').click()
    })

})