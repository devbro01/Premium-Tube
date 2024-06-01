import { Box, Stack } from '@mui/material'
import { ChannelCard, VideoCard } from './'

const Vidios = ({ vidios }) => {
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
    >
      {vidios.map((item) => (
        <Box key={item.id.videoId}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Vidios
