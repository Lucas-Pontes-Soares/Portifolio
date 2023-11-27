import { Navbar } from "../components/Navbar";
import { FlipCard } from "../components/FlipCard";

export function Projetos(){

    return(
       <div className="bg-minhaCor h-screen">
            <Navbar />
            <div className="bg-[url('/BarcoFundo.png')] h-screen">
                <h1>Projetos</h1>
                <FlipCard 
                    frontImage="./gplink.png"
                    title="GPLink"
                    backText="Transforme sua experiência gamer! Unifique seus perfils de diferentes plataformas(xbox, steam, ps) exibindo seus jogos e conquistas, encontre novos jogadores e conquiste recompensas pelo seu esforço."
                />
            </div>
       </div>
    )
}