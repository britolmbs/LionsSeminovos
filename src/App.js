import React from "react";
import {  AppBar,  Box, Button, Container, TextField, Toolbar, Typography, IconButton, Grid,  Card, CardMedia, CardContent, } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import bronze from "./img/bronze.png";
import prata from "./img/prata.png";
import ouro from "./img/ouro.png";
import feirao from "./img/feirao.jpeg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a60f14",
    },
    secondary: {
      main: "#353238",
    },
  },
});

function App() {
  const [pesquisa, setPesquisa] = React.useState("");
  const [filtroItems, setFiltroItems] = React.useState([]);

  const items = React.useMemo(() => [
    {
      nome: "Carro Bronze",
      imagem: bronze,
      descricao: "Descrição do carro bronze",
    },
    {
      nome: "Carro Prata",
      imagem: prata,
      descricao: "Descrição do carro prata",
    },
    {
      nome: "Carro Ouro",
      imagem: ouro,
      descricao: "Descrição do carro ouro",
    },
  ], []);

  React.useEffect(() => {
    setFiltroItems(items);
  }, [items]);

  const handlePesquisa = () => {
    const results = items.filter((item) =>
      item.nome.toLowerCase().includes(pesquisa.toLowerCase())
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
              sx={{ bgcolor: "white", borderRadius: 1, mr: 2 }}
            />
            <Button variant="contained" color="secondary" onClick={handlePesquisa}>
              Buscar
            </Button>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/lionsseminovos"
              target="_blank"
            >
              <Facebook />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/company/lions-seminovos/mycompany/?viewAsMember=true"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/lionsseminovos"
              target="_blank"
            >
              <Instagram />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container>
          <Box sx={{ my: 4, textAlign: "center" }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Fature muito com a melhor concessionária de seminovos do Brasil
            </Typography>
            <a href="https://www.lionsseminovos.com.br" target="_blank" rel="noopener noreferrer">
              <img
                src={feirao}
                alt="Feirão"
                style={{ width: "100%", maxWidth: "1500px", height: "auto", cursor: "pointer" }}
              />
            </a>
          </Box>

          <Box sx={{ my: 4, textAlign: "center" }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Conheça nossas categorias
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <img src={bronze} alt="Bronze" style={{ width: "200px", height: "200px" }} />
              <img src={prata} alt="Prata" style={{ width: "200px", height: "200px" }} />
              <img src={ouro} alt="Ouro" style={{ width: "200px", height: "200px" }} />
            </Box>
            <Button
              variant="contained"
              color="secondary"
              href="https://www.lionsseminovos.com.br"
              sx={{ mt: 4, px: 5, py: 2 }}
            >
              Visite nosso site
            </Button>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              Carros Disponíveis:
            </Typography>
            <Grid container spacing={3}>
              {filtroItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.imagem}
                      alt={item.nome}
                    />
                    <CardContent>
                      <Typography variant="h6">{item.nome}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {item.descricao}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

        <Box
          sx={{
            bgcolor: "secondary.main",
            color: "white",
            textAlign: "center",
            p: 2,
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Lions Seminovos. Todos os direitos reservados.
          </Typography>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/lionsseminovos"
            target="_blank"
          >
            <Instagram />
          </IconButton>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
