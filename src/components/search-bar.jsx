import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { colors } from '../constants/colors'

const SearchBar = () => {
  return (
    <Paper
      component={'form'}
      sx={{
        border: `2px solid ${colors.grey}`,
        pl: 2,
        bgcolor: colors.secondary,
        boxShadow: 'none',
      }}
    >
      <input type="text" placeholder="Serach" className="search-bar" />
      <IconButton>
        <Search sx={{ color: '#909090' }} />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
