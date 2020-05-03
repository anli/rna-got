Feature: See Game of Thrones Characters Information

  Scenario: See the initial list of Game of Thrones characters
    Given any
    When I am at "Home Screen"
    Then I should see "initial list of Game of Thrones characters"

  Scenario: See more than the initial list of Game of Thrones characters
    Given I am at "Home Screen"
    When I scroll to "bottom"
    Then I should see "Additional Game of Thrones characters"

  Scenario: See the details of selected Game of Thrones characters
    Given I am at "Home Screen"
    When I press "Character"
    Then I should see "Character Details"
