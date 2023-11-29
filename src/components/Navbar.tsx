export function Navbar() {
  return (
    <div className="flex fixed w-full content-start flex-wrap text-slate-50 bg-neutral-900 bg-opacity-70 z-20">
      <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
        <a href="http://localhost:5173/SobreMim">Sobre Mim</a>
      </div>
      <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
        <a href="http://localhost:5173/Habilidades">Habilidades</a>
      </div>
      <div className="flex-1 h-16 flex items-center justify-center">
        <img src="/timonIcon.png" alt="Timon" height="70px" width="70px" />
      </div>
      <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
        <a href="http://localhost:5173/Projetos">Projetos</a>
      </div>
      <div className="flex-1 h-16 flex items-center justify-center text-2xl font-itim hover:text-amber-300">
        <a href="http://localhost:5173/Contato">Contato</a>
      </div>
    </div>
  );
}
