import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <Box>
            <Link to={'/channel'}>
                <Button>Channel</Button>
            </Link>
        </Box>
    )
}

export default Main