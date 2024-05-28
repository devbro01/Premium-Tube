import { Box } from '@mui/material'
import { Main, Channel, VidioDetail, Search, Navbar } from './'
import { Route, Routes } from 'react-router'

const App = () => {
    return (
        <Box>
            <Navbar />
            <Box bgcolor={'#191919'} color={'#e3f2fd'}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/channel/:id" element={<Channel />} />
                    <Route path="/vidio/:id" element={<VidioDetail />} />
                    <Route path="/search/:id" element={<Search />} />
                </Routes>
            </Box>
        </Box>
    )
}

export default App
