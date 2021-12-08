import { useState } from 'react';
import SideBar from 'components/SideBar';
import { mainPageMenu } from 'menu';
import Header from './components/Header';
import Pages from './components/Pages';
import { Outlet, useNavigate } from 'react-router-dom';

const Main = () => {
    const [sideBarVisible, setSideBarVisible] = useState(true)
    const navigate = useNavigate();

    return <main id="main">
        <SideBar collapse={sideBarVisible} header={"Logo"} menus={mainPageMenu} onChangeMenu={key => navigate(`/${key}`)} />
        <div className="rigth-side">
            <Header sideBarVisible={sideBarVisible} setSideBarVisible={setSideBarVisible} />
            <Pages> <Outlet /> </Pages>
        </div>

    </main>
}

export default Main;