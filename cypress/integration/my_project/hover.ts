import { should } from "chai";
import { contains } from "cypress/types/jquery";
import { eq } from "cypress/types/lodash"
import "cypress-real-events/support";

it('practice hover', function(){

cy.visit('https://the-internet.herokuapp.com/hovers')



// cy.contains('View profile').click({force:true});

// cy.get('.figcaption').should('have.css','display','none')

// cy.get(':nth-child(5) > img').trigger('mouseover').should('have.attr','src','/img/avatar-blank.jpg')
// cy.get('.figure').find('div').should('contain','name: user3').and('contain','View profile');
 //cy.get('.figure').find('div').contains('View profile').click({force:true});
cy.get('.figure').last().trigger('mouseover')
cy.get('.figcaption').should('be.visible')
cy
  .get('[data-cy="board-item"]')

  .should('have.css', 'background-color', 'rgb(5, 90, 140)');

cy
  .get('[data-cy="star"]')
  .click();

})