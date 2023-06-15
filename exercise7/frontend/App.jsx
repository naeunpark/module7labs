import { useSyncExternalStore } from 'react'
import { postsStore } from '../backend/api'
import Form from './Form'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
  
  const posts = useSyncExternalStore(postsStore.subscribe, postsStore.getSnapshot)
  
  return (
    <>
    
    <Container sx={{
          display: 'flex',justifyContent: 'flex-end' 
          }}>
      <Box sx={{ width: '100%', maxWidth:'1200px', mx: 'auto' }}>
        <Form></Form>
        <Grid container spacing={2}>
          {posts.map(post=>(
            <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
                <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {post.title}
                  </Typography>
                  <Typography variant="body2">
                  {post.body}
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
          ))}
        </Grid>
      </Box>
      </Container>
    </>
  )
}

export default App
