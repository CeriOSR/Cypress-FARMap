Feature: Login

    I want to log into FARMap

    Scenario: FARMap Login
      Given I open FARMap login page
      When I type in username and password
      And I click on Sign in button
      Then Map page dashboard should be shown