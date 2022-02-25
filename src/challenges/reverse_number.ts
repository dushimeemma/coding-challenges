export const reverseNum = (num: number): number => {
  let revNum: string = '';
  let numStr: string = num.toString();
  for (let i = 1; i < numStr.length + 1; i++) {
    revNum += numStr[numStr.length - i];
  }
  return Number(revNum);
};
