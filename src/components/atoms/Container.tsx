import React from 'react';
import styled from 'styled-components';
import { space, color, layout, LayoutProps, SpaceProps, ColorProps, height } from 'styled-system';

type ContainerPropsType = SpaceProps & ColorProps & LayoutProps;
type Props = {
	size?: string;
	height?: string;
};

type ContainerSizeProps = {
	mx: number;
	height?: string;
}

const ContainerStyled = styled.div<ContainerPropsType>`
  ${space}
  ${color}
	${layout}
	text-align: left;
	
`;

const getContainerSize = (size?: string): ContainerSizeProps => {
	switch (size) {
		case 'sm':
			return {
				mx: 2
			}
		case 'md':
			return {
				mx: 4,
			}
		case 'lg':
			return {
				mx: 6,
				height: '100vh'
			}
		default: 
			return {
				mx: 4
			}
	}

}

const Container: React.FC<Props> = (props) => {
	const { children, size } = props;
	return <ContainerStyled {...getContainerSize(size)}>{children}</ContainerStyled>;
};

Container.defaultProps = {
	size: 'md'
}

export default Container;
