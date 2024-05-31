import { Box, Stack } from '@mui/material'
import { VideoCard } from './'

const Vidios = ({ vidios }) => {
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'start'}
      gap={3}
    >
      {vidios.map((item) => (
        <Box key={item.id.videoId}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  )
}

export default Vidios
