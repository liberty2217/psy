import {FormikConfig, FormikHelpers, FormikValues, useFormik} from 'formik';
import {useCallback, useMemo} from 'react';

export interface FieldProps<Value = string> {
  value: Value;
  onChange: (v: Value) => void;
  onSubmit?: () => void;
  error?: string;
}

export type OnSubmit<Values extends object> = (
  values: Values,
  formikHelpers: FormikHelpers<Values>,
) => Promise<void>;

interface OwnConfig<F extends object> {
  validateForm?: boolean;
  onSubmit: OnSubmit<F>;
}

export type UseFormConfig<T extends FormikValues> = Omit<
  FormikConfig<T>,
  'onSubmit'
> &
  OwnConfig<T>;

export const useForm = <T extends FormikValues>({
  validateForm = true,
  ...config
}: Omit<FormikConfig<T>, 'onSubmit'> & OwnConfig<T>) => {
  const formik = useFormik<T>({
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    ...config,
  });

  const field = useCallback(
    (name: keyof T, allowSubmit = false, showError = true) => ({
      onChangeText: formik.handleChange(name),
      onBlur: () => [
        formik.handleBlur(name),
        formik.setFieldTouched(name as string, true),
      ],

      error: showError
        ? formik.touched[name as string]
          ? formik.errors[name as string]
          : undefined
        : undefined,
      value: formik.values[name as string],
      onSubmit: allowSubmit ? formik.handleSubmit : undefined,
      disabled: formik.isSubmitting,
    }),
    [formik],
  );

  const submitProps = useMemo(
    () => ({
      onPress: () => formik.handleSubmit(),
      loading: formik.isSubmitting,
      disabled:
        formik.isSubmitting ||
        (validateForm && !(formik.isValid && formik.dirty)),
    }),
    [formik, validateForm],
  );

  return useMemo(
    () => ({field, submitProps, formik}),
    [field, formik, submitProps],
  );
};
