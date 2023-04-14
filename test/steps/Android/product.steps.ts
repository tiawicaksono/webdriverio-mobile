import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^After login, show product$/, async function () {
    await expect($('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')).toHaveText('Products')
});

When(/^Choose product, Update quantity, Click add to cart$/, async function () {
    // await $('//android.widget.ImageView[@resource-id="io.appium.android.apis:id/select_button"]').click()
    await $('(//android.view.ViewGroup[@content-desc="store item"])[1]/android.view.ViewGroup[1]/android.widget.ImageView').click()
    //update quantity
    for (let i = 1; i <= 3; i++) {
        await $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView').click()
    }
    await $('//android.view.ViewGroup[@content-desc="counter minus button"]/android.widget.ImageView').click()
    //add to cart
    await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]/android.widget.TextView').click()
    await driver.pause(5000)
});

Then(/^CLick left menu, click catalog$/, async function () {
    await $('~open menu').click()
    await $('//*[@text="Catalog"]').click()
});

Then(/^Choose product, Update quantity, Click add to cart again$/, async function () {
    await $('(//android.view.ViewGroup[@content-desc="store item"])[2]/android.view.ViewGroup[1]/android.widget.ImageView').click()
    //update quantity
    for (let i = 1; i <= 3; i++) {
        await $('//android.view.ViewGroup[@content-desc="counter plus button"]/android.widget.ImageView').click()
    }
    //add to cart
    await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]/android.widget.TextView').click()
    await driver.pause(5000)

    await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView').click()
    await $('(//android.view.ViewGroup[@content-desc="remove item"])[2]/android.widget.TextView').click()

    await $('//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]/android.widget.TextView').click()

    await $('//android.widget.EditText[@content-desc="Username input field"]').setValue('bob@example.com')
    await $('//android.widget.EditText[@content-desc="Password input field"]').setValue('10203040')
    await $('//android.view.ViewGroup[@content-desc="Login button"]').click()

    await driver.pause(5000)

    await $('//android.widget.EditText[@content-desc="Full Name* input field"]').setValue('Tia Wicaksono')
    await $('//android.widget.EditText[@content-desc="Address Line 1* input field"]').setValue('Sumbertugu')
    await $('//android.widget.EditText[@content-desc="Address Line 2 input field"]').setValue('Kalibelo')
    await $('//android.widget.EditText[@content-desc="City* input field"]').setValue('Kediri')
    await $('//android.widget.EditText[@content-desc="State/Region input field"]').setValue('Jawa Timur')
    await $('//android.widget.EditText[@content-desc="Zip Code* input field"]').setValue('123456')
    await $('//android.widget.EditText[@content-desc="Country* input field"]').setValue('Indonesia')

    await $('//android.view.ViewGroup[@content-desc="To Payment button"]').click()
    await driver.pause(5000)
});

// Then(/^Click icon cart$/, async function () {
//     await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView').click()
// });

// Then(/^remove item$/, async function () {
//     await $('(//android.view.ViewGroup[@content-desc="remove item"])[2]/android.widget.TextView').click()
// });

// Then(/^click checkout$/, async function () {
//     await $('//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]/android.widget.TextView').click()

//     await $('//android.widget.EditText[@content-desc="Full Name* input field"]').setValue('Tia Wicaksono')
//     await $('//android.widget.EditText[@content-desc="Address Line 1* input field"]').setValue('Sumbertugu')
//     await $('//android.widget.EditText[@content-desc="Address Line 2 input field"]').setValue('Kalibelo')
//     await $('//android.widget.EditText[@content-desc="City* input field"]').setValue('Kediri')
//     await $('//android.widget.EditText[@content-desc="State/Region input field"]').setValue('Jawa Timur')
//     await $('//android.widget.EditText[@content-desc="Zip Code* input field"]').setValue('123456')
//     await $('//android.widget.EditText[@content-desc="Country* input field"]').setValue('Indonesia')

//     await $('//android.view.ViewGroup[@content-desc="To Payment button"]').click()
// });