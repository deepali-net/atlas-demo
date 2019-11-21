Feature: Add edit and remove the list


    Scenario: click on existing list
            Given I'm on the main page
            When I click on the exisitng list
            Then existing list menu page opens

    Scenario: Search for Gotland and add to list
            Given I'm on the main page
            And I click on the exisitng list
            When I search Gotland in input
            Then Gotland added to the list   

     Scenario: Create a new list
            Given I'm on the main page
            When I click on the plus button
            Then A new list is created 

    Scenario: Rename the newly created list
            Given I'm on the main page
            When I click on the recently created list
            Then I can delte this list
            And new recently created list is removed    