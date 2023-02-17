import React from 'react'
import ReactDOM from 'react-dom/client'
import Application from './components/Application';
import { DataContextProvider } from './components/DataContext';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DataContextProvider>
            <Application />
        </DataContextProvider>
    </React.StrictMode>,
)
