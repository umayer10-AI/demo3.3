import React, { useEffect, useState } from 'react';
import axios from "axios"
import P2 from './P2';
import Modal from './Modal';
import Pagination from '@mui/material/Pagination';
import { ToastContainer, toast } from 'react-toastify';

const P1 = () => {

    const [arr, setA] = useState([]);
    const [loading, setL] = useState(true);
    const [c, setC] = useState(1);
    const [obj, setObj] = useState({});

    useEffect(() => {
        const a = async () => {
            try{
                setL(true);
                const b = await axios.get(`https://picsum.photos/v2/list?page=${c}&limit=15`);
                setA(b.data);
            }
            catch(error){
                console.log(error)
            }
            finally{
                setL(false)
            }
        }
        a();
    },[c])

    const b = (e) => {
        setObj(e)
        document.getElementById('my_modal_5').showModal()
    }

    const d = () => {
        toast.success(`Page ${c}`,{style:{backgroundColor: "black", color: "white"}})
    }

    const g = arr.map(v => <P2 key={v.id} p={v} b={b}></P2>)

    if(loading) return <h1 className='text-3xl font-bold h-screen flex justify-center items-center'>Loading Information.....</h1>

    return (
        <div className='mb-10 max-w-[90%] mx-auto'>

            <button onClick={d} className='btn btn-info mt-5'>Click</button>

            <div className='flex justify-center items-center mb-10 mt-5'>
                <Pagination count={10} size="large" page={c} onChange={(e, value) => setC(value)} sx={{
                '& .MuiPaginationItem-root': {
                    color: 'white'
                },
                '& .Mui-selected': {
                backgroundColor: '#f6b93b !important',
                    color: 'black'
                },
                '& .Mui-selected:hover': {
                    backgroundColor: '#f6b93b'
                },
                '& .Mui-selected.Mui-focusVisible': {
                    backgroundColor: '#f6b93b'
                }
            }} />
            </div>

            <ToastContainer />

            <div className='flex justify-center flex-wrap gap-5 mb-10'>
                {g.length===0 ? <h1 className='text-3xl font-bold my-30'>Data not Available</h1> : g}
            </div>
            <div className='flex justify-center items-center gap-5'>
                <button onClick={() => {
                    if(c>1) setC(v => v-1)
                }} className={`btn btn-warning ${c===1? 'opacity-50' : 'opacity-100'} font-bold text-black`}>Prev</button>
                <p>Page {c}</p>
                <button onClick={() => setC(v => v+1)} className='btn btn-warning font-bold text-black'>Next</button>
            </div>

            <Modal obj={obj}></Modal>

        </div>
    );
};

export default P1;