import React, {createContext, useContext} from 'react';
import {
  LogInInitialValuesType,
  OnSubmitLogIn,
  UseLogInForm,
  useLogInForm,
} from '../../hooks/useLogInForm';

const LogInFormContext = createContext<UseLogInForm>({} as never);

interface LogInFormProps {
  onSubmit: OnSubmitLogIn;
  initialValues?: LogInInitialValuesType;
  children: React.ReactNode;
}

export const useLogInFormContext = () => useContext(LogInFormContext);

export const LogInForm: React.FC<LogInFormProps> = ({
  children,
  onSubmit,
  initialValues,
}) => {
  const form = useLogInForm(onSubmit, initialValues);

  return (
    <LogInFormContext.Provider value={form}>
      {children}
    </LogInFormContext.Provider>
  );
};
