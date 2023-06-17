import * as yup from 'yup';
import {useForm, OnSubmit} from '../../hooks/useForm';
import {USERNAME_REGEX} from '../../constants/constants';

export type InitialValues = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export const INITIAL_VALUES: InitialValues = {
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
      .min(5, 'Username must be at least 5 characters long')
      .max(30, 'Username must not exceed 30 characters')
      .matches(USERNAME_REGEX, "Username can't contain special characters"),
    password: yup
      .string()
      .required()
      .min(8, 'Password must be at least 8 characters long')
      .max(50, 'Password must not exceed 50 characters'),
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
  initialValues?: InitialValues,
) => {
  const validationSchema = getValidationSchema();

  return useForm<SignUpFormData>({
    initialValues: initialValues || INITIAL_VALUES,
    onSubmit,
    validationSchema,
  });
};

export type UseSignUpForm = ReturnType<typeof useSignUpForm>;
