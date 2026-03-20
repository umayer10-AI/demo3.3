import React from 'react';
import { Info, QrCode } from 'lucide-react';

const P2 = ({p,b}) => {
    // console.log(p)

    const {author,download_url,url} = p;

    return (
        <div className='bg-blue-900 p-3 rounded-2xl space-y-3'>
            <h1 className='text-lg text-center font-bold'>{author}</h1>
            <div>
                <img className='h-40 w-60 object-cover' src={download_url} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <button className="btn btn-soft btn-info rounded-full px-2"><Info onClick={() => b(p)}></Info></button>
                <button className="btn btn-soft btn-info rounded-full px-2"><a href={url} target='blank'><QrCode></QrCode></a></button>
            </div>
        </div>
    );
};

export default P2;