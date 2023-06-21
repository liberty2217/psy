import * as yup from 'yup';
import {useForm, OnSubmit} from '../../../hooks/useForm';
import {SIGNUP_VALIDATION_RULES} from '../../../constants/userConstants';

const {USERNAME, PASSWORD} = SIGNUP_VALIDATION_RULES;

export type SignUpInitialValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export const SIGN_UP_INITIAL_VALUES: SignUpInitialValues = {
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
};

const getValidationSchema = () =>
  yup.object({
    email: yup.string().email().required(),
    username: yup
      .string()
      .required()
      .min(USERNAME.MIN_LENGTH, 'Username must be at least 5 characters long')
      .max(USERNAME.MAX_LENGTH, 'Username must not exceed 30 characters')
      .matches(USERNAME.REGEX, "Username can't contain special characters"),
    password: yup
      .string()
      .required()
      .min(PASSWORD.MIN_LENGTH, 'Password must be at least 8 characters long')
      .max(PASSWORD.MAX_LENGTH, 'Password must not exceed 50 characters'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required(),
  });

export type SignUpFormData = yup.Asserts<
  ReturnType<typeof getValidationSchema>
>;

export type OnSubmitSignUp = OnSubmit<SignUpFormData>;

export const useSignUpForm = (
  onSubmit: OnSubmitSignUp,
  initialValues?: SignUpInitialValues,
) => {
  const validationSchema = getValidationSchema();

  return useForm<SignUpFormData>({
    initialValues: initialValues || SIGN_UP_INITIAL_VALUES,
    onSubmit,
    validationSchema,
  });
};

export type UseSignUpForm = ReturnType<typeof useSignUpForm>;
