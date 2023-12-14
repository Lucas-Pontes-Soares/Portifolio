import { Navbar } from "../components/Navbar";
import { useState } from 'react';

interface ContatoProps {
    titulo: string;
    texto: string;
    link: string;
  }

export function Contato(){
    const [titulo, setTitulo] = useState<string>('');
    const [textoPrincipal, setTextoPrincipal] = useState<string>('');
    const [link, setLink] = useState<string>('');

  const handleClick = (titulo: string, texto: string, link: string) => {
    setTextoPrincipal(texto);
    setTitulo(titulo);
    setLink(link);
  };

    return(
        <div className="bg-minhaCor min-h-screen">
            <Navbar />
            <div className="bg-imageContato h-screen flex items-center justify-center">
                <div className="flex w-7/12 h-96 border-4 border-teal-700 relative mt-32 bg-black bg-opacity-50">
                    <div className="bg-imagemMinha absolute w-40 h-40 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-teal-700"></div>
                         <div className="mt-24 ml-8 mr-8 text-white">
                                {titulo ? <li className="text-2xl">{titulo}</li> : <p>Clique em alguma opção de contato para acessar</p>}
                                <p>{textoPrincipal}</p>
                                <br></br>
                                {link === 'mailto:eterneru.lucas@outlook.com' ? (
                                <a href={link}>eterneru.lucas@outlook.com</a>
                                ) : link === '+55 (14) 98219-7061' ? (
                                <a>+55 (14) 98219-7061</a>
                                ) : (
                                <a target="_blank" href={link}>{link}</a>
                                )}
                                
                         </div>
                    <div className="flex absolute bottom-0 transform translate-y-1/2 w-full content-start flex-wrap">
                        <div 
                            onClick={() => handleClick('Meu GitHub:', 'Aqui você vai encontrar códigos e projetos meus: ', 'https://github.com/Lucas-Pontes-Soares')}
                            className="bg-github flex h-20 w-20 items-center justify-center ml-auto border-4 border-teal-700 bg-teal-700 cursor-pointer">
                        </div>
                        <div 
                            onClick={() => handleClick('Meu Linkedin:', 'Conheça meu perfil profissional do Linkedin, saiba mais sobre minha vida academica/profissional e minhas habilidades ', 'https://www.linkedin.com/in/lucas-pontes-soares/')}
                            className="bg-linkedin flex h-20 w-20 items-center justify-center ml-auto border-4 border-teal-700 bg-teal-700">
                        </div>
                        <div 
                            onClick={() => handleClick('Meu E-mail:', 'Pode entrar em contato comigo através do meu email: ', 'mailto:eterneru.lucas@outlook.com')}
                            className="bg-email flex h-20 w-20 items-center justify-center ml-auto border-4 border-teal-700 bg-teal-700">
                        </div>
                        <div 
                            onClick={() => handleClick('Meu Telefone:', 'Pode entrar em contato comigo através do meu telefone, whatsapp: ', '+55 (14) 98219-7061')}
                            className="bg-phone flex h-20 w-20 items-center justify-center ml-auto mr-auto border-4 border-teal-700 bg-teal-700">
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}