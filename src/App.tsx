import './styles/App.css';
import { CssBaseline, Typography, AppBar, Toolbar } from '@mui/material';
import { Search } from './components/Search';
import { NewsList } from './components/NewsList';

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
          <NewsList />
        </div>
      </main>
      <footer className='footer'>
        Copyright&copy;2022 Tech News Alert
      </footer>
    </>
  );
};

export default App;
