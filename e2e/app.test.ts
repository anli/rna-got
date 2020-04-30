import {by, device, element, expect} from 'detox';

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Given any, When I open App, Then I should see "List of Characters Names"', async () => {
    await expect(element(by.text('Walder'))).toBeVisible();

    await element(by.id('HomeScreen.FlatList')).scrollTo('bottom');

    await expect(element(by.text('Balon Greyjoy'))).toBeVisible();
    await expect(element(by.text('Mordane'))).toBeVisible();
  });
});
