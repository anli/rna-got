import {by, device, element, expect} from 'detox';

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Given any, When I open App, Then I should see "List of Characters Names"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);

    await expect(element(by.text('Balon Greyjoy'))).toBeVisible();
  });

  it('Given any, When I am at "Home Screen", And I scroll to "bottom", Then I should see "Additional List of Characters Names"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);
    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 0.5);
    await element(by.id('HomeScreen.FlatList')).swipe('up', 'slow', 1);
    await expect(element(by.text('Nysterica'))).toBeVisible();
  });

  it('Given any, When I am at "Home Screen", And I press "Walder", Then I should see "Walder Detail Screen"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.text('Walder')).tap();

    await expect(element(by.text('Male'))).toBeVisible();
  });
});
