import { fixture, selector, t} from 'testcafe'
const addbtn1= selector('button[type=submit][type=add-to-cart-sauce-labs-bike-light]');
const addbtn2= selector('button[type=submit][type=add-to-cart-sauce-labs-fleece-jacket]');
const cartbutton= selector('button[type=submit][type=shopping_cart_link]');
const cartcontentontainer= selector('button[type=submit][type=shopping_cart_link]');
const Checkout = Selector('btn btn_action btn_medium checkout_button').withText('checkout');


fixture`Interact With cart Page`
    .page`https://www.saucedemo.com/cart.html/`;
 fixture`Interact With the Page`
    .page`https://www.saucedemo.com/checkout-step-one.html`;
    fixture`Interact With the Page`
      .page' https://www.saucedemo.com/inventory.html'

test ('login user action-Click',async t=>{
    await t
    .click(addbtn1)
    .click(addbtn2)
    .click(cartbutton)
    .click(Checkout);
})

fixture`Interact With the Page`
    .page`https://www.saucedemo.com/checkout-step-one.html`;

test('Type Text test', async t => {
    await t
        .typeText('#firstName', 'samantha');
        .typeText('#lastName', 'rajapaksha')
        .typeText('Postal-code', '2505')
});
import { Selector } from 'testcafe';

fixture`Interact With the Page`
    .page`https://www.saucedemo.com/checkout-step-two.html`;

test('Click  continue test', async t => {
    const Continuebtn = Selector('submit').withText'continue');
    const Finishbtn = Selector('submit').withText'finish');
    await t
        .click(Continuebtn);
        .click (Finishbtn)
});

