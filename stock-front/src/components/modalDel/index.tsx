
interface ModalProps {
    id: number;
    name: string;
    setOpenModal: (open: boolean) => void
    deleteProduct: (id: number) => void;
}

const ModalDel = ( {id, name, setOpenModal, deleteProduct} : ModalProps) => {
  return (
        <div className="absolute w-2/4 py-6 px-12 bg-white border-gray-200 border-2 rounded-xl flex flex-col gap-10">
                    <h1 className="text-[#086632] font-extrabold border-b-gray-300 border-b-[1px] py-3">
                        Apagar "{name}"
                    </h1>
                    <div className=" border-b-gray-300 border-b-[1px] pb-3">
                        <p>Essa ação não poderá ser desfeita.</p>
                    </div>
                    <div className="flex justify-between pb-6">
                        <button onClick={() => setOpenModal(false)} className="text-[#086632] ">Cancelar</button>
                        <button onClick={() => deleteProduct(id)} className="bg-red-600 px-5 py-2 rounded-xl text-white">Confirmar</button>
                    </div>
                </div>
  )
}

export default ModalDel