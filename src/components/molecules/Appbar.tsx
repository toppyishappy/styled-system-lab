import Box from '../atoms/Box';
import Typography from '../atoms/Typography';
import Container from '../atoms/Container';


const Appbar: React.FC<React.ReactNode> = () => {

    return (
			<Box bg='primary' height='80px'>
				<Container>
					<Box display='flex' justifyContent='space-between' height='inherit' alignItems='center'>
							<Typography as='h1'>Desty</Typography>
							<Typography>eee</Typography>
				</Box>
				</Container>
			</Box>
    )
}

export default Appbar;