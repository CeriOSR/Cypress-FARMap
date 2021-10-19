describe('Go to paddock details', function() {

    before(function() {
      cy.SignIn()
    })

    it('Go to paddock details', function() {
      cy.get("div").within(($div) => {
        cy.contains('PADDOCK')
          .click()
        cy.url()
          .should('include', 'reports/paddock')
      })
    })

    it('Should display paddock details', function() {
     cy.contains('Tolerno').click()
     cy.contains('Paddock Prod Test').click()
     cy.url()
       .should('include', 'farm/33') 
    })
})

describe('Record a treatment', function() {
 before(function() {
   cy.fixture('paddockTreatmentData').as('treatment')
 })

 it('Should add a recorded treatment', function() {
     cy.contains('RECORD TREATMENT').click()
     cy.xpath("//button[@type='submit' and @class='btn btn-primary btn-lg rounded-pill text-light has-shadow text-uppercase font-weight-bold']")
       .should('be.visible')
     cy.xpath("//input[@placeholder='DD/MM/YYYY']").click({force: true})

     cy.xpath("//span[@aria-label='October 23, 2021']")
       .click()
     cy.xpath("//input[@placeholder='DD/MM/YYYY']").should('have.value', this.treatment.date)
     cy.xpath("//input[@id='chemical-used']").type('Test Chemicals')
     cy.xpath("//input[@id='crop']").type('nil')
     cy.xpath("//input[@id='spray-area-ha']").type('2')
     cy.xpath("//input[@id='rate-ha']").type('50')
     cy.xpath("//input[@id='cost-litre']").type('25')

     cy.xpath("//input[@id='litres']").should('have.value', '100')
     cy.xpath("//input[@id='cost-ha']").should('have.value', '2,500')

     cy.xpath("//input[@id='batch-number']").type('12345')
     cy.xpath("//input[@id='labour-hours']").type('10')
     cy.xpath("//input[@id='wind-speed']").type('5')
     cy.xpath("//select[@id='wind-direction']").select('North')
     cy.xpath("//input[@id='applicator-name']").type('Rey Cerio')
     cy.xpath("//input[@id='applicator-contract']").type('1234567890')
     cy.xpath("//input[@id='supervisor-name']").type('Rey Cerio')
     cy.xpath("//input[@id='supervisor-contract']").type('1234567890')

     cy.xpath("//button[@type='submit' and @class='btn btn-primary btn-lg rounded-pill text-light has-shadow text-uppercase font-weight-bold']")
       .click()

       // TODO: - Figure out a assertion for the submit
     cy.xpath("//td[contains(.,'12345')])[1]").should('be.visible')
    })
})