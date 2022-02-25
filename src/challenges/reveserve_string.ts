export const reverseStr = (str: string): string => {
  let revStr: string = '';
  for (let i = 1; i < str.length + 1; i++) {
    revStr += str[str.length - i];
  }
  return revStr;
};
