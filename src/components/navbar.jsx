import { Stack, Box } from '@mui/material'
import { colors } from '../constants/colors'
import { Link } from 'react-router-dom'
import { SearchBar } from './'
import { logo } from '../constants'

const Navbar = () => {
  return (
    <>
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={2}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 9999,
          bgcolor: colors.primary,
          height: '10vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '28px',
          }}
        >
          <i className="fa-solid fa-bars" style={{ fontSize: '24px', color: 'grey' }} />
          <Link to={'/'}>
            <img src={logo} alt="logo" style={{ marginTop: 8 }} />
          </Link>
        </Box>
        <SearchBar className="search-box"/>
        <Box />
      </Stack>
    </>
  )
}

export default Navbar
