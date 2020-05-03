Feature: Display a list of Game of Thrones characters in the list

  Scenario: Data from API has yet to be loaded
    Given data is "Loading"
    When I am at "Home Screen"
    Then I should see "Placeholder List"

  Scenario: User request load more data from API while loading more
    Given data is "Loading More"
    When I am at "Home Screen"
    And I scroll to "bottom"
    Then I should not "Load More"

  Scenario: Data from API first page is loaded
    Given data is "Loaded"
    When I am at "Home Screen"
    Then I should see "List of first page of characters names"

  Scenario: Data from API second page is loaded
    Given data is "Loaded More"
    When I am at "Home Screen"
    Then I should see "List of second page of characters names"

  Scenario: Item is pressed
    Given data is "Loaded"
    When I am at "Home Screen"
    And I press "First Item in List"
    Then I should see "CharacterDetailScreen"
