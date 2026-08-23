Feature: Remove Product From Cart

  Scenario: Add product to cart and remove it from cart
    When I login with valid credentials
    And I add "Sauce Labs Backpack" to the cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart should be empty
    When I logout
    Then I should be redirected to the login page