import cypress from "cypress";

export class Logincontroller{

    unameid='#email';
    passid= '#passwd';
    button1='#SubmitLogin > span'
    

navigate(url: string){
cy.visit(url)

}
input(uname,pass: string){
    cy.get(this.unameid).type(uname)
    cy.get(this.passid).type(pass)
    

}
clickon(){
    cy.get(this.button1).click()

}
verify(){
    cy.get('.page-heading').should('contain', 'My account')

}

}




