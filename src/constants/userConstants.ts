export const SIGNUP_VALIDATION_RULES = {
  USERNAME: {
    REGEX: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{4,29}$/i,
    MAX_LENGTH: 30,
    MIN_LENGTH: 5,
  },
  PASSWORD: {
    MAX_LENGTH: 50,
    MIN_LENGTH: 8,
  },
};
