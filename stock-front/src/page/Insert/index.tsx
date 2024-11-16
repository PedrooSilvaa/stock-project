import { useState } from "react"
import { api } from "../../lib/axios";
import { InputText } from "../../components/input/input";

interface InsertProps{
    method: string;
    id: number
    nameObj: string
    amountObj: number
    setOpenModal: (open: boolean) => void;
    getAll: () => void;
}

export function InsertProduct( { method, id, setOpenModal, nameObj, amountObj, getAll} : InsertProps){

    const idInsert = 0;
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    async function insertProduct() {
        await api.post("/products", {
            idInsert, name, amount
        })
        .then((json) => {
            const data = json.data
            getAll();
            setOpenModal(false)
            console.log(data)
        })
    }

    async function updateProduct(id: number) {
        await api.put("/products/" + id, {
            id, name, amount
        })
        .then((json) => {
            const data = json.data
            setOpenModal(false);
            window.location.reload()
            console.log(data)
        })
    }

    function handleSubmit(method:string){
        name == "" ? setName(nameObj) : name;
        amount == "" ? setAmount(String(amountObj)) : amount;
        if (method === "Editar") { 
            updateProduct(id); 
        } 
        else { 
            insertProduct(); 
        }
    }

    return(
        <div className="absolute flex flex-col justify-center items-center w-1/2">
            <div className="flex flex-col bg-slate-200 p-10 gap-20 justify-around w-full">
                <h1 className="text-[#086632] font-extrabold text-2xl">{method} Produto</h1>
                <div className="flex justify-around">
                    <InputText name={"Nome"} setValue={setName} type={"text"} value={nameObj == "" ? "" : nameObj}></InputText>
                    <InputText name={"Quantidade"} setValue={setAmount} type={"number"} value={nameObj == "" ? "" : amountObj}></InputText>
                </div>
                <div className="flex justify-between ">
                    <button onClick={() => setOpenModal(false)} className=" rounded-[10px] p-2 text-red-500 font-bold">Cancelar</button>
                    <button onClick={() => handleSubmit(method)} className="bg-black rounded-[10px] w p-2 text-white font-bold">Submit</button>
                </div>
            </div>
        </div>
    )
}