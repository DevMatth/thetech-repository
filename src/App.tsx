import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from "./App.module.css"
import { Plans } from "./components/pages/Plans";
import { Services } from "./components/pages/Services";



export function App() {
    
    return (
        <div className={styles.app}>
            <Header />

            <div className={styles.wrapper}>
                <Sidebar />
                <Post />
            </div>
            <Plans />
            <Services />
        </div>
    )
}