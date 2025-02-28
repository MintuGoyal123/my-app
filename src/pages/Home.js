import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/main.css';
export function Home(){
    return(
        <div className="main-wrapper">
        <Header />
        <h2>My Home Component</h2>
        <Footer />
        </div>
    );
}
