export const reverseArr = (arr: any[]): any[] => {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr.push(arr[i]);
  }
  return arr.slice(arr.length / 2) as any[];
};
