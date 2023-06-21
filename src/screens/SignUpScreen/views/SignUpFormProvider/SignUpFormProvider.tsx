import React, {createContext, useContext} from 'react';
import {
  SignUpInitialValues,
  OnSubmitSignUp,
  UseSignUpForm,
  useSignUpForm,
} from '../../hooks/useSignUpForm';

const SignUpFormContext = createContext<UseSignUpForm>({} as never);

interface FormProps {
  onSubmit: OnSubmitSignUp;
  initialValues?: SignUpInitialValues;
  children: React.ReactNode;
}

export const useSignUpFormContext = () => useContext(SignUpFormContext);

export const SignUpForm: React.FC<FormProps> = ({
  children,
  onSubmit,
  initialValues,
}) => {
  const form = useSignUpForm(onSubmit, initialValues);

  return (
    <SignUpFormContext.Provider value={form}>
      {children}
    </SignUpFormContext.Provider>
  );
};
