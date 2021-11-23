import { expect } from "chai"
import { isEqual } from "cypress/types/lodash"

describe('check url', function(){
before(function(){
cy.visit('https://www.google.com/')
})

it('check url', function(){
cy.url().should('include', 'google.com')



})




})