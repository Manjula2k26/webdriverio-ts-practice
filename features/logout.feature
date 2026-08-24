Feature: Logout
@regression
 Scenario: Logout from the application
    Given I am logged into the application
    When I click on menu options button
    When I click on Logout button
    Then I should be redirected to login page