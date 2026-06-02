import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Plans } from "./components/pages/Plans";
import { Services } from "./components/pages/Services";

import './global.css'

import styles from "./App.module.css"
import { Footer } from "./components/Footer";
import { Post } from "./components/Post";


export function App() {
    
    return (
        <div className={styles.app}>
            <Header />

            <div className={styles.container}>
            <Sidebar /> 
            <div className={styles.post}>
            <Post />

            </div>
            </div>
                
            
            <Services />
            <Plans />
            <Footer />
        </div>
     
    )
}