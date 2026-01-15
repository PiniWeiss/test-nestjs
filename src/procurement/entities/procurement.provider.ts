import { Item } from './procurement.entity';

export const itemsProviders = [
  {
    provide: 'ITEMS_REPOSITORY',
    useValue: Item,
  },
];