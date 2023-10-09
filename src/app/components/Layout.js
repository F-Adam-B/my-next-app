import NavBar from "../navbar/nav.js";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default Layout