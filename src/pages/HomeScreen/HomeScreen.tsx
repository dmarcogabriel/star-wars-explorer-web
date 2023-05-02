import { useEffect, useMemo } from 'react';
import * as MUI from '@mui/material';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { selectMovies } from '@store/movies/moviesSelectors';
import { getMovies } from '@store/movies/moviesSlice';

import MovieList from './MoviesList';

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const { list, isLoading, error } = useAppSelector(selectMovies);

  const handleReload = () => {
    dispatch(getMovies());
  };

  const sortedList = useMemo(() => {
    return [...list].sort((a, b) => a.episode_id - b.episode_id);
  }, [list]);

  return (
    <MUI.Box sx={{ height: '100vh', backgroundColor: 'background.default' }}>
      <MUI.AppBar component="nav">
        <MUI.Toolbar>
          <MUI.Typography>Star Wars Explorer</MUI.Typography>
        </MUI.Toolbar>
      </MUI.AppBar>
      <MUI.Toolbar />
      <MUI.Container maxWidth="sm">
        <MUI.Card
          sx={{
            padding: 1,
          }}
        >
          <MUI.Typography variant="h2" color="primary">
            Watch in the right order!
          </MUI.Typography>
          <MovieList movies={sortedList} isLoading={isLoading} />
        </MUI.Card>
      </MUI.Container>
      <MUI.Snackbar
        open={error}
        autoHideDuration={5000}
        onClose={handleReload}
        message="Something went wrong!"
      >
        <MUI.Alert onClose={handleReload} severity="error" variant="filled">
          This is a success message!
        </MUI.Alert>
      </MUI.Snackbar>
    </MUI.Box>
  );
}
