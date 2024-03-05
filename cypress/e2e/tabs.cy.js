describe('tabs en navegadores', function(){
    it('visitando links que abren otros tabs', function(){
        cy.visit('https://demoqa.com/links')
        cy.get('#simpleLink').invoke('removeAttr','target').click()
    })

    it.only('login exitoso',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.contains('Bob1').should('be.visible')
    
    })

    it('usuario incorrecto',() =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('basUser')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()
        cy.contains('Invalid credentials').should('be.visible')
    })

    
})