import React from "react";

const titulo = "Título do vídeo";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.imagem}/>
        <h4>{props.titulo}</h4>
      </div>
    </div>
  );
}

export default CardVideo