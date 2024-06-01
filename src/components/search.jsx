import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ApiSerive } from '../service/api-service'
import { Box, Container, Typography } from '@mui/material'
import { Vidios } from './'

const Search = () => {
  const [vidios, setVidios] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiSerive.fetching(`search?part=snippet&q=${id}`)
        console.log(data)
        setVidios(data.items)
      } catch (error) {
        console.log(error)
      }
    }

    getData()
  }, [id])

  return (
    <Box p={2} sx={{ height: '90vh' }}>
      <Container maxWidth="90%">
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Search results for {id} videos
        </Typography>
        <Vidios vidios={vidios} />
      </Container>
    </Box>
  )
}

export default Search
