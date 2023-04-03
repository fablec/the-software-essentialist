export const getMin = (seq: number[]): number =>
  seq.reduce((res, val) => (val < res ? val : res), Number.MAX_VALUE);

export const getMax = (seq: number[]): number =>
  seq.reduce((res, val) => (val > res ? val : res), -Number.MAX_VALUE);

export const getLength = (seq: number[]): number => seq.length;

const getSum = (seq: number[]): number =>
  seq.reduce((acc, val) => acc + val, 0);

export const getAvg = (seq: number[]): number => getSum(seq) / getLength(seq);
