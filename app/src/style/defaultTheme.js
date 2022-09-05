import { createTheme } from "@mui/material/styles";

export default createTheme({
  
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: 12,
            backgroundColor: 'rgba(0,0,0,0)',
          },
          '*:hover': {
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.8)',
            }
          }
        }

      }
    },
   
  },
  palette: {
    primary: {
      main: '#db4848'
    },
    secondary: {
      main: '#eeaaaa'
    }
  }
});