import React from 'react';

export default function Button({className, as, color, ...props}) {
    const colorClasses = {
        red: "from-red-100 to-red-400 hover:from-white hover:to-red-300",
        green: "from-emerald-100 to-emerald-400 hover:from-white hover:to-emerald-300",
        blue: "from-blue-100 to-blue-400 hover:from-white hover:to-blue-300",
        gray: "from-gray-100 to-gray-400 hover:from-white hover:to-gray-300",
        yellow: "from-amber-100 to-amber-400 hover:from-white hover:to-amber-300",
        purple: "from-purple-100 to-purple-400 hover:from-white hover:to-purple-300",
        white: "from-white to-gray-300 hover:from-gray-100 hover:to-gray-400",
        disabled: "from-gray-100 to-gray-400 text-gray-600",
        default: "from-primary-content to-secondary-content hover:from-white hover:to-primary-content"
    }
    let classes = `${className || ""} bg-gradient-to-br px-2 py-1 rounded-xl border font-bold text-center ${colorClasses[color] || colorClasses.default}`;
    let Output = as || "button";

    return (
        <Output className={classes} {...props} />
    );
}