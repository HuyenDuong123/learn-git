import { Logincontroller } from '../controller/login_controller'
/// <reference types= "cypress" />
const login_controller = new Logincontroller();




it('login to a website', function() {

    login_controller.navigate('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    login_controller.input('huyendt160199@gmail.com','12345');
    login_controller.clickon();
    login_controller.verify();
    
    


})