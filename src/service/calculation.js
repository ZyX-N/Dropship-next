export const getPercent = (largeAmount, smallAmount) => {
  try {
    return Math.ceil((smallAmount * 100) / largeAmount);
  } catch (error) {
    console.log(error);
    return null;
  }
};
