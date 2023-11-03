
import HeaderPerfil from "../../componentes/Header/HeaderPerfil";
import Menu from "../../componentes/Menu/Menu";
import Card from "../../componentes/Card/Card";
import Historicos from "../../componentes/Historicos/Historicos";
import { SectionStyle } from "./style";



function Home() {

    return (
        <>
            <HeaderPerfil />

            <SectionStyle>
                <Menu />
                <Card />
                <Historicos />
            </SectionStyle>

        </>
    )
}


export default Home