import prompt from "react-native-prompt-android";

export interface PromptAdapterProps {
  title: string;
  message?: string;
  buttons: PromptButton[];
  options: PromptOptions;
}

interface PromptButton {
  text: string;
  onPress?: (value?: string) => void;
  style?: 'default' | 'cancel' | 'destructive';
}

interface PromptOptions {
  type: 'default' | 'plain-text' | 'secure-text';
  cancelable: boolean;
  defaultValue: string;
  placeholder: string;
}

export const promptAdapter = ({ title, message, buttons, options }: PromptAdapterProps) => {
  prompt(
    title,
    message,
    buttons,
    options
  );
} 