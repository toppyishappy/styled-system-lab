import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { space, color, layout, LayoutProps, SpaceProps, ColorProps, border, BorderProps } from 'styled-system'

interface Props {
    variant?: string;
    colorTheme?: string;
    onClick?: () => void;
}

type ButtonType = Props & SpaceProps & ColorProps & LayoutProps & React.ReactNode & BorderProps

interface VaraintType {
    bg: string;
}

const ButtonStyled = styled.a<ButtonType>`
    ${space}
    ${color}
    ${layout}
    ${border}
    border: 1px solid;
    cursor: pointer;
    padding: 8px;
    &:hover {
        background: yellow;
    }
    border-color: ${({ colorTheme }) => colorTheme};
`;


const Button: React.FC<Props> = (props) => {
    const getVariants = (variant?: string): VaraintType => {
        switch (variant) {
            case 'primary':
                return {
                    bg: 'primary',
                }
            default:
                return {
                    bg: 'yellow',
                }
        }
    }
    const { children, variant, ...rest } = props;
    return (
        <ButtonStyled {...getVariants(variant)} border={1} {...rest}> { children}</ButtonStyled >

    );
};
Button.defaultProps = {
    variant: "primary",
};

export default Button;
