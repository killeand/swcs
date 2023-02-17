import { createContext, useState, useEffect, useRef } from 'react';

const DataContext = createContext(null);

export function DataContextProvider({children}) {
    let saveRef = useRef([]);
    let [ files, setFiles ] = useState([]);
    let [ saveTimer, setSaveTimer ] = useState(null);

    useEffect(() => {
        if (localStorage.getItem("SWCSGlobalStore")) {
            let loadedStore = JSON.parse(localStorage.getItem("SWCSGlobalStore"));
            setFiles(loadedStore);
            saveRef.current = loadedStore;
        }

        if (!saveTimer) {
            setSaveTimer(setInterval(() => {
                localStorage.setItem("SWCSGlobalStore", JSON.stringify(saveRef.current));
            }, 10 * 1000));
        }

        return () => clearInterval(saveTimer);
    }, []);

    useEffect(() => {
        if (files.length != 0)
            localStorage.setItem("SWCSGlobalStore", JSON.stringify(files));

        saveRef.current = [...files];
    }, [files]);

    function getLoadedIndex() {
        for (let i = 0; i < files.length; i++) {
            if (files[i].loaded) return i;
        }

        return -1;
    }

    return (
        <DataContext.Provider value={{ files, setFiles, getLoadedIndex }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;