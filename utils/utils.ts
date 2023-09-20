export function compare(a: any, b: any) {
  // if (a.twitterVerified === true && b.twitterVerified !== true) {
  //   return -1;
  // }
  // if (a.twitterVerified !== true && b.twitterVerified === true) {
  //   return 1;
  // }
  if (a.checksize_id > b.checksize_id) {
    return -1;
  }
  if (a.checksize_id < b.checksize_id) {
    return 1;
  }
  return 0;
}

export function kFormatter(num: any) {
  return Math.abs(num) > 4000
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(0)) + 'k'
    : Math.sign(num) * Math.abs(num);
}

export const checkSizeMap = {
  0: 'Unknown',
  1: '$2-5k',
  2: '$5-15k',
  3: '$15-25k',
  4: '$25-50k',
  5: '$50-100k',
  6: '$100k+',
  7: 'All',
};

let checksizes = {
  0: 0,
  1: 3500,
  2: 10000,
  3: 20000,
  4: 37500,
  5: 75000,
  6: 100000,
};
export function getCheckSizeForId(id: keyof typeof checksizes) {
  return checksizes[id];
}

export const checkSizes = [
  { id: '7', label: 'All' },
  { id: '2', label: '$5-15k' },
  { id: '3', label: '$15-25k' },
  { id: '4', label: '$25-50k' },
  { id: '6', label: '$100k' },
];

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const searchOptions = {
  threshold: 0.3,
  location: 0,
  distance: 100,
  minMatchCharLength: 2,
  keys: ['name', 'email', 'company', 'title', 'details'],
};
