import React from 'react'
import '../../src/comentario.css';
const Comentario = ({ Nome, imagem, comentário}) => {
    return(
        <div class="comen">
            <img src={imagem} className="image"></img>
            <h2 className="Nome">{Nome}</h2>
            <p className="comentário">{comentário}</p>
        </div>
    )
}
export default Comentario;