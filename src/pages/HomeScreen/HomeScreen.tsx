import { useMemo } from 'react';
import * as MUI from '@mui/material';

import { useAppSelector } from '@hooks/useAppSelector';

import { selectMovies } from '@store/movies/moviesSelectors';

import MovieList from './MoviesList';

export default function HomeScreen() {
  const { list, isLoading, error } = useAppSelector(selectMovies);

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
    </MUI.Box>
  );
}
