const addressShorter = (ori)=>{
  if (ori){
    if(ori.length>10){
      return ori.slice(0,7)+'...'+ori.slice(-4)
    } else {
      return ori
    }
  }else{
    return '0x...'
  }
}

export {addressShorter}  