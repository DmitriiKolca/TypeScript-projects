import {LayoutProps} from "./Layout.props";

import {Header} from "./Header/Header";
import {Sidebar} from "./Sidebar/Sidebar";
import {Footer} from "./Footer/Footer";


export const Layout = ({children}: LayoutProps): JSX.Element => {
    return (
        <>
            <Header/>
            <div>
                <Sidebar/>
                <div>
                    {children}
                </div>
            </div>
            <Footer/>

        </>
    )
}