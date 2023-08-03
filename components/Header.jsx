import { Children } from "react";

function Header({ children }) {
    return (
        <h1 className="font-bold text-2xl pb-3">{children}</h1>
    );
}

export default Header;
