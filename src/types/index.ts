import { DefaultTheme } from "styled-components";

export declare type buttonKind = "primary" | "secondary";

export declare type buttonSize = "default" | "compact" | "large";

export type buttonProps = {
  kind?: buttonKind;
  size?: buttonSize;
  disabled?: boolean;
  isLoading?: boolean;
  isSelected?: boolean;
  shouldFitContainer?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
};

export type formControlProps = {
  label?: string;
  htmlFor?: string;
  caption?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  children?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  style?: React.CSSProperties;
};

export declare type inputSize = "default" | "compact" | "large";

export type inputProps = {
  inputSize?: inputSize;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
};

export declare type modalRole = "dialog" | "alertdialog";

export type modalProps = {
  isOpen?: boolean;
  mountNode?: HTMLElement;
  role?: modalRole;
  onClose?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export declare type notificationKind =
  | "info"
  | "positive"
  | "warning"
  | "negative";

export type notificationProps = {
  kind?: notificationKind;
  shouldFitContainer?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type spinnerProps = {
  color?: string;
  size?: string;
  style?: React.CSSProperties;
};

export type textareaProps = {
  inputSize?: inputSize;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  autoFocus?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
};

export type themeProviderProps = {
  theme?: DefaultTheme;
  children?: React.ReactNode;
};

export type typographyProps = {
  mt?: string;
  mb?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

export type iconProps = {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
};
