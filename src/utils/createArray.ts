export const createArray = (num: number) => {
  const newArray: number[] = [];
  for (let i = 1; i <= num; i++) {
    newArray.push(i);
  }
  return newArray;
};
