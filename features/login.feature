Feature: Login "working on feature branch workflow"

@smoke @regression
 Scenario: Login with valid credentials
    When I login with valid credentials
    Then I should see the product page

@regression
 Scenario: Login with invalid username and password
   When I login with invalid credentials
   Then I should see the login error message
    