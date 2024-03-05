describe('template spec',() => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('#alertbtn').click()
        //Window alert
        cy.on('window:alert',(str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

    cy.get('#confirmbtn').click()

    //Window Confirm
    cy.on('window:confirm',(str)=>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
  })
})