import styled from '@emotion/styled';
import { Box, Card, Checkbox, Skeleton, Typography } from '@mui/material';

import { IMovie } from '@interfaces/movieInterface';

interface IProps {
  movies: IMovie[];
  isLoading: boolean;
}

export default function MoviesList({ movies, isLoading }: IProps) {
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
                <Checkbox color="success" checked={true}></Checkbox>
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
