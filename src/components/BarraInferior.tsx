import '../css/SobreMim.css';

interface BarraInferiorProps {
  pagina: string;
}

export const BarraInferior: React.FC<BarraInferiorProps> = ({pagina}) => {
 return (
    <div className="flex w-full content-start flex-wrap">
      <div className="flex-auto bg-minhaCor"></div>
      <div className="triangule1 w-6"></div> 
      <div className="flex-auto"></div>
      <div className="flex-auto bg-minhaCor flex items-center justify-center">
        <button className="bg-gradient-to-b from-marromAlaranjado to-marromEscurado text-white text-xl font-Julius py-2 px-4 rounded-full" disabled>
          {pagina}
        </button>
      </div>
      <div className="flex-auto"></div>
      <div className="triangule2 w-6"></div> 
      <div className="flex-auto bg-minhaCor"></div>
    </div>
 );
}