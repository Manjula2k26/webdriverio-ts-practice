Feature: Checkout Product
@smoke @regression
  Scenario: Complete product checkout successfully

    When I login with valid credentials

    And I add "Sauce Labs Backpack" to the cart

    Then I should see "Sauce Labs Backpack" in the cart

    When I proceed to checkout

    And I enter checkout information
      | firstName | Manjula |
      | lastName  | Test    |
      | postalCode | 411001 |

    And I continue checkout

    Then I should see the order overview

    When I finish the order

    Then I should see the order confirmation

    When I logout

    Then I should be redirected to the login page