import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';

export default function Index() {
  const [posts, setPosts] = useState<string[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8000/blog/api');
      const data = await response.json();
      const posts = data.map((post: any) => post.title);
      setPosts(posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Knight Portfolio
        </Typography>
        <Box sx={{ my: 2 }}>
          {posts.map((post: string) => (
            <p key={post}>{post}</p>
          ))}
        </Box>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
