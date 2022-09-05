import * as React from 'react';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';

export default function PublishPage() {
  const [publishFilter, setPublishFilter] = React.useState({});

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          // margin="normal"
          required
          fullWidth
          id="title"
          label="Título"
          name="title"
          autoFocus
          value={publishFilter.title || ''}
          onChange={e => setPublishFilter({ ...publishFilter, title: e.target.value })}
        />
      </Grid>

    </Grid>
  );
}

