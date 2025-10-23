import { SelectProps } from "./types";

export const Select = ({
  label,
  name,
  options,
  selected,
  ...rest
}: SelectProps) => {
  console.log("selected: ", selected);
  return (
    <label>
      {label}
      <select name={name} defaultValue={selected} {...rest}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
