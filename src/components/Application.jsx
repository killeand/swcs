import { useContext, useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import DataContext from './DataContext';
import FileManager from '../pages/FileManager';
import { logo } from '../images/Images';

import Details from '../pages/Details';

const CHAR_PAGES = [
    {url:"details",icon:"bi-journal-text",name:"Character Details",component:(<Details />)},
    {url:"ability-scores",icon:"bi-person-lines-fill",name:"Ability Scores",component:(<p>Component</p>)},
    {url:"classes",icon:"bi-briefcase",name:"Classes",component:(<p>Component</p>)},
    {url:"health",icon:"bi-plus-circle",name:"Health",component:(<p>Component</p>)},
    {url:"saving-throws",icon:"bi-hospital",name:"Saving Throws",component:(<p>Component</p>)},
    {url:"offense",icon:"bi-lightning",name:"Offensive Stats",component:(<p>Component</p>)},
    {url:"defense",icon:"bi-shield",name:"Defensive Stats",component:(<p>Component</p>)},
];

export default function Application() {
    const DC = useContext(DataContext);
    const [ showNav, setShowNav ] = useState(true);

    const ToggleNav = (state) => setShowNav(state || !showNav)

    function RenderNav() {
        let menu = [];
        menu.push(<Link key="menu0" className="bi-hdd" to="/" onClick={()=>ToggleNav(false)}> File Manager</Link>);

        if (DC.getLoadedIndex() != -1) {
            CHAR_PAGES.forEach((item, i) => {
                menu.push(<Link key={`menu${i + 1}`} className={item.icon} to={item.url} onClick={()=>ToggleNav(false)}> {item.name}</Link>);
            });
        }

        menu.push(<Link key={`menu${menu.length + 1}`} className="bi-tools" to="/tools" onClick={()=>ToggleNav(false)}> Tools</Link>);

        return menu;
    }

    function RenderRoutes() {
        return CHAR_PAGES.map((item, i) => {
            return (<Route key={`CharRoute${i}`} path={item.url} element={item.component} />);
        });
    }

    return (
        <HashRouter>
            <div className="flex flex-col md:flex-row flex-grow">
                <header className="p-0 min-w-fit">
                    <div className="p-2 flex flex-row justify-between items-center bg-gradient-to-b from-primary to-white rounded-xl">
                        <img className="max-h-14 md:mx-auto" src={logo} />
                        <div className="bi-list text-3xl inline md:hidden" onClick={()=>ToggleNav()} />
                    </div>
                    <nav className={`md:flex flex-col ${(showNav)?"flex":"hidden"}`}>
                        {RenderNav()}
                    </nav>
                </header>
                <main className="flex flex-col flex-grow">
                    <Routes>
                        <Route index element={<FileManager />} />
                        <Route path="tools/*" element={<p>Tools</p>} />
                        {RenderRoutes()}
                        <Route path="404" element={<p>Page not found</p>} />
                        <Route path="*" element={<Navigate to="/404" />} />
                    </Routes>
                </main>
            </div>
            <footer className="text-center">
                Savage Worlds Character Sheet
            </footer>
        </HashRouter>
    );
}