import React from "react";
import {  AppBar,  Box, Button, Container, TextField, Toolbar, Typography, IconButton, Grid,  Card, CardMedia, CardContent, } from "@mui/material";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import bronze from "./img/bronze.png";
import prata from "./img/prata.png";
import ouro from "./img/ouro.png";
import feirao from "./img/feirao.jpeg";
import carro from "./img/carro1.jpg";
import carro2 from "./img/carro2.jpg";
import carro3 from "./img/carro3.jpg";
import carro4 from "./img/carro4.jpg";
import carro5 from "./img/carro5.jpg";
import carro6 from "./img/carro6.jpg";


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
      nome: "Nissan Kicks",
      imagem: carro,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elementum interdum erat gravida maximus. Morbi eu interdum lacus. Praesent ac felis eget justo aliquet elementum sit amet id leo. Mauris aliquet arcu id diam gravida, non sagittis leo vulputate. Phasellus condimentum metus quis nisl feugiat, ut tristique ipsum facilisis. Ut vel urna justo. Nam tellus nunc, pharetra eget sapien eu, placerat pellentesque leo. Praesent vel interdum tellus, quis commodo leo. Curabitur ornare velit urna, sed.",
    },
    {
      nome: "Nissan Sentra",
      imagem: carro2,
      descricao: "Integer faucibus quis enim sed consectetur. Mauris cursus lectus justo, eget consectetur dui bibendum sed. Etiam id neque massa. Nulla facilisi. Ut ullamcorper, eros ac efficitur rutrum, ipsum enim tincidunt ipsum, a volutpat justo purus nec lectus. Morbi gravida vitae metus at auctor. Proin consectetur mollis dolor, in hendrerit lorem eleifend vel. Ut est ante, lobortis vitae lorem sed, vestibulum facilisis mi. Morbi sodales faucibus libero, a molestie ante gravida ac. Proin sit amet diam.",
    },
    {
      nome: "Volkswagen Fox",
      imagem: carro3,
      descricao: "Vivamus vitae congue justo. Praesent hendrerit finibus lorem quis lacinia. Aliquam sagittis orci at ex condimentum, nec malesuada orci congue. Maecenas auctor in est ac tincidunt. Vestibulum vel turpis auctor, finibus sem ut, maximus enim. Vestibulum laoreet malesuada lectus, ac venenatis felis. Cras a magna eu justo cursus rutrum et tincidunt sem. Nam facilisis, ante eget dapibus gravida, magna nisl eleifend quam, in lacinia sem felis commodo tellus. Nulla pretium urna justo, non sagittis est.",
    },
    {
      nome: "Volkswagen Saveiro",
      imagem: carro4,
      descricao: "Proin volutpat lectus in turpis tempus, et euismod elit laoreet. In non convallis purus, ut suscipit leo. Ut in sollicitudin massa. Cras tempor, enim sed ultrices congue, dolor ligula ultricies elit, id vehicula enim massa nec velit. Donec porttitor, erat et malesuada posuere, sem justo scelerisque nulla, sed suscipit eros nisi id sem. Donec accumsan euismod libero, ac accumsan massa. Etiam et tellus eleifend, efficitur libero et, finibus ante. Sed eu est egestas, viverra tellus.",
    },
    {
      nome: "Fiat Mobi",
      imagem: carro5,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas consectetur suscipit. Sed blandit viverra elementum. Nam volutpat cursus dui sed efficitur. Suspendisse sed vehicula ex. Pellentesque finibus, mauris at pharetra interdum, dui ante gravida leo, sed pulvinar diam purus sit amet felis. Suspendisse pulvinar ex quis est feugiat, eget ornare mauris posuere. Vivamus dignissim magna vitae quam faucibus, in porttitor nisi venenatis. Quisque id neque a nulla rhoncus ultricies. Suspendisse varius rutrum mi, in.",
    },
    {
      nome: "Peugeot 208",
      imagem: carro6,
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac consectetur urna. Proin sagittis, quam eu tincidunt commodo, eros elit condimentum purus, ut ullamcorper mi mi sit amet erat. Duis ut tempor nisi. Sed efficitur blandit erat at dignissim. Duis dictum quam lectus, sed sagittis lectus posuere sed. Phasellus porttitor venenatis condimentum. Nam ac nunc sagittis ante auctor consequat. In pretium ullamcorper condimentum. Quisque eu ante dapibus, condimentum massa ut, efficitur augue. Morbi sit amet.",
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
                      <Button
                        variant="contained"
                        color="primary"
                        href={`https://wa.me/5521970951262?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${item.nome}`}
                        target="_blank"
                        sx={{ mt: 2 }}
                      >
                        Contate-nos via WhatsApp
                      </Button>
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
