import { Navbar } from "../components/Navbar";
import TextShpere from "../components/TextShpere";

export function Habilidades(){
    return(
        <div className="bg-minhaCor min-h-screen">
            <Navbar page="habilidades"/>
            <div className="bg-imageHabilidades h-screen flex flex-col justify-between">
            <div className="flex w-full h-full items-center justify-center">
                    <div className="flex w-6/12 items-center h-80 justify-center bg-minhaCor text-white z-10">
                        <div className="pl-10">
                            <h1 className="text-white text-xl font-Julius text-left pb-7">HardSkills</h1>
                            <TextShpere />
                        </div>
                    </div>
                    <div className="tringuleLateral w-3/12 flex items-center justify-center z-10"></div>
                    <div className="flex-auto flex items-center w-4/12 justify-center"></div>
                </div>
            </div>
        </div>
    )
}