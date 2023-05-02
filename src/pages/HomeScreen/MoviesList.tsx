import { useCallback } from 'react';
import styled from '@emotion/styled';
import { Box, Card, Checkbox, Skeleton, Typography } from '@mui/material';

import { useAppDispatch } from '@hooks/useAppDispatch';
import { useAppSelector } from '@hooks/useAppSelector';

import { IMovie } from '@interfaces/movieInterface';

import { selectWatched } from '@store/movies/moviesSelectors';
import { setWatchedMovie } from '@store/movies/moviesSlice';

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
}

export default function MoviesList({ movies, isLoading }: IProps) {
  const dispatch = useAppDispatch();
  const watched = useAppSelector(selectWatched);

  const handleCheckMovie = (movie: IMovie) => {
    dispatch(setWatchedMovie({ movieUrl: movie.url }));
  };

  const getWatched = useCallback(
    (movie: IMovie) => {
      return watched.some(url => url === movie.url);
    },
    [watched],
  );

  return (
    <Box sx={{ marginTop: 2 }}>
      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <Skeleton
            key={String(i + 1)}
            variant="rectangular"
            width="100%"
            height="178px"
            sx={{ my: 2 }}
          />
        ))}
      {!isLoading &&
        movies.map(movie => (
          <Card key={movie.url} sx={{ p: 1, my: 2 }}>
            <Typography variant="subtitle1">{`Episode #${movie.episode_id}`}</Typography>
            <Typography variant="subtitle2">Title</Typography>
            <Typography variant="h3">{movie.title}</Typography>
            <Row
              sx={{
                mt: 1,
              }}
            >
              <Typography variant="subtitle1">{`Released at ${
                movie.release_date.split('-')[0]
              }`}</Typography>
              <Row>
                <Typography variant="subtitle1">Watched</Typography>
                <Checkbox
                  color="success"
                  checked={getWatched(movie)}
                  onClick={() => handleCheckMovie(movie)}
                />
              </Row>
            </Row>
          </Card>
        ))}
    </Box>
  );
}

const Row = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
