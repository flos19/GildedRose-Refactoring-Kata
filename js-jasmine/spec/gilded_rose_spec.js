var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  // Test for regular item
  it("should decrease quality and sellIn by 1 for regular item before sell date", function() {
    const gildedRose = new Shop([ new Item("Regular Item", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(9);
  });

  // Test for regular item on sell date
  it("should decrease quality by 2 for regular item on sell date", function() {
    const gildedRose = new Shop([ new Item("Regular Item", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(8);
  });

  // Test for regular item after sell date
  it("should decrease quality by 2 for regular item after sell date", function() {
    const gildedRose = new Shop([ new Item("Regular Item", -5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-6);
    expect(items[0].quality).toEqual(8);
  });

  // Test for Aged Brie
  it("should increase quality and decrease sellIn by 1 for Aged Brie before sell date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(11);
  });

  // Test for Aged Brie on sell date
  it("should increase quality by 2 for Aged Brie on sell date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(12);
  });

  // Test for Aged Brie after sell date
  it("should increase quality by 2 for Aged Brie after sell date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-6);
    expect(items[0].quality).toEqual(12);
  });

  // Test for Sulfuras
  it("should not change quality or sellIn for Sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 5, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(5);
    expect(items[0].quality).toEqual(80);
  });

  // Test for Backstage passes with more than 10 days left
  it("should increase quality by 1 for Backstage passes with more than 10 days left", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
    expect(items[0].quality).toEqual(11);
  });

  // Test for Backstage passes with 10 days left
  it("should increase quality by 2 for Backstage passes with 10 days left", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(12);
  });

  // Test for Backstage passes with 5 days left
  it("should increase quality by 3 for Backstage passes with 5 days left", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(13);
  });

  // Test for Backstage passes on sell date
  it("should set quality to 0 for Backstage passes on sell date", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

  // Test case for Conjured item before sell date
  it("should decrease quality by 2 for Conjured item before sell date", function() {
    const gildedRose = new Shop([ new Item("Conjured Item", 5, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(8);
  });

});
