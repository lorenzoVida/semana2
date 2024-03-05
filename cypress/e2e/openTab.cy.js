describe('mi primera Suite Test', function(){
    it ('mi primer Test', function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   
    // open Tab
    //cy.get('#opentab').click()
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','qa')
    //cy.get('body > app-root:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click()
    cy.go('back')
        })
    
    })
