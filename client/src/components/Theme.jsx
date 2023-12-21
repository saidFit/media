import React, { useState } from 'react'
import { IoIosColorPalette } from 'react-icons/io'
import { absoluteCenter, AbsoluteFunction, FlexBetweenItems } from '../useStyle/useStyle'
import  {background, FontSize}  from '../data/Data'
import { colorText } from '../data/Data'
export const Theme = ({setSizeScreen,setcolorButtons,colorButtons,setbackgroundColor,setDarkThem}) => {
  const [Active,setActive] = useState(0)
  const [ActiveColor,setActiveColor] = useState(0)
  const [ActiveBackground,setActiveBackground] = useState(0)
  const [IsShowTheme,setIsShowTheme] = useState(false)
  const handleSizeScreen = (index,ValueHandle,typeHandle)=>{
    
     switch (typeHandle) {

    case 'size':
      setActive(index)
      setSizeScreen(ValueHandle)
      return

    case 'color':
        setActiveColor(index)
        setcolorButtons(ValueHandle)
        return

    case 'background':
         setActiveBackground(index)
         setbackgroundColor(ValueHandle)
         if(ValueHandle == '#F0F0F0') return setDarkThem('light')
         return
      default:
        return false
     }
      
  }
  return (
   
    <div>
       <button onClick={() => setIsShowTheme(!IsShowTheme)} style={{background:colorButtons}} className='bg-gray-0 p-4 fixed bottom-16 left-16 rounded-[50%] shadow-md dark:bg-primary-700'><IoIosColorPalette size={30}/></button>
       {IsShowTheme && (
         <section className='fixed backdrop-blur-sm inset-0 bg-[#00000047]'>
          <button onClick={() => setIsShowTheme(!IsShowTheme)} style={{...AbsoluteFunction(80,'',colorButtons)}} className='absolute top-[40px] right-[70px] font-bold text-lg bg-gray-0 p-4 rounded-[50%] shadow-md dark:bg-primary-700 w-[30px] h-[30px] flex items-center justify-center'>&#10005;</button>
         <article style={absoluteCenter} className='space-y-8 bg-gray-0 p-4 rounded-md dark:bg-slate-800 dark:border-black' >
           
            <div className='text-center'>
            <h1 className='text-xl font-[500]'>Costomize your view</h1>
            <p>you can to manager your font size,color and background</p>  
            </div>

            <article className='space-y-6'>

        <section>
            <h1 className="text-xl text-center font-[700] mb-2">Font Size</h1>
             <div style={{...FlexBetweenItems}} className='bg-gray-200 p-3 rounded-lg dark:bg-slate-900 space-x-3 dark:border-black'>
                <p className='grow-0 text-sm'>Aa</p>
                <div className='grow flex items-center'>
                   <div className='relative bg-gray-0 w-full h-[4px] rounded-xl'>
                    {FontSize && FontSize.map((item,index) =>{
                        const {top,left,right,ScreenSize} = item
                        return(
                         <button onClick={()=> handleSizeScreen(index,ScreenSize,'size')} style={{left:`${left}%`,right:`${right}%`}} key={index} className={Active == index ? 'w-[18px] h-[18px] rounded-[50%] absolute top-[-5px] bg-rose-500 border-2 border-gray-0':'bg-gray-100 w-[18px] h-[18px] rounded-[50%] absolute top-[-5px]'}></button>   
                        )
                    })}
                    
                   
                   </div>
                </div>
                <p className='grow-0 text-xl font-[500]'>Aa</p>
            </div>
        </section>
              
              <section>
              <h1 className="text-xl text-center font-[700] mb-2">Color</h1>
              <div style={{...FlexBetweenItems}} className='bg-gray-200 p-3 rounded-lg dark:bg-slate-900 space-x-3 dark:border-black'>
                {colorText && colorText.map((item,index)=>{
                    return(
                     <button onClick={() => handleSizeScreen(index,item.color,'color')} style={{background:`${item.color}`}}  key={index} className={ActiveColor == index ? 'w-[25px] h-[25px] rounded-[50%] border-[3px] border-white':'w-[25px] h-[25px] rounded-[50%]'}></button>     
                    )
                })}
              
              </div>
              </section>
              <section>
              <h1 className="text-xl text-center font-[700] mb-2">Background</h1>
              <div style={{...FlexBetweenItems}} className='bg-gray-200 p-3 rounded-lg dark:bg-slate-900 space-x-3 dark:border-black'>
                {background.map((item,index)=>{
                    return(
                     <div onClick={()=>handleSizeScreen(index,item.color,'background')} key={index}  style={{background:`${item.color}`}} className={ActiveBackground == index ? 'w-[33.33%] cursor-pointer flex space-x-2 items-center p-3 py-8 h-[25px] rounded-md border-[3px] border-white':'w-[33.33%] cursor-pointer flex space-x-2 items-center p-3 py-8 h-[25px] rounded-md'}>
                        <span className={`bg-${item.color} border-[1.4px] border-${item.color} w-[20px] h-[20px] rounded-[50%] `}></span>
                        <p className={`text-${item.textColor}`}>{item.type}</p>
                     </div>     
                    )
                })}
              
              </div>
              </section>

            </article>
           

         </article>
       </section>
       )}
      
    </div>
  )
}
