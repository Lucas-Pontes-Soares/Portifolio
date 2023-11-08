export function Navbar(){
    return(
        <div className="flex content-start flex-wrap">
            <div className="flex-auto h-16 text-center">
                <a href="http://localhost:5173/SobreMim">Sobre Mim</a>
            </div>
            <div className="flex-auto h-16 text-center">
                <a href="http://localhost:5173/Habilidades">Habilidades</a>
            </div>
            <div className="flex-auto h-16 text-center">
                <a href="http://localhost:5173/Projetos">Projetos</a>
            </div>
            <div className="flex-auto h-16 text-center">
                <a href="http://localhost:5173/Contato">Contato</a>
            </div>
        </div>
    )
}