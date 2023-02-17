import { useState } from 'react';

export default function Accordian({title, titleAside, color, className, children}) {
    const colorClasses = {
        red: { bg: "bg-red-200", border: "border-red-800" },
        green: { bg: "bg-emerald-200", border: "border-emerald-800" },
        blue: { bg: "bg-blue-200", border: "border-blue-800" },
        gray: { bg: "bg-gray-200", border: "border-gray-800" },
        yellow: { bg: "bg-amber-200", border: "border-amber-800" },
        purple: { bg: "bg-purple-200", border: "border-purple-800" },
        white: { bg: "bg-white", border: "border-gray-600" },
        psorange: { bg: "bg-stone-300", border: "border-psorange" },
        psgray: { bg: "bg-white", border: "border-psgray" },
        default: { bg: "bg-gray-200", border: "border-gray-800" }
    }
    
    let [ open, setOpen ] = useState(false);
    let ToggleOpen = () => setOpen(!open);
    let topStyle = (open) ? "": "rounded-b-md";
    let caretStyle = (open) ? "bi-caret-down" : "bi-caret-right";
    let bottomStyle = (open) ? "block" : "hidden";
    let { bg, border } = colorClasses[color] || colorClasses.default;

    title = title || "Accordian";
    titleAside = titleAside || "";
    className = className || "";
    
    return (
        <div className={className}>
            <div className={`flex flex-row space-x-1 p-1 cursor-pointer rounded-t-md border-b ${topStyle} ${bg} ${border}`} onClick={ToggleOpen}>
                <div className={`pointer-events-none flex items-center ${caretStyle}`} />
                <div className="pointer-events-none flex items-center flex-grow font-bold">{title}</div>
                <div className="flex flex-row items-center space-x-2">{titleAside}</div>
            </div>
            <div className={`border px-1 rounded-b-md ${bottomStyle} ${border}`}>
                {children}
            </div>
        </div>
    );
}