# Lions Seminovos Webpage

Este projeto consiste em uma página web para a Lions Seminovos, desenvolvida como parte de um teste prático para a posição de desenvolvedor front-end. O objetivo principal foi criar uma interface responsiva e interativa que ofereça uma experiência de usuário atraente.

## Visão Geral do Projeto

A página foi construída usando React, uma escolha feita pela sua robustez e versatilidade, e Material-UI, para garantir um design moderno e responsivo. Elementos visuais públicos da Lions Seminovos foram incorporados para refletir fielmente a identidade da marca.

## Demonstração

Confira a demonstração ao vivo do projeto: [Lions Seminovos Webpage](https://lionsseminovos.vercel.app/)

## Funcionalidades

- **Barra de Navegação**: Contém links para redes sociais, facilitando o acesso a outras plataformas da Lions Seminovos.
- **Campo de Busca**: Permite que os usuários procurem por carros disponíveis na lista.
- **Imagem Interativa**: A imagem principal redireciona para o site oficial da Lions Seminovos.
- **Carros Disponíveis**: Apresenta uma lista de carros com imagens, descrições e um botão para contato via WhatsApp.
- **Rodapé**: Contém informações de direitos autorais e links para redes sociais.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript utilizada para construir interfaces de usuário.
- **Material-UI**: Biblioteca de componentes do React para facilitar o design moderno e responsivo.

## Organização do Código

- **src/**: Diretório que contém o código fonte do projeto.
  - **App.js**: Componente principal que organiza a estrutura da página.
  - **img/**: Diretório que contém as imagens utilizadas na página.
- **Componentes**: Uso extensivo de componentes do Material-UI para criar uma interface de usuário coesa e responsiva.

## Decisões de Design

- **Responsividade**: O sistema de grid do Material-UI foi utilizado para garantir que o layout se adapte a diferentes dispositivos.
- **Integração de WhatsApp**: Adicionamos um botão em cada card de carro que abre uma conversa no WhatsApp com uma mensagem pré-definida, facilitando o contato com potenciais clientes.
- **Estilo e Temática**: As cores e o estilo foram cuidadosamente escolhidos para refletir a identidade visual da Lions Seminovos.

## Como Rodar o Projeto

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/britolmbs/LionsSeminovos.git
   cd LionsSeminovos
   ```

2. **Instale as Dependências**

   Certifique-se de ter o Node.js instalado e execute:

   ```bash
   npm install
   ```

3. **Execute o Projeto**

   Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   O projeto estará disponível em http://localhost:3000.

## Reflexões sobre o Desenvolvimento

Durante o desenvolvimento deste projeto, busquei equilibrar funcionalidade e estética, garantindo que a página oferecesse uma experiência de usuário atraente. O uso de Material-UI facilitou a implementação de um design responsivo e consistente. A integração com o WhatsApp foi uma escolha estratégica para melhorar a acessibilidade de contato com os clientes.