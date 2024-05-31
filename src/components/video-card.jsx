import { CheckCircle } from '@mui/icons-material'
import { Card, CardActionArea, CardContent, Typography, CardMedia, colors, Box } from '@mui/material'
import moment from 'moment'

const VideoCard = ({ video }) => {
  console.log(video)
  return (
    <Card sx={{ maxWidth: 350, height: 370, bgcolor: '#393939' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="195"
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.id?.videoId}
        />
        <CardContent>
          <Typography fontSize={17} color={colors.grey[100]} component="div">
            {`${video?.snippet?.title.slice(0, 50)}...`}
          </Typography>
          <Typography my={2} color={colors.grey[500]}>
            {`${video?.snippet?.description.slice(0, 75)}...`}
          </Typography>
          <Box
            color={colors.blue[500]}
            display={'flex'}
            justifyContent={'space-between'}
            flexDirection={'row'}
            fontSize={15}
          >
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              {`${video?.snippet?.channelTitle.slice(0, 20)}`}
              <CheckCircle sx={{ marginLeft: '5px' }} />
            </Typography>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default VideoCard
