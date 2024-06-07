import { CheckCircle } from '@mui/icons-material'
import { CardActionArea, Typography, CardMedia, Stack, CardContent, Card } from '@mui/material'
import moment from 'moment'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  return (
    <Card
      key={video?.id?.videoId}
      sx={{
        bgcolor: '#1e1e1e',
        width: { xs: '100%', sm: '340px', md: '310px' },
        borderRadius: 2,
        boxShadow: 3,
        '&:hover': {
          transform: 'scale(1.02)',
          transition: 'transform 0.2s',
        },
      }}
    >
      <CardActionArea>
        <Link to={`/vidio/${video.id.videoId}`} style={{ textDecoration: 'none' }}>
          <CardMedia
            component="img"
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snippet?.title}
            sx={{
              width: '100%',
              height: { xs: '170px', sm: '190px', md: '168px' },
              objectFit: 'cover',
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          />
          <CardContent
            sx={{
              background: '#1e1e1e',
              color: '#fff',
              height: '220px',
              position: 'relative',
              padding: '16px',
            }}
          >
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.8 }} gutterBottom>
              {video?.snippet?.description.slice(0, 70)}
            </Typography>

            <Typography
              variant="caption"
              sx={{ opacity: 0.6, position: 'absolute', bottom: '4px', left: '16px' }}
            >
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
              <Stack direction="row" alignItems="center" spacing={'2px'} position="absolute" bottom="20px">
                <Typography variant="subtitle2" color="gray">
                  {video?.snippet?.channelTitle.slice(0, 25)}
                </Typography>
                <CheckCircle sx={{ fontSize: 12, color: 'gray' }} />
              </Stack>
            </Link>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  )
}

export default VideoCard
