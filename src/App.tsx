import './styles/App.css';
import { CssBaseline, Typography, Grid, AppBar, Toolbar } from '@mui/material';
import { NewsItem } from './components/NewsItem';
import { Search } from './components/Search';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant='h6'>Latest Tech News</Typography>
          <Search />
        </Toolbar>
      </AppBar>
      <main>
        <div className='container'>
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
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </Grid>
        </div>
      </main>
    </>
  );
};

export default App;
