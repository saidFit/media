
// TODO:the functions //

export const AbsoluteFunction =(bottom,left,colorButtons) =>{
    return{
        position:'fixed',
        bottom:bottom,
        left:left,
        background:colorButtons
    }
}

// TODO: the objects //

export const absoluteCenter = {

    position: 'absolute',
    left: '50%',
    top: '50%',
    transform:'translate(-50%,-50%)',
    width:'100%',
    maxWidth:'600px'
}


export const FlexBetweenItems = {
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%'
}

export const FlexItems = {
    display:'flex',
    alignItems:'center',
    width:'100%'
}

export const transition = {
    transition: 'all .3s ease-out'
}