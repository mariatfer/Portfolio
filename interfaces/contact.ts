import type { FormData } from "@/interfaces/forms";
import type UiFormInputField from "@/components/ui/form/InputField.vue";
import type UiFormTextareaField from "@/components/ui/form/TextareaField.vue";

export interface InfoContact {
  title: string;
  description: Array<{ id: number; text: string }>;
  email: {
    icon: string;
    text: string;
  };
}

export type ContactFormComponent =
  | typeof UiFormInputField
  | typeof UiFormTextareaField;

export interface FormField {
  id: string;
  component: ContactFormComponent;
  vModel: keyof FormData;
  label: string;
  placeholder: string;
  ariaLabel: string;
  twoColumns: string | boolean;
}

export interface ContactForm {
  title: string;
  fields: FormField[];
  button: string;
}
