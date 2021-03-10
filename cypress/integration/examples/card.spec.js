/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
    // https://on.cypress.io/interacting-with-elements
    it('Check number of elements', () => {
      // https://on.cypress.io/type
      cy.get('.d-flex.flex-column.col-xs-9.col-s-5.col-2.p1.m2.bg-white.border-blue')
        .should('have.length', 3);
    })
  })