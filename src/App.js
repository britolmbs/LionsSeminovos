import { AppBar, Box, Button, Container, List, ListItem, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";

function App(){
 const [pesquisa, setpesquisa] = React.useState('');
 const [filtroItems, setFiltroItems] = React.useState([]);

 const items = ['Carro 1', 'Carro 2', 'Carro 3', 'Carro 4'];

 const indetiPesquisa = () => {
  const results = items.filter(item =>
      item.toLowerCase().includes(pesquisa.toLowerCase())

  );
  setFiltroItems(results);
  alert(`Você Procurou por: ${pesquisa}`);
 };
 return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>Lions Seminovos
          </Typography>
          <Button color="inherit">Início</Button>
            <Button color="inherit">Categoria</Button>
            <Button color="inherit">Contato</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Box sx={{ my: 4, textAlign: 'center'}}>
          <Typography variant="h4" component="h1" gutterBottom>
            Fature muito com a melhor concessionária de seminovos do Brasil
          </Typography>
          <Button variant="contained" color="primary" href="https://www.lionsseminovos.com.br">
          Clica Aqui!
          </Button>
        </Box>
        <Box sx={{ my: 4, textAlign: 'center'}}>
          <Typography variant="h5" component="h2" gutterBottom>
            Conheça nossas categorias
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button variant="outlined">Bronze</Button>
            <Button variant="outlined">Prata</Button>
            <Button variant="outlined">Ouro</Button>
          </Box>
        </Box>

        <Box sx={{ my: 4, textAlign: 'center'}}>
          <Typography variant="h5" component="h2" gutterBottom>
            Buscar
          </Typography>
          <TextField
          id="procurar"
          label="Procure por Uma palavra-Chave"
          variant="outlined"
          value={pesquisa}
          onChange={(e) => setpesquisa(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={indetiPesquisa} sx={{ml: 2}}>
            Buscar
          </Button>
        </Box>

        <Box sx={{ my: 4}}>
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
 );
}
export default App;