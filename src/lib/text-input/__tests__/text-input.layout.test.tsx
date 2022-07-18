import { render } from '@testing-library/react';

import { TextInput } from '../text-input';

const dummyLabelText = 'Address (Line 1)';
const dummySecondaryLabel = 'Status: Not Provisioned';

describe('TextInput', () => {
  it('should render successfully', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <TextInput
        value=""
        label={dummyLabelText}
        secondaryLabel={dummySecondaryLabel}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('label should be in the component', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <TextInput
        value=""
        label={dummyLabelText}
        secondaryLabel={dummySecondaryLabel}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('secondaryLabel should be in the component', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <TextInput
        value=""
        label={dummyLabelText}
        secondaryLabel={dummySecondaryLabel}
        onChange={handleChange}
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should be disabled', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <TextInput
        value="123"
        label={dummyLabelText}
        secondaryLabel={dummySecondaryLabel}
        onChange={handleChange}
        disabled
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render with multiline', () => {
    const handleChange = jest.fn();
    const { container } = render(
      <TextInput
        value="123"
        label={dummyLabelText}
        secondaryLabel={dummySecondaryLabel}
        onChange={handleChange}
        multiline
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
