export const handleTitle = (numbers, dots, arrows) => {
  const isOneClicked = numbers || dots || arrows;

  if (isOneClicked) {
    let result = "";
    const howManyClicked = numbers + dots + arrows;
    const whitchOneLTR = numbers
      ? "Numbers"
      : dots
      ? "Dots"
      : arrows && "Arrows";
    const whitchOneRTL = arrows
      ? "Arrows"
      : dots
      ? "Dots"
      : numbers && "Numbers";

    switch (howManyClicked) {
      case 1:
        result = whitchOneLTR;
        break;
      case 2:
        result = `${whitchOneLTR} and ${whitchOneRTL}`;
        break;
      default:
        return "Slideshow with Numbers, Dots and Arrows";
    }
    return "Slidshow with " + result;
  } else {
    return "Simple Slideshow";
  }
};
