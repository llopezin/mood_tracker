interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  options: SelectOption[];
  selected?: SelectOption["value"];
}

export type { SelectProps, SelectOption };
