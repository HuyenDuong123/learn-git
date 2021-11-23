import 'cypress-file-upload';
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

import { login_function } from './command_Taskpattern'


describe('[TASK PATTERN LIST SCREEN][English] Testing Default State', function () {

    before(() => {
        cy.visit(GO_TO_WEBSITE);

        const tmp = new login_function();
        tmp.input();
        cy.wait(5000);

    });

    it('CHECK DEFAULT HEADER STATE', function () {
        cy.get(HEADER_PAGE).contains('Task pattern list').and('be.visible');
        cy.get(BUTTON_ON_THIS_PAGE).contains('Create new task').and('be.visible');


    })

    it.skip('CHECK DEFAULT BODY STATE', function () {
        cy.get(TH_NAME_AND_DATE).contains('Name').and('be.visible');
        cy.get(TH_NAME_AND_DATE).contains('Last execution date').and('be.visible');
        cy.get(TR_ROW).eq(2).should('be.visible').dblclick();
        //check title
        cy.wait(5000);
        cy.get('h3').contains('Task pattern detail').should('be.visible');

        cy.go('back');
        cy.get(BUTTON_ON_THIS_PAGE).should('be.visible').and('contain', 'Use this task pattern');
        cy.get(BUTTON_ON_THIS_PAGE).contains('Use this task pattern').eq(0).click();
        cy.wait(5000);
        cy.go('back');
        cy.get(PAGING).should('be.visible');
        cy.get(ITEM_IN_PAGING).should('be.visible');


    })

    it.skip('CHECK POPUP "Which do you select?" ', function () {
        cy.get('.List__Header-sc-4rw1nj-1 > .Button__ButtonStyle-sc-1aifjjh-0').click();
        cy.get(DIALOG).should('be.visible')
        cy.get(DIALOG).should('contain', 'Which do you select?');
        cy.get(DIALOG).find(BUTTON_ON_THIS_PAGE).should('have.length', '2');
        cy.get(BUTTON_ON_THIS_PAGE).contains('Create').click({ force: true });
        cy.location('pathname').should('eq', '/newTask');
        cy.go('back');
        cy.get(BUTTON_CREATE_INSCREEN).click();
        cy.get(BUTTON_ON_THIS_PAGE).contains('Use existing task').click({ force: true });
        cy.get(DIALOG).find('button').should('have.length', '2');
        cy.get(DIALOG).find('span').should('contain', 'Please press');
        cy.get(BUTTON_ON_THIS_PAGE).should('contain', 'Use this task pattern').and('be.visible');
        cy.get(DIALOG).contains('Close').should('be.visible').click();

    })
});

