Feature: Login

 Scenario: Login with valid credentials
    When I login with valid credentials
    Then I should see the product page

 Scenario: Login with invalid credentials
   When I login with invalid credentials
   Then I should see the login error message
    