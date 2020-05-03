import {by, device, element, expect} from 'detox';

describe('See Game of Thrones Characters Information', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Scenario: See the initial list of Game of Thrones characters, Given any, When I am at "Home Screen", Then I should see "initial list of Game of Thrones characters"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);

    await expect(element(by.text('Balon Greyjoy'))).toBeVisible();
  });

  it('Scenario: See more than the initial list of Game of Thrones characters, Given I am at "Home Screen", When I scroll to "bottom", Then I should see "Additional Game of Thrones characters"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);
    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 0.5);
    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);
    await expect(element(by.text('Nysterica'))).toBeVisible();
  });

  it('Scenario: See the details of selected Game of Thrones characters, Given I am at "Home Screen", When I press "Character", Then I should see "Character Details"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.text('Walder')).tap();

    await expect(element(by.text('Male'))).toBeVisible();

    await expect(element(by.text('Hodor'))).toBeVisible();
  });
});
