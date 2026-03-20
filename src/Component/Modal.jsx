import { X } from 'lucide-react';
import React from 'react';

const Modal = ({obj}) => {

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box space-y-3 max-w-87 text-center">
                <h3 className="font-bold text-lg">Author : {obj.author}</h3>
                <img className='h-50 w-full mx-auto object-cover rounded-2xl' src={obj.download_url} alt="" />
                <div className='flex justify-center items-center gap-2'>
                    <p>Height : {obj.height}</p>
                    <X size={15} strokeWidth={1.75} absoluteStrokeWidth />
                    <p>Width : {obj.width}</p>
                </div>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-primary">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
};

export default Modal;