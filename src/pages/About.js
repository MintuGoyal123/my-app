import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/main.css';
export function About(){
    return(
        <div className="main-wrapper">
        <Header />
        <h2>About Us Component</h2>
        <Footer />
        </div>
    );
}
