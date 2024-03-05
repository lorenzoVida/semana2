beforeEach(()=>{
    cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
})

describe('automatizacion basica',()=>{

    it('validando mensajes de bienvenida',()=>{
        cy.contains('Bienvenidos').should('exist')
    })

    it('validando tab de codigo fuente',()=>{
       // cy.get('#ca-viewsource').click()
       cy.get("img[alt='La enciclopedia libre']").click()
    })


    it('validando tab de historial',()=>{
        cy.get('#ca-history').click()
    })

   

})