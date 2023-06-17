import React, {createContext, useContext} from 'react';
import {
  InitialValues,
  OnSubmitSignUp,
  UseSignUpForm,
  useSignUpForm,
} from '../../useSignUpForm';

const SignUpFormContext = createContext<UseSignUpForm>({} as never);

interface FormProps {
  onSubmit: OnSubmitSignUp;
  initialValues?: InitialValues;
  children: React.ReactNode;
}

export const useAddBusinessReviewFormContext = () =>
  useContext(SignUpFormContext);

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
