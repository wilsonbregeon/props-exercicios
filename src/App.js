import React from "react";
import { CardVideo } from "./components/CardVideo";
import { InfosUsuario, InfosUsuario1, InfosUsuario2, InfosUsuario3, InfosUsuario4, InfosUsuario5, InfosUsuario6, InfosUsuario7, InfosUsuario8 } from "./components/InfosUsuario";
import "./styles.css";
export default function App() {
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo imagem = {"https://picsum.photos/400/400?a=1"} titulo = {InfosUsuario1()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=2"} titulo = {InfosUsuario2()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=3"} titulo = {InfosUsuario3()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=4"} titulo = {InfosUsuario4()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=5"} titulo = {InfosUsuario5()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=6"} titulo = {InfosUsuario6()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=7"} titulo = {InfosUsuario7()} />
            <CardVideo imagem = {"https://picsum.photos/400/400?a=8"} titulo = {InfosUsuario8()} />
          </section>
        </main>

        <footer>
          <h4>Oi! Eu moro no footer!</h4>
        </footer>
      </div>
    </div>
  );
}
