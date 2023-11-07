import minhaImagem from './img/prova0711.PNG'
import Imagem from './img/perfil.png'
import Post from './components/post.js'
import Comentario from './components/comentario.js'
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Music world</h1>
    <Post titulo="RED HOT CHILI PEPPERS REALIZA HOMENAGEM À MÚSICA BRASILEIRA" categoria="Música" imagem={minhaImagem} descricao="Eles são INCRÍVEIS! Red Hot Chili Peppers iniciou sua mais
     nova turnê pelo Brasil no último sábado (4). A banda fez a primeira apresentação do giro nacional no Estádio Nilton Santos, no Rio de Janeiro. Logo após o show, 
     compartilhou uma incrível homenagem à música nacional.
     Para divulgar o setlist da noite nas redes sociais, o grupo utilizou a imagem do álbum “Tropicália ou Panis et Circencis”. O disco, lançado em 1968, foi uma 
     colaboração de Caetano Veloso, Gal Costa, Gilberto Gil, Nara Leão, Os Mutantes e Tom Zé, junto dos poetas Capinam e Torquato Neto e do maestro Rogério Duprat.
     Na postagem, o Red Hot substituiu os característicos retratos emoldurados de Leão e Capinam da capa (segurados respectivamente por Caetano e Gil em referência 
     aos dadaístas) por fotos do repertório." ></Post>

     <Comentario Nome="Katharine_mello" imagem={Imagem} comentário="Amo RED HOT CHILI PEPPERS <3, todos seus trabalhos são maravilhosos!!!"></Comentario>
    </div>
  );
}

export default App;
