export const isValidSSN = (ssn: string) => {
  const regex = /^\d{3}-?\d{2}-?\d{4}$/;
  return regex.test(ssn);
};
