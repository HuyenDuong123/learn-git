import cypress from "cypress"

it('and command', function(){
//cy.visit('https://the-internet.herokuapp.com/login');
cy.visit('https://the-internet.herokuapp.com/checkboxes');
// cy.get('.radius').as('buttonlogin')
// cy.get('@buttonlogin').should('be.visible').and('be.enabled');

// cy.get('#username').type('huyen.duong').blur();
// //.should('have.attr','type');

// cy.get('#password').type('huyen.duong').blur({force:true});

cy.get('form input').last().should('be.checked');
cy.get('form input').first().check();






})