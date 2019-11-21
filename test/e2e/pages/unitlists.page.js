class UnitListsPage {
    //This function will open the provided URL
    open() {
        browser.url('https://vardenisiffror.se/unitlists');
    }

    //This function will return the selector/element of the 
    //existing list on the main page
    get existingList() {
        return $('.list-item-box');
    }

    //This function will return the selector/element of the 
    //text box of the existing/new list in the edit page
    get inputSearch() {
        return $('#panel-search');
    }

    //This function will return the selector/element of the 
    //search result of the auto complete of the drop down in the edit page
    get searchResult() {
        return $('#resultlist-0');
    }

     //This function will return the selector/element of the 
    //added item in the edit page
    get addedItemsInList() {
        return $$('.unit-name')[1];
    }

    //This function will return the text of the searched city on the edit page
    get updatedList() {
        return this.addedItemsInList.getText();
    }
    //This function will return the selector/element of the back button on the edit page
    get backButton() {
        return $('#back-button');
    }

    //This function wil return the selector/element of the plus button on the main page
    get plusButton() {
        return $('.add');
    }

    //This function will return selector/element of the item list on the edit page
    get newListCreated() {
        return $('.list-item-box');
    }

    //This function will return the selector/element of the list of the titles on the main page
    get addedTitleInList() {
        return $$('.units-item');
    }

    //This function will return the selector/element of the delete button on the edit page
    get deleteButton() {
        return $('#remove-list');
    }

    //This function will be called when we click on the existing list on the main page
    clickOnExistingList() {
        if (this.existingList.isExisting()) {
            this.existingList.click();
        }
    }
   
    //This function will be used to search city on the edit page
    clickList() {
        const search = "Gotland";
        if (this.inputSearch.isExisting()) {
            this.inputSearch.click();

            this.inputSearch.setValue(search);
            this.inputSearch.click();
            this.searchResult.waitForClickable({ timeout: 3000 });
            this.searchResult.click();
        }

    }

    
    //This function will be called to simulate click on plus button
    //on the main page to add new list
    clickPlusButton() {
        if (this.plusButton.isExisting()) {
            this.plusButton.click();
        }
    }

    //This function will be called to simulate click on back button on the edit page
    clickBackButton() {
        if (this.backButton.isExisting()) {
            this.backButton.click();
        }

    }
}

export const unitListsPage = new UnitListsPage();
