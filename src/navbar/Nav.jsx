import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

function Nav() {

    const navigate = useNavigate();

    const onLogoClick = () => {
        navigate("/");
    }

    return (
        <div onClick={onLogoClick} className="md:pl-40 h-[60px] w-full flex justify-center md:justify-start items-center">
            <Logo />
        </div>
    )
}

export default Nav
