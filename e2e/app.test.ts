import {by, device, element, expect} from 'detox';

describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Given any, When I open App, Then I should see "List of Characters Names"', async () => {
    await expect(element(by.text('John'))).toBeVisible();
    await expect(element(by.text('Mary'))).toBeVisible();
    await expect(element(by.text('Jane'))).toBeVisible();
  });
});
