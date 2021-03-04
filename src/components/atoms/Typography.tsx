import React from 'react';
import styled from 'styled-components';
import { space, color, layout, typography, LayoutProps, SpaceProps, ColorProps, TypographyProps, textAlign } from 'styled-system';

type TypographyPropsType = SpaceProps & ColorProps & LayoutProps & TypographyProps;
type Props = {
	children: React.ReactNode;
	as?: string;
	textAlign?: string;
	color?: string;
};

const TypographyStyled = styled.p<TypographyPropsType>`
  ${space}
  ${color}
	${layout}
	${typography}
	// text-align: left;
`;

const H4Styled = styled.h4<TypographyPropsType>`
  ${space}
  ${color}
	${layout}
	${typography}
	// text-align: left;
`;


const Typography: React.FC<Props> = (props) => {
	const { children, as, ...rest } = props;

	return (
		<>
			{(() => {
				switch (as) {
					case 'h1':
						return <h1 {...rest}>{children}</h1>
					case 'h2':
						return <h2 {...rest}>{children}</h2>
					case 'h3':
						return <h3 {...rest}>{children}</h3>
					case 'h4':
						return <H4Styled>{children}</H4Styled>
					case 'span':
						return <span {...rest}>{children}</span>
					default:
						return <p {...rest}>{children}</p>
				}
			})()}
		</>
	)
};

Typography.defaultProps = {
	as: 'p'
}

export default Typography;
