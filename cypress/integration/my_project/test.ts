

describe('[LOGIN SCREEN][English] Testing Default State', () => {
    before(() => {
        // runs once before all tests in the block
        //cy.prepareInitialState();
        cy.visit('http://192.168.1.206:3001/');
    });

    it('Contains Powered By Footer', () => {
        cy.contains('Powered By');
    });

    it('Contains Login Header', () => {
        cy.contains('Login');
    });

    it('Contains Forgot Password Text', () => {
        cy.contains('Forgot Password');
    });

    it('Contains 3 Buttons -> English , Japanese and Login', () => {
        cy.get('button').should($btns => {
            expect($btns.length).to.eq(3);
            expect($btns.text()).to.eq('English日本語Login');
        });
    });

    it('Contains Username Box', () => {
        cy.get('input[type="text"]').should($usernameBoxes => {
            expect($usernameBoxes.length).to.eq(1);
            expect($usernameBoxes.text()).to.eq('');
            expect($usernameBoxes).to.have.attr('placeholder', 'Email');
            expect($usernameBoxes).to.have.attr('name', 'email');
        });
    })
})
