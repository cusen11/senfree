import React, { useRef, useState } from 'react';

function Ledo() {
    const [los, setLos] = useState([])
    const [hoahong, setHoahong] = useState(10)
    const [hoahongAfterCount, sethoahongAfterCount] = useState(0)
    const inputEl = useRef();
    const inputEl2 = useRef();
    const inputEl3 = useRef();
    const handleAddLedo = () => { 
        const newElement = {
            number: inputEl.current.value,
            price: inputEl2.current.value
        }
        setLos(los => [...los, newElement])
        inputEl.current.value = ''
        inputEl2.current.value = ''
    }; 
    const countLedos = () =>{
        let count = 0 
        los.map((lo) =>
            count += parseInt(lo.price) 
        ) 
        sethoahongAfterCount(count * (hoahong/100)) 
    }  
    return (
        <> 
            <h4>Hoa hồng</h4>
            <select name="" id="">
                <option value="">Tính hoa hồng</option> 
                <option value="">Tính số trúng</option>
                
                <option value="">Tính lô 3 đài</option>
            </select>
            <input onChange={()=> setHoahong(inputEl3.current.value)} type='number' ref={inputEl3} placeholder='Hoa hồng'/>
            <br/>
            <input type='number' ref={inputEl} placeholder='Số'/>
            <input type='number' ref={inputEl2} placeholder='Điểm'/>
            <button onClick={()=>handleAddLedo()} >Nhập</button>
            
            <table style={{width:'400px'}}>
            
               <tbody>
                    <tr><th>
                        <h3>Hoa Hồng là : {hoahong}</h3>
                        </th>
                    <th></th>
                    </tr>
                    <tr>
                        <th>Số</th> 
                        <th>Số tiền</th> 
                    </tr>
                    {los ? los.map((lo, index)=>
                        <tr key={index}>
                            <td>{lo.number}</td> 
                            <td>{lo.price}</td> 
                        </tr>
                    ) :''}
               </tbody>
            </table>
            <button onClick={()=> countLedos()}>Tính Toán</button>
            <h1>Tổng tiền hoa hồng : {hoahongAfterCount}VNĐ</h1>
        </>
    );
}

export default Ledo;