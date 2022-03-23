import { Box, Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ShareIcon from '@mui/icons-material/Share';

const useStyles: any = makeStyles((theme) => ({
  boxContainer: {
    background: '#fffaf2',
    padding: '2rem',
  },
  newsTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
}));

export const NewsItem: React.FC = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Grid item maxWidth='sm'>
      <Box className={styles.boxContainer}>
        <Box justifyContent='space-between' alignItems='center' display='flex'>
          <Typography variant='h6' className={styles.newsTitle}>
            News #1
          </Typography>
          <Button size='small'>
            <ShareIcon fontSize='small' />
          </Button>
        </Box>
        <Typography mt={1}>
          +1 RT The Work of Art in the Age of Mechanical Reproduction Gutenberg
          +1 RT The Work of Art in the Age of Mechanical Reproduction Gutenberg
          +1 RT The Work of Art in the Age of Mechanical Reproduction Gutenberg
        </Typography>
      </Box>
    </Grid>
  );
};
