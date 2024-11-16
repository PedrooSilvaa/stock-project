import React from 'react'

const Header = () => {
  return (
    <div className='w-full border-b-2 bg-white  flex justify-between px-10 py-2'>
        <div className='flex gap-[1px] text-3xl font-bold items-end text-gray-400'>
            <h1 className='text-[#086632]'>Produtos</h1>
            /
            <h1 className='text-xl'>Estoque</h1>
        </div>
        <div>
            <h1>Olá Pedro</h1>
            <h1>pedro@email.com</h1>
        </div>
    </div>
  )
}

export default Header