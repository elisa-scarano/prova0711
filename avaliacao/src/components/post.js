import React from 'react'
import '../../src/Post.css';
const Post = ({titulo, imagem, descricao, categoria}) => {
    return(
        <div class="not">
            <h2 className="Titulo">{titulo}</h2>
            <p className="categoria">{categoria}</p>
            <img src={imagem} className=""></img>
            <p className="descricao">{descricao}</p>
        </div>
    )
}
export default Post;