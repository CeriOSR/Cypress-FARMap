describe('Add a farm', function() {

    before(function() {
      cy.SignIn()
    })

    it('Go to calendar', function() {
      cy.get("div").within(($div) => {
        cy.contains('CALENDAR').click()
        cy.url().should('include', 'tasks')
      })
    })

    it('Add task', function() {
     cy.get('.vfc-day').within(($div) => {
      cy.contains('23').click()
     })
     cy.get('.date-task').should('contain', 'October 23, 2021')
     cy.get('.add > img').click()
     cy.contains('Add New Task').should('be.visible')
     cy.get('#title').type('Feed Cows')

     cy.get('input[id="start_time"]').click({force: true})
     cy.get('input[type="number"]').should('be.visible')
     for (let clicks = 0; clicks < 6; clicks++) {
       cy.get('.arrowTop > .flatpickr-time > :nth-child(1) > .arrowDown').click()
       cy.get('.arrowTop > .flatpickr-time > :nth-child(3) > .arrowUp').click()
     }
      
     
     cy.xpath("(//input[contains(@class, 'flatpickr-hour')])[2]")
       .click()
       .clear()
       .type('12')



     // cy.get('input[id="end_time"]').click({force: true})
     // cy.get('input[type="number"]').should('be.visible')
     // cy.get('.numInput flatpickr-hour').type('7')
     // cy.get('.numInput flatpickr-minute').type('30')
     
     // cy.get('#end_time').type('12')

     // for (let clicks = 0; clicks < 5; clicks++) {
     //   cy.get('.open > .flatpickr-time > :nth-child(1) > .arrowDown').click()
     //   cy.get('.open > .flatpickr-time > :nth-child(3) > .arrowUp').click()
     // }
     cy.get('#textarea').click()
     cy.get('#start_time').should('contain', '06:30')
     cy.get('#end_time').should('contain', '12:00')

     
    })

})