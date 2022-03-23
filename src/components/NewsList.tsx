import { Box, Button, Grid, Link, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useStyles: any = makeStyles((theme) => ({
  boxContainer: {
    background: '#fffaf2',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  newsTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  urlImage: {
    flex: 1,
    width: '100%',
    height: '250px',
    resizeMode: 'contain',
    objectFit: 'cover',
  },
}));

interface NewsProps {
  title: string;
  content: string;
  author: string;
  urlToImage: string;
  url: string;
}

export const NewsList: React.FC = () => {
  const styles = useStyles();

  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      console.log(res.data);
      setNews(res.data.articles);
    };

    fetchNews();
    return () => {};
  }, []);

  const NewsItem: React.FC<NewsProps> = ({
    title,
    content,
    author,
    urlToImage,
    url,
  }: NewsProps) => {
    return (
      <Grid item maxWidth='sm'>
        <Box className={styles.boxContainer}>
          <img
            src={urlToImage}
            alt={title}
            loading='lazy'
            className={styles.urlImage}
          />
          <Box px={3} pb={2} pt={1}>
            <Typography variant='h6' className={styles.newsTitle}>
              {title}
            </Typography>
            <Typography mt={1}>{content}</Typography>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='space-between'
            >
              <Typography mt={1} color='gray'>
                {author}
              </Typography>
              <Link
                target='_blank'
                href={url}
                rel='noopener noreferrer'
                underline='none'
                mt={2}
              >
                <Button size='small'>Read more</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Grid>
    );
  };

  return (
    <Grid
      container
      spacing={3}
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{
        mt: '2rem',
      }}
    >
      {news &&
        news?.map((prop: NewsProps) => (
          <NewsItem
            key={prop.title}
            author={prop.author}
            content={prop.content}
            title={prop.title}
            urlToImage={prop.urlToImage}
            url={prop.url}
          />
        ))}
    </Grid>
  );
};
