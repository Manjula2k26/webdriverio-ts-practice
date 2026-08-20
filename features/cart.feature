Feature: Shopping Cart

  Scenario: Add product to cart and logout
    When I login with valid credentials
    And I add "Sauce Labs Backpack" to the cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I logout
    Then I should be redirected to the login page