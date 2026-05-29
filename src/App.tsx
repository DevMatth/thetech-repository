import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Plans } from "./components/pages/Plans";
import { Services } from "./components/pages/Services";

import './global.css'

import styles from "./App.module.css"
import { Footer } from "./components/pages/Footer";


export function App() {
    
    return (
        <div className={styles.app}>
            <Header />

            
            <Sidebar /> 
                
            
            <Services />
            <Plans />
            <Footer />
        </div>
     
    )
}