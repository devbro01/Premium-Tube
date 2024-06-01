import { CheckCircle } from '@mui/icons-material'
import { CardActionArea, Typography, CardMedia, Stack, CardContent, Card } from '@mui/material'
import moment from 'moment'

const VideoCard = ({ video }) => {
  return (
    <Card
      key={video?.id?.videoId}
      sx={{
        width: { xs: '100%', sm: '340px', md: '300px' },
        borderRadius: 2,
        boxShadow: 'none',
      }}
    >
      <CardActionArea>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: { xs: '100%', sm: '340px', md: '300px' },
            height: { xs: '170px', sm: '190px', md: '168px' },
          }}
        />

        <CardContent sx={{ background: '#494949', color: '#fff', height: '220px', position: 'relative' }}>
          <Typography variant="subtitle1" fontWeight={'bold'}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: '0.6' }}>
            {video?.snippet?.description.slice(0, 70)}
          </Typography>

          <Stack position={'absolute'} bottom={'5px'} alignItems={'start'}>
            <Typography sx={{ opacity: '0.4' }}>{moment(video?.snippet?.publishedAt).fromNow()}</Typography>
            <Typography variant={'subtitle2'} color={'gray'}>
              {video?.snippet?.channelTitle.slice(0, 25)}
              <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default VideoCard
