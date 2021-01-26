export const KIND = {
  primary: "primary",
  secondary: "secondary",
} as const;
export const SIZE = {
  default: "default",
  compact: "compact",
  large: "large",
} as const;

export declare type kind = "primary" | "secondary";
export declare type size = "default" | "compact" | "large";
