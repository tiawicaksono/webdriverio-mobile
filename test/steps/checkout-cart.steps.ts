import { Given, Then } from '@wdio/cucumber-framework';

Given(/^Click icon cart$/, async function () {
    await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.ImageView').click()
});

Then(/^remove item$/, async function () {
    await $('(//android.view.ViewGroup[@content-desc="remove item"])[2]/android.widget.TextView').click()
});

Then(/^click checkout$/, async function () {
    await $('//android.view.ViewGroup[@content-desc="Proceed To Checkout button"]/android.widget.TextView').click()

    await $('//android.widget.EditText[@content-desc="Full Name* input field"]').setValue('Tia Wicaksono')
    await $('//android.widget.EditText[@content-desc="Address Line 1* input field"]').setValue('Sumbertugu')
    await $('//android.widget.EditText[@content-desc="Address Line 2 input field"]').setValue('Kalibelo')
    await $('//android.widget.EditText[@content-desc="City* input field"]').setValue('Kediri')
    await $('//android.widget.EditText[@content-desc="State/Region input field"]').setValue('Jawa Timur')
    await $('//android.widget.EditText[@content-desc="Zip Code* input field"]').setValue('123456')
    await $('//android.widget.EditText[@content-desc="Country* input field"]').setValue('Indonesia')

    await $('//android.view.ViewGroup[@content-desc="To Payment button"]').click()
});