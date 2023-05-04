import React, { useState } from "react";
import Link from 'next/link'
import userModal from "./UserModal"
import UserModal from "./UserModal";


// interface Props { } 
// export interface Modal {
//     id: Number,
//     name: string
// }

export const Navbar = (): JSX.Element => {
    const [modal, setModal] = useState(false)
    const handleModal = () => {
        setModal(!modal)
    }

    const dn = !modal ? "block" : "none"
    return (
        <nav className="navbar1 ">
            <div className="navbar-logo">
                <Link href="/page1">
                    <img src="logo.png" alt="Logo" width={50} height={50} />
                </Link>
            </div>
            <div className="navbar-buttons ">
                <Link href="/page1" className="text-gray-600 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded">
                    BUS
                </Link>
                <Link href="/ZenlyPage" className="text-gray-600">
                    TRACKING
                </Link>
                <Link href="/LightPage" className="text-gray-600">
                    TRAFFIC LIGHT
                </Link>
            </div>
            <div className="navbar-profile" style={{ display: "block" }}>
                <button onClick={handleModal} data-dropdown-toggle="dropdownModal">
                    <img src="profileImage.png" alt="Profile Icon" className="rounded-full object-cover" />
                </button>
            </div>
            <UserModal modal={modal} />
        </nav>

    );
};

export default Navbar;



