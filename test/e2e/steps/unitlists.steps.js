import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { unitListsPage } from '../pages/unitlists.page';

//This is the common function and will be use in most of the scenarios
Given(/^I'm on the main page$/, () => {
    unitListsPage.open();
});

//This function is used when we click on the existing list.
//this function is reusable and can be used for few scenarios
When(/^I click on the exisitng list$/, () => {
    unitListsPage.clickOnExistingList();
});

//This function will be used for test scenario "click on existing list"
Then(/^existing list menu page opens$/, () => {
    assert.equal(unitListsPage.backButton.getText(), "Tillbaka");
});

//This function is used for test scenario "Search for Gotland and add to list"
When(/^I search Gotland in input$/, () => {
    unitListsPage.clickList();
});

//This function is used for test scenario "Search for Gotland and add to list"
Then(/^Gotland added to the list$/, () => {
    assert.equal(unitListsPage.updatedList, "2. Gotland");
});

//This function is used for test scenario "Create a new list"
When(/^I click on the plus button$/, () => {
    unitListsPage.clickPlusButton();
    unitListsPage.clickBackButton();
});

//This function is used for test scenario "Create a new list"
Then(/^A new list is created$/, () => {
    const titleText = unitListsPage.addedTitleInList[1].getText();
    assert.equal(titleText, "Ny lista\n0 enheter\n✓");
   
});

//This function is used in test scenario "Rename the newly created list"
When(/^I click on the recently created list$/, () => {
    unitListsPage.addedTitleInList[1].click();
   
});

//This function is used in test scenario "Rename the newly created list"
Then(/^I can delte this list$/, () => {
    unitListsPage.deleteButton.click();
    
});

//This function is used in test scenario "Rename the newly created list"
Then(/^new recently created list is removed$/, () => {
    assert.equal(unitListsPage.addedTitleInList[0].getText(), "Min lista\n2 enheter\nRiket\nGotland\n✓");
    assert.equal(unitListsPage.addedTitleInList[1], undefined);
});





