import { Box, Stack } from '@mui/material'
import { ChannelCard, Loader, VideoCard } from './'

const Vidios = ({ vidios }) => {
  if (!vidios.length) return <Loader />

  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'start'}
      alignItems={'center'}
      gap={3}
    >
      {vidios?.map((item, idx) => (
        <Box key={idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Vidios
