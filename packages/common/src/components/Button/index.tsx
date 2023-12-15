import { css } from '@emotion/react';
import { CustomButton } from './style';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isLoading?: boolean;
  width?: string;
  bgColor?: string;
  fontColor?: string;
  hoverBgColor?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static' | 'sticky';
  bottom?: string;
  title?: string;
  isError?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = '',
  isLoading = false,
  width,
  bgColor,
  fontColor,
  hoverBgColor,
  position,
  bottom,
  disabled,
  title,
  isError,
  ...attributes
}) => {
  return (
    <CustomButton
      css={css`
        width: ${width};
        :hover {
          background: ${hoverBgColor};
          color: white;
          cursor: pointer;
        }
        :disabled {
          background: ${isError && (bgColor || 'rgba(223, 69, 74, 0.20)')};
          border-color: ${isError && (bgColor || '#DF454A')};
          color: #df454a;
          cursor: default;
        }
      `}
      disabled={disabled || isError}
      {...attributes}
    >
      {title}
    </CustomButton>
  );
};

export default Button;
