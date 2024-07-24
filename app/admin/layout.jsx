import { assets } from "@/assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex h-screen">
                <ToastContainer theme="dark" />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <header className="flex items-center justify-between w-full py-3 px-12 border-b border-black bg-white shadow-md">
                        <h3 className="font-medium text-xl">Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} height={40} alt="Profile icon" />
                    </header>
                    <main className="flex-1 p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
