import styled from "styled-components"
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img{
        width: 212px;
    }
`;

// Todas las imagenes que estén dentro de un header usando SaaS

function Header(){
    return (
        <HeaderEstilizado>   
            <img src="img/logo.png" alt="" />
            <CampoTexto />
        </HeaderEstilizado>
    );
}

export default Header;
