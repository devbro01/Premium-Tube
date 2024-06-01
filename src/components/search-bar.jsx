import { Search } from '@mui/icons-material'
import { IconButton, Paper } from '@mui/material'
import { colors } from '../constants/colors'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const formHandler = (e) => {
    e.preventDefault()
    console.log(value)
    if (value) {
      navigate(`/search/${value}`)
      setValue('')
    }
  }

  return (
    <Paper
      component={'form'}
      onSubmit={formHandler}
      sx={{
        border: `2px solid ${colors.grey}`,
        pl: 2,
        bgcolor: colors.secondary,
        boxShadow: 'none',
      }}
    >
      <input
        type="text"
        placeholder="Serach"
        className="search-bar"
        onChange={(e) => {
          setValue(e.target.value)
        }}
        value={value}
      />
      <IconButton type="submit">
        <Search sx={{ color: '#909090' }} />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
