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
  styled
} from '@mui/material';
import Carousel from 'nuka-carousel';

import meliLogo from './../../../images/meli.png';
import biigLogo from './../../../images/biigLogo.png';
import ButtonDefault from '../../Components/Form/ButtonDefault';


function OrderBy() {
  return (
    <ButtonDefault
      endIcon={<Icon >swap_vert</Icon>}
      title='Mais Vendidos Primeiro'
    />
    // <FormControl fullWidth>
    //   <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
    //   <Select
    //     value={10}
    //     onChange={() => { }}
    //     // displayEmpty
    //     size='small'
    //     label='Ordenar por'

    //   >
    //     <MenuItem value={10}>Ten</MenuItem>
    //     <MenuItem value={20}>Twenty</MenuItem>
    //     <MenuItem value={30}>Thirty</MenuItem>
    //   </Select>
    // </FormControl>
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

              <Grid container justifyContent={'flex-end'} spacing={1}>
                <Grid item >

                  <OrderBy />
                </Grid>
                <Grid item>
                  <ButtonDefault
                    variant='outlined'
                    title='Filtros'
                    endIcon={
                      <Badge
                        badgeContent={4}
                        color='secondary'
                        style={{ marginLeft: 10, marginRight: 8 }}
                      />
                    }
                  />
                </Grid>

              </Grid>

            </Grid>
          </Hidden>

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((m, i) => {
            return (
              <Grid item key={i} xs={6} md={4} lg={4}>
                <Card
                  elevation={1}
                // onClick={() => { alert('cliquei') }}
                >
                  <Grid container >
                    <Grid item xs={12}>
                      <Carousel
                        defaultControlsConfig={{ pagingDotsClassName: 'showOnHover' }}
                        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                          <IconButton
                            onClick={previousSlide}
                            disabled={previousDisabled}
                            className='showOnHover'
                            size='small'
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: 5}}
                          >
                            <Icon>chevron_left</Icon>
                          </IconButton>
                        )}
                        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                          <IconButton
                            onClick={nextSlide}
                            disabled={nextDisabled}
                            className='showOnHover'
                            style={{backgroundColor: 'rgba(255, 255, 255, 0.2)', marginRight: 5}}
                            size='small'
                          >
                            <Icon>chevron_right</Icon>
                          </IconButton>
                        )}

                      >
                        <img loading="lazy" src={'https://http2.mlstatic.com/D_NQ_NP_846014-MLB51004035955_082022-W.webps'} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <img loading="lazy" src={'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2022/07/mobi-like-0001-e1657719893127.jpg'} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                        <img loading="lazy" src={'https://s2.glbimg.com/JVJLdKWQSMJLYLv2zjMa47mnqb4=/0x0:2048x1366/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/Z/V/GuFjgdRA6onQKmmjuH9g/kwid-intense-04.jpg'} style={{ objectFit: 'cover', height: '100%', width: '100%' }} />
                      </Carousel>

                    </Grid>

                    <Grid item xs={12} style={{ padding: 20 }}>
                      <Grid container>

                        <Grid item xs={12}>
                          <p style={{ fontSize: 11, margin: 0 }}>#FIAT000001</p>
                          <p style={{ fontSize: 23, margin: 0, fontWeight: 500 }}>
                            R$ 1.350,00
                          </p>

                          <p style={{ fontSize: 11, margin: 0 }}>25 Vendas | 52 disponíveis</p>
                        </Grid>

                        <Grid item >
                          <img src={biigLogo} disabled style={{ height: 19, marginRight: 15, marginTop: 8 }} />
                        </Grid>

                        <Grid item >
                          <img src={meliLogo} disabled style={{ height: 17, marginRight: 10, marginTop: 9, opacity: 0.2 }} />
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

