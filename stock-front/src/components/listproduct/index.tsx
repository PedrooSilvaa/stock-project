import { Box } from "../boxproduct";

interface ListProductProps{
    id: number;
    name: string;
    amount: number;
    setId: (id: number) => void;
    setMethod: (method: string) => void;
}

export function ListProduct({ id, name, amount, setId, setMethod} : ListProductProps){
    return (
        <div className="w-[100%]">
            <Box id={id} name={name} amount={amount} setId={setId} setMethod={setMethod}></Box>
        </div>
    )
}