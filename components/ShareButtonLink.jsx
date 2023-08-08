'use client';

import { useState } from "react";

function ShareButtonLink() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href);
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        }, 1500);
    };

    console.log('Clicked State: ', clicked);

    return (
        <button className="border px-2 py-1 rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
            onClick={handleClick}
        >
            {clicked ? 'Link Copied' : 'ShareLink'}
        </button>
    );
}

export default ShareButtonLink;
