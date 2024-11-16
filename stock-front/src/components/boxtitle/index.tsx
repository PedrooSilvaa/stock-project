

export function Boxtitle(){
    return (
        <div className="flex flex-row bg-white text-black font-bold border-b-2 border-b-black px-5 gap-4">
            <div className={`w-[10%] flex justify-start border-white border-2`}>
                <span>Código</span>
            </div>
            <div className={`w-[70%] flex justify-start border-white border-2 pl-4`}>
                <span>Nome</span>
            </div>
            <div className={`w-[15%] flex justify-center border-white border-2`}>
                <span>Quantidade</span>
            </div>
            <div className={`w-[15%] flex justify-center border-white border-2`}>
                <span>Deletar</span>
            </div>
            <div className={`w-[15%] flex justify-center border-white border-2`}>
                <span>Editar</span>
            </div>
        </div>
    )
}