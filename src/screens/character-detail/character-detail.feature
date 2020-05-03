Feature: Display the details of the selected Game of Thrones character

  Scenario: Data from API has yet to be loaded
    Given data is "Loading"
    When I am at "CharacterDetail Screen"
    Then I should see "Placeholder Detail"

  Scenario: Data from API is loaded
    Given data is "Loaded"
    When I am at "CharacterDetail Screen"
    Then I should see "Name Data"
    And I should see "Gender Data"
    And I should see "Aliases Data"
