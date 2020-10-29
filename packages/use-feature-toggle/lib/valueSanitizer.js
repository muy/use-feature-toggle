export const valueSanitizer = (value) => {
  if (typeof value === "undefined") {
    value = false;
  }

  switch (value) {
    case 1:
    case "1":
    case true:
    case "true":
    case "TRUE":
      return true;
    default:
      return false;
  }
};
