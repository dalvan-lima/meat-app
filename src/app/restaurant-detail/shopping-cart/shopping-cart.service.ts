import { iMenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = []
  }

  increaseQty(item: CartItem) {
    item.quantity++
  }

  decreaseQty(item: CartItem) {
    item.quantity--
    if(item.quantity === 0) {
      this.removeItem(item)
    }
  }

  total(): number {
    return this.items.map(item => item.value())
    .reduce((prev, value) => prev+value, 1)
  }

  addItem(item: iMenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id )
    if(foundItem) {
      this.increaseQty(foundItem)
    }else {
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
  }


}