import React from 'react';

const Button = ({ label, type, onClick }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="relative rounded-[100px] px-3 md:px-5 py-2 md:py-2.5 overflow-hidden group bg-[#176AE5]  hover:bg-gradient-to-r hover:from-[#176AE5] hover:to-[#176AE5] text-white transition-all ease-out duration-300 cursor-pointer">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{label}</span>
        </button>
    );
};

export default Button;