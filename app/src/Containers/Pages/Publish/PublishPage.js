import * as React from 'react';
import Grid from '@mui/material/Grid';
import {
  Badge,
  Button,
  FormControl,
  Hidden,
  Icon,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  Typography
} from '@mui/material';


function OrderBy() {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
      <Select
        value={10}
        onChange={() => { }}
        // displayEmpty
        size='small'
        label='Ordenar por'

      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}


const Card = styled(Paper)(({ theme }) => ({
  padding: 0,
  overflow: 'hidden',
  transition: 'color ease 0.3s',
  '&:hover': {
    boxShadow: '0 3px 6px 3px lightGray',
    // cursor: 'pointer'

  },
  '& .showOnHover': {
    display: 'none',
  },
  '&:hover .showOnHover': {
    display: 'flex',
    // position: 'absolute',
  }
}));

export default function PublishPage() {
  // const [publishFilter, setPublishFilter] = React.useState({});

  return (
    <Grid container spacing={3}>

      <Hidden mdDown>
        <Grid item xs={3}>
          <Grid container spacing={1}>
            <Grid item xs={12}>

              <OrderBy />
            </Grid>

            <Grid item xs={12}>
              filtros
            </Grid>
          </Grid>

        </Grid>
      </Hidden>

      <Grid item sm={12} md={9}>
        <Grid container spacing={2} justifyContent={'center'}>
          <Hidden mdUp>
            <Grid item xs={12}>
              {/* <TextField
          size='small'
          // error
          // helperText='testte teste'
          // required
          fullWidth
          id="generic"
          label="Buscar"
          name="generic"
          autoFocus
          // InputProps={{ endAdornment: (<IconButton type='submit'><Icon>search</Icon></IconButton>)}}
          value={publishFilter.generic || ''}
          onChange={e => setPublishFilter({ ...publishFilter, generic: e.target.value })}
        />
        <IconButton type='submit' style={{marginLeft: 5}}><Icon>search</Icon></IconButton> */}

              <Grid container justifyContent={'flex-end'}>
                <Grid item xs={6}>

                  <OrderBy />
                </Grid>
                <Grid item>
                  <Button
                    variant='outlined'
                    // size='small''
                    style={{ textTransform: 'none', marginLeft: 5, height: 40 }}
                  >
                    Filtros <Badge badgeContent={4} color='secondary' style={{ marginLeft: 15, marginRight: 8 }} />
                  </Button>
                </Grid>

              </Grid>

            </Grid>
          </Hidden>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((m, i) => {
            return (
              <Grid item key={i} sm={6} md={4} lg={4}>
                <Card
                  elevation={1}
                  // onClick={() => { alert('cliquei') }}
                >
                  <Grid container >
                    <Grid item xs={12}>

                      <img src={'https://http2.mlstatic.com/D_NQ_NP_846014-MLB51004035955_082022-W.webps'} style={{ width: '100%' }} />
                    </Grid>

                    <Grid item style={{ padding: 20 }}>
                      <p style={{ fontSize: 23, margin: 0, fontWeight: 500 }}>
                        R$ 1.350,00
                      </p>

                      <p style={{ fontSize: 11, margin: 0 }}>25 Vendas | 52 disponíveis</p>
                    </Grid>

                    <Grid item >

                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('aiaia')
                        }}
                        size='small'
                        className='showOnHover'


                      >
                        <Icon>edit</Icon>
                      </IconButton>
                      </Grid>
                      <Grid item>
                      <IconButton 
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('aiaia')
                        }}
                        size='small'
                        className='showOnHover'

                      >
                        <Icon>delete</Icon>
                      </IconButton>
                    </Grid>

                  </Grid>

                </Card>
              </Grid>

            )
          })}
        </Grid>
      </Grid>

    </Grid >
  );
}

