import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^After login, show product$/, async function () {
    await expect($('//XCUIElementTypeStaticText[@name="Products"]')).toHaveText('Products')
});

When(/^Choose product, Update quantity, Click add to cart$/, async function () {
    await $('//XCUIElementTypeOther[@name="Sauce Labs Backpack"]').click()
    //update quantity
    for (let i = 1; i <= 2; i++) {
        await $('//XCUIElementTypeOther[@name="counter plus button"]').click()
    }
    await $('//XCUIElementTypeOther[@name="counter minus button"]').click()
    //add to cart
    await $('//XCUIElementTypeOther[@name="Add To Cart button"]').click()
    await driver.pause(3000)
});

Then(/^CLick left menu, click catalog$/, async function () {
    // await $('-ios predicate string:label == "Catalog, tab, 1 of 3"').click()
    // await $('//XCUIElementTypeButton[@name="tab bar option catalog"]').click()
    await $('//XCUIElementTypeOther[@name="navigation back button"]').click()
});

Then(/^Choose product, Update quantity, Click add to cart again$/, async function () {
    await $('//XCUIElementTypeOther[@name="Sauce Labs Bike Light"]').click()
    // update quantity
    for (let i = 1; i <= 3; i++) {
        await $('//XCUIElementTypeOther[@name="counter plus button"]').click()
    }
    // add to cart
    await $('//XCUIElementTypeOther[@name="Add To Cart button"]').click()
    await driver.pause(3000)

    // klik icon cart
    await $('//XCUIElementTypeButton[@name="tab bar option cart"]').click()
    await $('(//XCUIElementTypeOther[@name="remove item"])[2]').click()

    await $('//XCUIElementTypeOther[@name="Proceed To Checkout button"]').click()

    // Login
    await $('//XCUIElementTypeTextField[@name="Username input field"]').setValue('bob@example.com')
    // cara 1 : menggunakan xpath
    await $('//XCUIElementTypeSecureTextField[@name="Password input field"]').setValue('10203040')
    // cara 2 : menggunakan -ios class chai
    // await $('-ios class chai:**/XCUIElementTypeSecureTextField[`name == "Password input field"`]').setValue('10203040')
    // cara 3 : menggunakan -ios predicate string
    // await $('-ios predicate string:name == "Password input field"').setValue('10203040')
    await $('//XCUIElementTypeOther[@name="Login button"]').click()

    await driver.pause(3000)

    // await $('//android.widget.EditText[@content-desc="Full Name* input field"]').setValue('Tia Wicaksono')
    // await $('//android.widget.EditText[@content-desc="Address Line 1* input field"]').setValue('Sumbertugu')
    // await $('//android.widget.EditText[@content-desc="Address Line 2 input field"]').setValue('Kalibelo')
    // await $('//android.widget.EditText[@content-desc="City* input field"]').setValue('Kediri')
    // await $('//android.widget.EditText[@content-desc="State/Region input field"]').setValue('Jawa Timur')
    // await $('//android.widget.EditText[@content-desc="Zip Code* input field"]').setValue('123456')
    // await $('//android.widget.EditText[@content-desc="Country* input field"]').setValue('Indonesia')

    // await $('//android.view.ViewGroup[@content-desc="To Payment button"]').click()
    // await driver.pause(5000)
});