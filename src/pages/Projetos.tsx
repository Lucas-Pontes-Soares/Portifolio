import { Navbar } from "../components/Navbar";
import { FlipCard } from "../components/FlipCard";
import { BarraInferior } from "../components/BarraInferior";


export function Projetos(){

    return(
       <div className="bg-minhaCor min-h-screen">
            <Navbar page="projetos"/>
            <div className="bg-imageProjetos h-screen flex flex-col justify-between">
                <div className="flex-grow flex flex-col items-center justify-center">
                <div className="flex items-center w-full">
                    <div className="flex-1 pl-16 w-30">
                        <h1 className="text-emerald-400 text-7xl font-bold pb-8">
                        Conheça meus Projetos
                        </h1>
                        <hr className="border-b-2 border-white w-72"/>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <img src="/projetos.png" alt="Projetos" height="300px" width="250px" />
                    </div>
                </div>
                </div>
                <BarraInferior pagina="Projetos"/>
            </div>
            <div className="flex">
            <div className="flex">
                <img src="/timaoDireita.png" alt="Imagem Esquerda" />
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-center h-full flex-col">
                    <h1 className="text-emerald-400 text-5xl font-bold pb-3">
                            Conheça meus projetos!
                    </h1>
                    <p className="text-emerald-800 text-2xl font-bold">Passe o cursor por cima para saber mais</p>
                </div>
            </div>
            <div className="flex">
                <img src="/timaoEsquerda.png" alt="Imagem Direita" />
            </div>
            </div>
            <div className="flex">
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./gplink.png"
                        title="GPLink"
                        subtitle="Projeto TCC"
                        description="Transforme sua experiência gamer! Unifique seus perfils de diferentes plataformas(xbox, steam, ps) exibindo seus jogos e conquistas, encontre novos jogadores e conquiste recompensas pelo seu esforço."
                        github="https://github.com/Lucas-Pontes-Soares/ProjetoTCC"
                        site="https://gplink-aj6y.onrender.com/"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./arduinoCancela.jpg"
                        title="Cancela Automatica"
                        subtitle="Projeto Arduino"
                        description="Este projeto foi desenvolvido na matéria de Sistemas Embarcados, consiste em uma cancela, controlada por servo motor que pode ser levantada/abaixada por botões e por bluetooth com leds e som para sinalização."
                        github="https://github.com/Lucas-Pontes-Soares/ArduinoCancela"
                        site=""
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <FlipCard 
                        frontImage="./LaCafezito3.png"
                        title="La Cafezito"
                        subtitle="Projeto PHP"
                        description="Projeto Interdisciplinar da escola, das matérias de PW, BD, APS. Nosso sistema conta com área do cliente para montar o seu café, visualizar histórico de pedidos, área de admin com kanban dos pedidos, edição dos complementos."
                        github="https://github.com/Lucas-Pontes-Soares/LaCafezito"
                        site=""
                    />
                </div>
            </div>
            <br /><br /><br /><br />
       </div>
    )
}