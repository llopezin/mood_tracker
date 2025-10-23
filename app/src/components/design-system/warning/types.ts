interface WarningProps {
  children: string;
  type: WarningType;
}

export enum WarningType {
  Error = "error",
  Friendly = "friendly",
}

export default WarningProps;
