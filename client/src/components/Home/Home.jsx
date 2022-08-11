import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/actions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Cards from '../Cards/Cards.jsx'
import MainTitleAndButtons from '../MainTitleAndButtons/MainTitleAndButtons.jsx'
import NavBar from '../NavBar/NavBar.jsx'
function Home() {
  const dispatch = useDispatch();
  const highlightedMovie = useSelector(state => state.highlightedMovie[0])

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]);

  console.log(highlightedMovie)

  return (
    <Box sx={{ maxWidth: "100vw", mx: "-8px", my: "-8px", boxSizing: "border-box", }}>
      <Box sx={{
        minHeight: "100vh",
        backgroundColor: "red",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${highlightedMovie?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}>
        <Box sx={{ px: 10 }}>
          <Box sx={{ mb: 5 }}>
            < NavBar />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxHeight: "800px", }}>
            <MainTitleAndButtons movieTitle={highlightedMovie?.title} />
            <Cards />
          </Box>
        </Box>
      </Box>
    </Box >
  );
};

export default Home;