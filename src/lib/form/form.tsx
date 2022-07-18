import styled from '@emotion/styled';
import { DevTool } from '@hookform/devtools';
import { noop } from 'lodash';
import { FormProvider, UseFormReturn } from 'react-hook-form';

import type { ReactNode } from 'react';

export interface FormProps<TFieldValues> extends UseFormReturn<TFieldValues> {
  children: ReactNode;
  onSubmitSuccess?: Parameters<UseFormReturn['handleSubmit']>[0];
  onSubmitError?: Parameters<UseFormReturn['handleSubmit']>[1];
  enableDevtools?: boolean;
}

const StyledForm = styled.form``;

export function Form<TFieldValues>({
  children,
  onSubmitSuccess = noop,
  onSubmitError = noop,
  enableDevtools = false,
  ...formProps
}: FormProps<TFieldValues>) {
  return (
    <FormProvider {...formProps}>
      <StyledForm
        onSubmit={formProps.handleSubmit(onSubmitSuccess, onSubmitError)}
      >
        {children}
      </StyledForm>
      {enableDevtools && process.env['NODE_ENV'] !== 'production' && (
        <DevTool control={formProps.control} />
      )}
    </FormProvider>
  );
}
export default Form;
