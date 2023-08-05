import { orbitron } from "@/app/fonts";

function Header({ children }) {
    return (
        <h1 className={'font-bold font-orbitron text-2xl pb-3'}>{children}</h1>
    );
}

export default Header;
