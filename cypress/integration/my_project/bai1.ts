/// <reference types="cypress" />
import cypress from 'cypress';
import { should } from 'chai';
import { bai1_controller } from '../controller/bai1_controller'
const link1 = 'https://example.cypress.io/';
const link2 = 'https://example.cypress.io/commands/querying';
const Bai1_controller = new bai1_controller();
describe('practic with get command', () => {

    beforeEach(() => {

        Bai1_controller.navigate(link1);
    })

    it('select by text- contains', () => {

        cy.contains('Kitchen Sink').should('be.visible');
        cy.contains('h2', 'Commands').should('be.visible');
        cy.get('.col-xs-12 > .home-list').find('li').find('a').contains('Querying').click();

    })
    it('select by position - .first() .last() . eq()', () => {
        cy.get('.navbar .dropdown-toggle').contains('Commands ').should('be.visible');
        cy.get('.navbar .dropdown .dropdown-menu').find('li').should('have.length', '17');
        cy.get('.dropdown-menu').first().should('contain', 'Querying');
        cy.get('.dropdown-menu').last().should('contain', 'Spies, Stubs & Clocks');
        cy.get('.dropdown-menu').find('li').eq(3).should('contain', 'Window');
        cy.get('.dropdown-menu').find('li').eq(3).next().should('contain', 'Viewport');
        cy.get('.dropdown-menu').find('li').eq(3).prev().should('contain', 'Actions');

    })


    it('is the link active with request command', () => {
        cy.request(link1).its('status').should('eq', 200);
        cy.contains('Querying').should('have.attr', 'href', '/commands/querying');
        cy.request(link2).its('status').should('eq', 200);

    })
    it('check link on nav bar by check link commands', () => {
        cy.contains('Utilities').click();
        cy.location('pathname').should('eq', '/utilities');
        cy.go('back');

        cy.contains('Cypress API').click();
        cy.location('pathname').should('eq', '/cypress-api');
        cy.go('back');


    })
    it('check link in dropdown use foreach()', () => {
        const menus = ['querying', 'traversal', 'actions', 'window', 'viewport', 'location', 'navigation']

        menus.forEach(menu => {
            cy.get('.home-list').find('li').contains(menu, { matchCase: false }).click();
            cy.location('pathname').should('contain', `/commands/${menu}`);
            cy.go('back');


        })
        
    })

    it('check all link in dropdown that all active but not const array', () => {

        cy.get('.home-list').find('li').each(page=> {
            cy.request(page.prop('href'),link1)


        })


















    })

















})