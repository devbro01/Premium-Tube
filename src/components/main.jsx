import { Vidios, Category } from './'
import { Box, Container, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { colors } from '../constants/colors'
import { ApiSerive } from '../service/api-service'

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [vidios, setVidios] = useState([])

  const selectCategoryHandler = (category) => setSelectedCategory(category)
  useEffect(() => {
    const getData = async () => {
      const data = await ApiSerive.fetching(`search?part=snippet&q=${selectedCategory}`)
      setVidios(data.items)
    }

    getData()
    // eslint-disable-next-line
  }, [selectedCategory])

  return (
    <Stack>
      <Category selectCategoryHandler={selectCategoryHandler} selectedCategory={selectedCategory} />
      <Box p={2} sx={{ height: '90vh' }}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{ color: colors.white }}>vidios</span>
          </Typography>
          <Vidios vidios={vidios} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main