describe('CHECK CREATE TASK FLOW', function () {
    before(function () {
        cy.get(BUTTON_CREATE_SIDE_BAR).click();

    })
    it('CHECK DEFAULT STEP 1 STATE', function () {
        cy.get(HEADER_PAGE).contains('Create task pattern').should('be.visible');
        cy.get(BUTTON_ON_THIS_PAGE).should('contain', 'Next').and('be.disabled');
        cy.get(STEP_BAR).children().should('be.visible').and('have.length', '6');
        cy.get('h3').children().contains('Upload file').should('be.visible');
        cy.get('p').children().contains('Please upload files that you would like to process.').should('be.visible');
        cy.get('h4').children().contains('Drop files here').should('be.visible');
        cy.get('h4').children().contains('Or').should('be.visible');
        cy.get('span').children().contains('Supported file type').should('be.visible');
        cy.get('span').children().contains('PDF / TIFF / JPEG / PNG').should('be.visible');
        cy.get('span').contains('#Please reduce the 1 page to less than 5MB, the pages to less than 500pages, and the total file size to less than 200MB.').should('be.visible');
        cy.get('form>label>span').contains('Upload files').should('be.visible');

        const filepath1 = 'form.jpg';
        const filepath2 = 'form.pdf';
        const filepath3 = 'form.png';
        const filepath4 = 'form.tiff';
        const UPLOAD_FILE_API_URL = '/endpoints/hwr/v3beta1/validate-file';


        cy.intercept('POST', UPLOAD_FILE_API_URL).as("uploadFile");
        cy.get('#file').attachFile(filepath1);
        // cy.wait(10000);
        // cy.get('#file').attachFile(filepath2);
        // cy.wait(10000);
        // cy.get('#file').attachFile(filepath3);
        // cy.wait(10000);
        // cy.get('#file').attachFile(filepath4);
        // cy.wait(10000);

        // cy.get('tbody').contains('form.tiff');
        cy.get('tbody').contains('form.jpg');
        // cy.get('tbody').contains('form.png');
        // cy.get('tbody').contains('form.pdf');

        cy.get(BUTTON_ON_THIS_PAGE).contains('Next').should('not.be.disabled').click();
    })

    it('CHECK STEP 2 STATE', function () {

        cy.get(STEP_BAR).children().should('be.visible').and('have.length', '6');
        // cy.get(STEP_BAR).eq(1).should('have.css','color','#55B65C').and('be.visible');
        cy.get('.lfJCHo>span').first().should('have.css', 'background-color', 'rgb(121, 121, 121)').and('be.visible');
        cy.contains('Select file to read').should('have.css', 'color', 'rgb(85, 182, 92)').and('be.visible');
        //cy.get('div.jVbZZn').children().get('span').should('contain','Select file to read').and('have.css', 'color', 'rgb(85, 182, 92)');

        cy.get('.egIlGy').first().should('contain', 'Select file type').and('be.visible');
        //cy.get('.Step2__SubTitle-sc-s3f36q-2').should('contain', 'Currently only fixed form is supported. Please press next button and go to next step.').and('be.visible');
        //cy.get('.dQXUhp').should('be.checked');
        cy.get('span').contains('Select file type').should('be.visible');
        cy.get('span').contains('Currently only fixed form is supported. Please press next button and go to next step.').should('be.visible');



        cy.get('span').contains('Fixed form').should('be.visible');
        cy.get('span').contains('Fixed form design').should('be.visible');
        cy.get(BUTTON_ON_THIS_PAGE).contains('Next').should('not.be.disabled').click();


    })


    it('CHECK STEP 3 STATE', function () {
        cy.get(STEP_BAR).children().should('be.visible').and('have.length', '6');

        cy.get(BUTTON_ON_THIS_PAGE).should('contain', 'Next').and('be.disabled');
        cy.get('.lfJCHo>span').eq(0).should('have.css', 'background-color', 'rgb(121, 121, 121)').and('be.visible');
        cy.get('.lfJCHo>span').eq(2).should('have.css', 'background-color', 'rgb(121, 121, 121)').and('be.visible');

        cy.contains('Assign template automatically').should('have.css', 'color', 'rgb(85, 182, 92)').and('be.visible');
        cy.get('h3>span').should('contain', 'Assign template automatically').and('be.visible');

        // cy.get('h3>span').next().should('contain','Detected 0 types of file pattern from uploaded files.Please check assigned templates.').and('be.visible');
        //cy.get('.mrIDV').should('contain','Detected 0 types of file pattern from uploaded files.Please check assigned templates.').and('be.visible');
        cy.get('thead>tr>th').first().should('contain', 'No.').and('be.visible');
        cy.get('thead>tr>th').first().next().should('contain', 'Template').and('be.visible');
        cy.get('thead>tr>th').last().should('contain', 'Delete').and('be.visible');
        //cy.get('thead>tr>th').eq(1).should('contain','Template').and('be.visible'); // lấy vị trí theo eq
        cy.get('.rnIWp>span').should('contain', 'Add other template').and('be.visible').click();

        //it('check popup in step 3', function () {
            cy.get('.jrxakL').should('contain', 'Template selection').and('be.visible');
            cy.get('.enfObp').eq(0).should('contain', 'Template list').and('be.visible');
            cy.get('label').should('contain', 'Search').and('be.visible');
            cy.get('input[type="text"]').should('have.attr', 'placeholder', 'Please input');
            cy.get('button[type="list"]').should('be.visible');
            //view list:
            cy.get('thead>tr>th').eq(1).should('contain','Name').and('be.visible');
            cy.get('thead>tr>th').eq(2).should('contain','Description').and('be.visible');
            cy.get('.Row__Tr-sc-wv5il1-0 jNzStx').select();
            cy.wait(5000);
            cy.get(BUTTON_ON_THIS_PAGE).contains('Select').click();





            //cy.get('button[type="grid"]').should('be.visibale').click();


        //})



    })

















})





















