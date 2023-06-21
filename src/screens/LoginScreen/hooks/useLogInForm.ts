import * as yup from 'yup';
import {useForm, OnSubmit} from '../../../hooks/useForm';

export type LogInInitialValuesType = {
  email: string;
  password: string;
};

export const LOG_IN_INITIAL_VALUES: LogInInitialValuesType = {
  email: '',
  password: '',
};

const getValidationSchema = () =>
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

export type LogInFormData = yup.Asserts<ReturnType<typeof getValidationSchema>>;

export type OnSubmitLogIn = OnSubmit<LogInFormData>;

export const useLogInForm = (
  onSubmit: OnSubmitLogIn,
  initialValues?: LogInInitialValuesType,
) => {
  const validationSchema = getValidationSchema();

  return useForm<LogInFormData>({
    initialValues: initialValues || LOG_IN_INITIAL_VALUES,
    onSubmit,
    validationSchema,
  });
};

export type UseLogInForm = ReturnType<typeof useLogInForm>;
