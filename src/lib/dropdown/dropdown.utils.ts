import { SelectChangeEvent } from '@mui/material/Select';

export const onSelectChange = <T>(
  event: SelectChangeEvent<string>,
  options: Readonly<T[]>,
  extractKey: (value: T) => string,
  onChange: (event: SelectChangeEvent<string>, value: T) => void,
) => {
  onChange(
    event,
    options.find(
      (selectedValue) =>
        extractKey(selectedValue).toString() === event.target.value,
    ) as T,
  );
};

export default {
  onSelectChange,
};
