import { Edit, Trash2 } from "lucide-react";

interface BoxProps{
    id: number;
    name: string;
    amount: number;
    setId: (id: number) => void;
    setMethod: (method: string) => void;
}

export function Box({ id, name, amount, setId, setMethod } : BoxProps){

    function handleMethod(id: number, method:string){
        setMethod(method);
        setId(id);
    }

    return(
        <div className={`flex flex-row px-10 gap-4 ${amount < 10 ? "bg-red-600 text-white" : "border-transparent"}`}>
            <div className={`w-[10%] flex justify-start py-3 items-center border-b-[1px]`}>
                <span>#{id}</span>
            </div>
            <div className={`w-[70%] flex justify-start py-3 items-center border-b-[1px]`}>
                <span>{name}</span>
            </div>
            <div className={`w-[15%] flex justify-center py-3 items-center border-b-[1px]`}>
                <span>{amount}</span>
            </div>
            <div className={`w-[15%] flex justify-center py-3 items-center border-b-[1px]`}>
                <button onClick={() => handleMethod(id, "delete")}><Trash2></Trash2></button>
            </div>
            <div className={`w-[15%] flex justify-center py-3 items-center border-b-[1px]`}>
                <button onClick={() => handleMethod(id, "edit")}><Edit></Edit></button>
            </div>
        </div>
    )
}