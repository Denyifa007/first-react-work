import React, {useState} from 'react';
import { data } from './Db';
import '../Style/List.css'

const List = () => {
    const [datas, setData] = useState(data)
    function handleDelete(id) {
        const removeItem = datas.filter((singleDatum) => singleDatum.id !== id)
        setData(removeItem)
    }
    function handleRefresh() 
    {
        window.location.reload()
    }
  return (
    <div className='data'>
        <div className='Add'><h1>Choose your prefered plan</h1></div>
      
        {datas.map((datum)=>{
            const{priceInNaira,priceInDollar,priceInEuro,title,id} = datum
            return (
                <div className='inner-data' key={id}>
                    <h4>{title}</h4>
                    <p>price in naira : {priceInNaira}</p>
                    <p>price in naira : {priceInDollar}</p>
                    <p>price in naira : {priceInEuro}</p>
                    <button className='btn' onClick={()=> handleDelete(id)}>Delete item</button>
                </div>
            )
        })}
        {datas.length > 0 ?(
            <button onClick={()=> setData([])}>Clear all</button>
        ) :(
            <button onClick={handleRefresh}>Hit to refresh</button>
        )}
        
    </div>
  )
}

export default List