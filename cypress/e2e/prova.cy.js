describe('empty spec', () => {
  //Teste para pesquisa de nome filtrado
  it.skip('passes', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type('ARRA')
    cy.get('#searchsubmit').click()
    cy.get('tbody > tr > :nth-child(1) > a').should('contain.text','ARRA')

  })
  //Teste para criação de um novo computador
  it('passes', () => {
    let info = criarUsuario()
  })
})
//Teste erro na criação de um novo computador
it.skip('passes', () => {
  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#introduced').type('2022-12-05')
  cy.get('#discontinued').type('2022-12-07')
  cy.get('.primary').click()
  cy.get('.error > .input').should('contain.text','Failed to refine type : Predicate isEmpty() did not fail.')
})
function criarUsuario(){

  let Computername = 'Provapc'
  let Introduced = '2022-12-05'
  let Discotinued = '2022-12-07'

  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#name').type(Computername)
  cy.get('#introduced').type(Introduced)
  cy.get('#discontinued').type(Discotinued)
  cy.get('.primary').click()

}