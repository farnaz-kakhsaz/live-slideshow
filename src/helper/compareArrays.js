export const compareArrays = (array1, array2) => {
  const firstArray = JSON.stringify(array1);
  const secondArray = JSON.stringify(array2);

  if (firstArray === secondArray) {
    return false;
  } else {
    return true;
  }
};
