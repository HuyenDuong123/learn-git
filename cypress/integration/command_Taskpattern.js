
import {

    GO_TO_WEBSITE,
    INPUT_EMAIL,
    INPUT_PASS,
    LOGIN_BUTTON,
    HEADER_PAGE,
    BUTTON_ON_THIS_PAGE,
    TH_NAME_AND_DATE,
    TR_ROW,
    PAGING,
    ITEM_IN_PAGING,
    DIALOG,
    STEP_BAR,
    BUTTON_CREATE_INSCREEN,
    BUTTON_CREATE_SIDE_BAR,

}
from './UI_taskpattern'

export class login_function{


    input(){
        let name= "ragarwal+sotatek1@cogent.co.jp";
        let pass="Hh1234567890#";
       cy.get(INPUT_EMAIL).type(name);
       cy.get(INPUT_PASS).type(pass);
       cy.get(LOGIN_BUTTON).click();
      
   }
   
   }