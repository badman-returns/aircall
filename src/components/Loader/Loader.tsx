import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';
export default function Loader() {
   return (
      <Grid
         container
         display="flex"
         justifyContent="center"
         alignItems="center"
         minHeight="80vh">
         <CircularProgress color="success" />
      </Grid>
   );
}
