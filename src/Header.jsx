import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div 
    className='bg-[#131921] h-14 flex items-center sticky'>

        <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
        alt="logo"
        className='max-w-[6rem] basis-1/2 mx-5 mr-0 mt-2'/>

        <div 
        className='basis-3/4 flex justify-center items-center mx-4'>
            <input type="text" 
            className='w-full h-9 m-2 mr-0 rounded rounded-r-none'/>
            <SearchIcon 
            className='bg-[#ff9900] p-1 !w-auto !h-9 rounded rounded-l-none'/>
        </div>

        <div className='basis-1/4 w-full flex justify-around text-white'>
            <div className='flex flex-col items-center mt-1'>
                <span className='text-xs'>Hello, Guest</span>
                <span className='font-bold'>Sign in</span>
            </div>

            <div className='flex flex-col items-center mt-1'>
                <span className='text-xs'>Returns</span>
                <span className='font-bold'>& Orders</span>
            </div>

            <div className='flex flex-col items-center mt-1'>
                <span className='text-xs'>Your</span>
                <span className='font-bold'>Prime</span>
            </div>

            <div className='flex justify-around items-center'>
                <ShoppingBasketIcon className='mr-2'/>
                <span className='font-bold'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header