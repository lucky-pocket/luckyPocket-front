import { CustomButton } from './style';

interface ButtonProps {
  isLoading?: boolean;
  width?: string;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  bottom?: string;
}

const Button: React.FC<ButtonProps> = ({
  isLoading = false,
  width,
  bgColor,
  fontColor,
  hoverBgColor,
  position,
  bottom,
  ...attributes
}) => {
  return <CustomButton></CustomButton>;
};

export default Button;
