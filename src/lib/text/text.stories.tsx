import { Meta, Story } from '@storybook/react';
import { ElementType } from 'react';

import { Text, TextProps } from './text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps<ElementType>> = function Template(args) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, ...rest } = args;
  return <Text {...rest}>{children}</Text>;
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  variant: 'body1',
  italicized: false,
  bold: false,
};

const VariantsTemplate: Story<TextProps<ElementType>> =
  function VariantsTemplate(args) {
    const variants = [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'body1',
      'body2',
      'subtitle1',
      'subtitle2',
      'overline',
      'caption',
      'button',
      'inherit',
    ] as const;
    return (
      <>
        {variants.map((variant) => (
          <Text variant={variant} key={variant} display="block" {...args}>
            {variant}
          </Text>
        ))}
      </>
    );
  };

export const Variants = VariantsTemplate.bind({});
