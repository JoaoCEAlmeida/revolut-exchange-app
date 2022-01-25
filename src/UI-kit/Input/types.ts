export interface ComponentProps {
  error?: string;
  type?: 'number' | 'text';
  placeholder?: string;
  value?: string | number;
  onChange?: any;
  className?: string;
}
