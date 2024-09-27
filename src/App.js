import React from "react";
import { AppBar, Box, Button, Container, List, ListItem, TextField, Toolbar, Typography, IconButton } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#a60f14',
    },
    secondary: {
      main: '#353238',
    },
  },
});

function App() {
  const [pesquisa, setPesquisa] = React.useState('');
  const [filtroItems, setFiltroItems] = React.useState([]);

  const items = ['Carro 1', 'Carro 2', 'Carro 3', 'Carro 4'];

  const handlePesquisa = () => {
    const results = items.filter(item =>
      item.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setFiltroItems(results);
    alert(`Você Procurou por: ${pesquisa}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Lions Seminovos
            </Typography>
            <TextField
              id="procurar"
              label="Procure por uma palavra-chave"
              variant="outlined"
              size="small"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
              sx={{ bgcolor: 'white', borderRadius: 1, mr: 2 }}
            />
            <Button variant="contained" color="secondary" onClick={handlePesquisa}>
              Buscar
            </Button>
            <IconButton color="inherit" href="https://www.facebook.com/lionsseminovos" target="_blank">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com/company/lions-seminovos/mycompany/?viewAsMember=true" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com/lionsseminovos" target="_blank">
              <Instagram />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container>
          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Fature muito com a melhor concessionária de seminovos do Brasil
            </Typography>
            <Button variant="contained" color="primary" href="https://www.lionsseminovos.com.br">
              Clique Aqui!
            </Button>
          </Box>

          <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Conheça nossas categorias
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button variant="outlined">Bronze</Button>
              <Button variant="outlined">Prata</Button>
              <Button variant="outlined">Ouro</Button>
            </Box>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Resultado da Busca:
            </Typography>
            <List>
              {filtroItems.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </List>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
