import "./form-input.styles";
import { FormInputLabel, Input, Group } from "./form-input.styles";
import React, { FC } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
}

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  return (
    <Group>
      <Input { ...otherProps }/>

      {
        label && (
          <FormInputLabel>
            { label }
          </FormInputLabel>
        )
      }
    </Group>
  );
};

export default FormInput;