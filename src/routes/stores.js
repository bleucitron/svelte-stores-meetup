import data from '../data.json';
import { writable, derived } from 'svelte/store';

const store = writable({});
const { subscribe, set, update } = store;

export const basket = {
  subscribe,
  add: (id, qty) => {
    update(b => {
      if (b[id]) {
        b[id].qty += qty;
      } else {
        const item = data.find(i => i.id === id);
        b[id] = {
          ...item,
          qty,
        };
      }

      return b;
    });
  },
  remove: id => {
    update(b => {
      delete b[id];
      return b;
    });
  },
  clear: () => set({}),
  total: derived(store, b =>
    Object.values(b)
      .map(i => i.qty * i.price)
      .reduce((acc, price) => acc + price, 0),
  ),
};
