export interface ComponentProps {
  text: string;
  type?: 'submit';
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  disabled?: any;
  className?: string;
}
