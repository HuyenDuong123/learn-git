import { contains } from "cypress/types/jquery"

describe('practic with should & and command', () => {


    // before(function () {
    //     cy.visit('https://example.cypress.io/')
    // })

    it('verify url', function () {

        cy.url().should('contain', 'cypress.io')

    })
    it('verify main text', () => {

        cy.contains('Kitchen Sink').should('be.visible');

    })

    it('verify number child menu of "Command"', () => {
        cy.wait(3000)
        cy.get('.dropdown-menu').find('li').should('have.length', '17')
        //.find('a')

    })

    it('verify elements in dropdown menu', () => {
        cy.get('.dropdown-menu').should($menu => {
            $menu.eq(0).text('Querying')
            $menu.eq(1).text('Traversal')
            $menu.eq(2).text('Actions')
            $menu.eq(3).text('Window')
            $menu.eq(4).text('Viewport')
            $menu.eq(5).text('Location')
            $menu.eq(6).text('Navigation')
            $menu.eq(7).text('Assertions')
            $menu.eq(8).text('Misc')
            $menu.eq(9).text('Connectors')
            $menu.eq(10).text('Waiting')
            $menu.eq(11).text('Network Requests')
            $menu.eq(12).text('Files')
            $menu.eq(13).text('Local Storage')
            $menu.eq(14).text('Cookies')
            $menu.eq(15).text('Spies, Stubs & Clocks')
            $menu.eq(16).text('Waiting')

        })
    })

    it('verify attribute by and command', () => {
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
            .should('have.text', 'Querying')
            .and('have.attr', 'href')
            .and('include', '/commands/querying')
    })
    

describe.only('practice with expect & assert command',()=>{
    before(function () {
        cy.visit('https://www.google.com/')
    })
    it('verify link by have.attr',() =>{
        cy.get('.lnXdpd').should('be.visible')


    })



})








})




