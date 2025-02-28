import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import '../styles/main.css';
import Banner1 from '../images/banner2.jpg';
export function Home(){
    return(
        <div className="main-wrapper">
        <Header />
        <h2>My Home Component</h2>
        <img src={Banner1} />
        <Footer />
        </div>
    );
}
