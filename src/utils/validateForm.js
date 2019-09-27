export const isFormValid = (values, numberOfFields) => {
  const objArray = Object.values(values);

  return objArray.length === numberOfFields && !objArray.some(el => el === '');
};
