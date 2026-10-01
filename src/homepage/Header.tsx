import Link from "next/link";
import React from "react";

export const Header: React.FC<{
    title: React.ReactNode;
    children?: React.ReactNode;
}> = ({ title, children }) => {

    return <div className="flex justify-between items-center px-2 py-1 bg-blue-950 text-white h-[2.0rem] flex-shrink-0">
        <div className="flex items-center">{children}</div>
        {title && <div className="text-xl">{title}</div>}
        <div className="flex items-center gap-3 text-xs">
            <Link href={"/anthara"} className="text-cyan-300 hover:text-cyan-100 hover:underline">Anthara 3D</Link>
            <Link href={"/"} className="hover:underline text-slate-300 hover:text-white">Home</Link>
        </div>
    </div>;

};
