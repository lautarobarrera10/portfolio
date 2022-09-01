import React from "react";
import './Header.css'

function Header({children}) {
    return(
        <div className="Header-Background">
            <header className="Header">
                {children}
            </header>
        </div>
    );
}

export { Header }