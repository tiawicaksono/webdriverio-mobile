import { Given, When, Then } from '@wdio/cucumber-framework';

Given(/^I open menu and choose login$/, async function () {
    // console.log("menu");

    await $('~open menu').click()
    await $('//*[@text="Log In"]').click()
});

When(/^login with (.+) and (.+)$/, async function (username, password) {
    // console.log("usernameeeee" + username + "_" + password);

    // await $('//*[@content-desc="Username input field"]').setValue(username)
    await $('//android.widget.EditText[@content-desc="Username input field"]').setValue(username)
    await $('//android.widget.EditText[@content-desc="Password input field"]').setValue(password)
    // await $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView').click()
    await $('//android.view.ViewGroup[@content-desc="Login button"]').click()

    await driver.pause(10000)

    // await expect($('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView')).toHaveText('Provided credentials do not match any user in this service')
});

Then(/^go to product page$/, async function () {
    // const selector = 'new UiSelector().text("Products").className("android.widget.TextView")';
    // const productUISelector = await $(`android=${selector}`)
    // expect(productUISelector).toHaveText('Products')
    await expect($('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView')).toHaveText('Products')
});
