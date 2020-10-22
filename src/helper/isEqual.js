export const isEqual = (item1, item2) => {
  const firstItem = JSON.stringify(item1);
  const secondItem = JSON.stringify(item2);

  if (firstItem === secondItem) {
    return true;
  } else {
    return false;
  }
};
