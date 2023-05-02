// import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { IMovie } from '@interfaces/movieInterface';

import { mockMovies } from '@__mocks__/movies';

interface MoviesState {
  isLoading: boolean;
  list: IMovie[];
  error: boolean;
  watched: string[];
}

const initialState: MoviesState = {
  isLoading: false,
  list: mockMovies,
  error: false,
  watched: [],
};

export const moviesSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    // todo: add reducers
  },
});

// todo: uncomment next line
// export const {} = moviesSlice.actions;

export default moviesSlice.reducer;
