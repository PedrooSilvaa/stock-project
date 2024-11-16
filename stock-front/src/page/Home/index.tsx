import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { ListProduct } from "../../components/listproduct";
import { Boxtitle } from "../../components/boxtitle";
import { InsertProduct } from "../Insert";
import ModalDel from "../../components/modalDel";
import { Plus } from "lucide-react";

interface productsContent {
    id: number;
    name: string;
    amount: number;
    value: number;
}

export function Home() {
    const [products, setProducts] = useState<productsContent[]>([]);
    const [id, setId] = useState(0);
    const [method, setMethod] = useState("");
    const [search, setSearch] = useState("");
    const [openEditProduct, setOpenEditProduct] = useState(false);
    const [openNewProduct, setOpenNewProduct] = useState(false);
    const [openDeleteProduct, setOpenDeleteProduct] = useState(false);
    const [editProduct, setEditProduct] = useState<productsContent | null>(null);

    async function getAllProduct() {
        try {
            const response = await api.get("/products");
            const data = response.data;

            console.log(data);

            if (data !== "vazio") {
                setProducts(
                    data.map((item: productsContent) => ({
                        id: item.id,
                        name: item.name,
                        amount: item.amount,
                        value: item.value,
                    }))
                );
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    async function SearchProduct() {
        try {
            const response = await api.get("/products/search/" + search);
            const data = response.data;

            console.log(data);

            if (data !== "vazio") {
                setProducts(
                    data.map((item: productsContent) => ({
                        id: item.id,
                        name: item.name,
                        amount: item.amount,
                        value: item.value,
                    }))
                );
            } else {
                setProducts([]);
            }
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    }

    useEffect(() =>{
        if(search != ""){
            SearchProduct();
        }else {
            getAllProduct()
        }
    }, [search])

    async function deleteProduct(id: number) {
        try {
            await api.delete(`/products/${id}`);
            console.log("Produto deletado");
            getAllProduct(); 
            setOpenDeleteProduct(false)
        } catch (error) {
            console.error("Erro ao deletar o produto:", error);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    useEffect(() => {
        if (method === "delete") {
            const product = products.find((item) => item.id === id);
            if (product) {
                setEditProduct(product);
                setOpenDeleteProduct(true);
            }
        } else if (method === "edit") {
            const product = products.find((item) => item.id === id);
            if (product) {
                setEditProduct(product);
                setOpenEditProduct(true);
            }
        }
    }, [id]);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="bg-transparent flex flex-col justify-center items-center">
                <div className="bg-white p-10 rounded-xl w-[900px] max-h-[600px]">
                    <div className="flex justify-between mb-10">
                        <input type="text" placeholder="Pesquisar" className=" border-2 border-[#086632] rounded-lg px-4" onChange={(e) => setSearch(e.target.value)}/>
                        <button className="bg-[#086632] px-10 py-2 rounded-2xl text-white flex gap-2 items-center" onClick={() => setOpenNewProduct(true)}>Novo <Plus></Plus></button>
                    </div>
                    <Boxtitle />
                    <div className="max-h-[300px] overflow-y-auto">
                    {products.map((item) => (
                        <ListProduct
                            key={item.id} 
                            id={item.id}
                            name={item.name}
                            amount={item.amount}
                            setId={setId}
                            setMethod={setMethod}
                        />
                    ))}
                    </div>
                </div>
            </div>
            {openEditProduct && editProduct && (
                <InsertProduct method="Editar" id={editProduct.id} setOpenModal={setOpenEditProduct} amountObj={editProduct.amount} nameObj={editProduct.name} getAll={getAllProduct}></InsertProduct>
            )}
            {openNewProduct && (
                <InsertProduct method="Adicionar" id={0} setOpenModal={setOpenNewProduct} amountObj={0} nameObj={""} getAll={getAllProduct}></InsertProduct>
            )}
            {openDeleteProduct && editProduct &&(
                <ModalDel deleteProduct={deleteProduct} id={editProduct.id} name={editProduct.name} setOpenModal={setOpenDeleteProduct}></ModalDel>
            )}
        </div>
    );
}
