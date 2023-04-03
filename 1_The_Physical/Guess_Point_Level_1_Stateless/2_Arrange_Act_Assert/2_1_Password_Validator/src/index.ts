type Result = {
  value: boolean;
  err: string[];
};

const checkMinLength =
  (minLength: number) =>
  (password: string): boolean =>
    password.length >= minLength;

const checkMaxLength =
  (maxLength: number) =>
  (password: string): boolean =>
    password.length <= maxLength;

const checkUpperChar = (password: string): boolean => /[A-Z]/.test(password);

const checkDigit = (password: string): boolean => /[0-9]/.test(password);

export const PasswordValidate = (password: string): Result => {
  const res: Result = { value: true, err: [] };

  if (!checkMinLength(5)(password)) {
    res.value &&= false;
    res.err = [...res.err, "password too short"];
  }
  if (!checkMaxLength(15)(password)) {
    res.value &&= false;
    res.err = [...res.err, "password too long"];
  }
  if (!checkUpperChar(password)) {
    res.value &&= false;
    res.err = [...res.err, "password must have at least a digit"];
  }
  if (!checkUpperChar(password)) {
    res.value &&= false;
    res.err = [...res.err, "password must have at least an uppercase"];
  }
  return res;
};
