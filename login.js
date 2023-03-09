import { fixture, selector, t} from 'testcafe'

const usernameInput= selector('input[name=user-name][type=text]');
const passwordInput= selector('input[name=password][type=text]');
const loginbutton= selector('button[type=submit][type=text]');

 fixture ' Login User Action'
.page 'https://www.saucedemo.com/'


test ('login user action-Type Text',async t=>{
    await t
    .typeText(usernameInput,performance_glitch_user)
    .wait(3000)
    .typeText(passwordInput,secret_sauce );
    .wait(3000)
    .click(loginbutton)

});

