export function compare(a: any, b: any) {
  if (a.twitterVerified === true && b.twitterVerified !== true) {
    return -1;
  }
  if (a.twitterVerified !== true && b.twitterVerified === true) {
    return 1;
  }
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
    ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(0)) + "k"
    : Math.sign(num) * Math.abs(num);
}

export const checkSizeMap = {
  0: "Unknown",
  1: "$2-5k",
  2: "$5-15k",
  3: "$15-25k",
  4: "$25-50k",
  6: "$100k+",
  7: "All",
};

export const averageCheckSize = {
  0: 0,
  1: 3500,
  2: 10000,
  3: 20000,
  4: 37500,
  6: 100000,
};
