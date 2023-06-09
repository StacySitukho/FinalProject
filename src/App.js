import './App.css'
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";

export default function App(){
    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}