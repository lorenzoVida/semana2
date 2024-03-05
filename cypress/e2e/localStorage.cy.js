
describe('pasando datos por local storage',function(){
    it('local storagee',function(){
        cy.visit('https://todo-cypress-iota.vercel.app/')
        cy.get('#title').type('titulo de suspenso')
        cy.get('#description').type('triller inedito')
        cy.get('.btn').click()
        cy.contains('titulo de suspenso')
    })

})