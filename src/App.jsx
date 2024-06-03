import "./App.css";
import Musica from "./Musica";

function App() {
  const musicas = [
    {id: "top_1", artista: "Gustavo Lima", titulo: "Bloqueado", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWT_UruVyBqoj0UoKhPUp40Rm8RcNZ3qtumA&s"},
    {id: "top_2", artista: "Dua Lipa", titulo: "One Kiss", foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/01/Dua-Lipa-no-tapete-vermelho-do-Globo-de-Ouro-de-2024-e1704985006592.jpg?w=1024"},
    {id: "top_3", artista: "Thiaguinho", titulo: "Falta Você", foto: "https://s2.glbimg.com/HwAhjouZOq-dcci18NRI_co2EtA=/top/e.glbimg.com/og/ed/f/original/2022/08/11/thi.gif"},
    {id: "top_4", artista: "Coldplay", titulo: "Paradise", foto: "https://ogimg.infoglobo.com.br/in/13669187-490-89f/FT1086A/2010022320207.jpg"},
    {id: "top_5", artista: "Demi Lovato", titulo: "Confident", foto: "https://rollingstone.uol.com.br/media/uploads/2023/07/demi-lovato-foto-angelo-kritikos.jpg"},
    {id: "top_6", artista: "Jota Quest", titulo: "Dias Melhores", foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/04/jota-quest.png?w=1008"},
    {id: "top_7", artista: "Queen", titulo: "Bohemian Rhapsody", foto: "https://igormiranda.com.br/wp-content/uploads/2021/08/queen-1984-banda-freddie-mercury.jpg"},
    {id: "top_8", artista: "Marilia Mendonça", titulo: "Infiel", foto: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/04/Snapinsta.app_198028760_2758416464469449_8675780176635433097_n_1080-e1681503563118.jpg?w=1080"},
    {id: "top_9", artista: "BTS", titulo: "Dynamique", foto:"https://static1.purebreak.com.br/people/8/55/13/08/@/438564-bts-e-o-maior-grupo-de-k-pop-do-mundo-opengraph_1200-3.jpg"},
    {id: "top_10", artista: "Os Arrais", titulo: "17 de Janeiro", foto: "https://veja.abril.com.br/wp-content/uploads/2018/11/veja-musica-os-arrais.jpg?quality=90&strip=info&w=720&h=440&crop=1"},
    
  ]; 

  const top = {
    boderBottton: "2px solid #fff",
    paddingBotton: "14px",
    margin: "10px"
  };

  return (
    <div className="App">
      <main className="App-header">
        <header>
          <h2 style = {top}>🎵Serratec Music🎵</h2>
        </header>
        {musicas.map((item) => 
        <Musica key = {item.id} item = {item}/>
        )}
      </main>
    </div>
  );
}

export default App;
