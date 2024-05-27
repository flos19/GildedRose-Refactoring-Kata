class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];

      switch (currentItem.name) {
        case 'Aged Brie':
          this.updateAgedBrie(currentItem);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePasses(currentItem);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          // Sulfuras never alters its sellIn or quality
          break;
        default:
          if (this.isConjured(currentItem)) {
            this.updateConjuredItem(currentItem);
          } else {
            this.updateRegularItem(currentItem);
          }
      }

      this.updateSellIn(currentItem);
    }

    return this.items;
  }

  isConjured(item) {
    return item.name.includes('Conjured');
  }

  updateRegularItem(item) {
    if (item.quality > 0) {
      if (item.sellIn > 0) {
        item.quality -= 1;
      } else {
        item.quality -= 2;
      }
    }
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality += 1;
      if (item.sellIn <= 0 && item.quality < 50) {
        item.quality += 1;
      }
    }
  }

  updateBackstagePasses(item) {
    if (item.sellIn <= 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      item.quality += 3;
    } else if (item.sellIn <= 10) {
      item.quality += 2;
    } else {
      item.quality += 1;
    }

    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  updateConjuredItem(item) {
    if (item.quality > 1) {
      if (item.sellIn > 0) {
        item.quality -= 2;
      } else {
        item.quality -= 4;
      }
    }
  }

  updateSellIn(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      item.sellIn -= 1;
    }
  }
}
module.exports = {
  Item,
  Shop
}
