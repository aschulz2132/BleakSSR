import { writable } from 'svelte/store';

class Troop {
    constructor(suit, color, type,id) {
      this.suit = suit;
      this.color = color;
      this.type = type;
      this.id = id
    }
  }




export const playerItemsInHand = writable(0);
export const playerHandContents = writable([]);
export const playerDeckContents = writable([]);