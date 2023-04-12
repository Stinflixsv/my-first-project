import './App.css';
import {Header} from "./components/patterns/Header";
import {Welcome} from "./components/patterns/Welcome";
import {Brands} from "./components/patterns/Brands";
import {Packages} from "./components/patterns/Packages";
import {PopularCourses} from "./components/patterns/PopularCourses";
import {BuyCourses} from "./components/patterns/BuyCourses";
import {Subscribe} from "./components/patterns/Subscribe";
import {Reviews} from "./components/patterns/Reviews";
import {Form} from "./components/patterns/Form";
import {Footer} from "./components/patterns/Footer/Footer";

const App = ({state}) => {
    return (
        <div className="wrapper">
            <Header />
            <main className='main'>
                <Welcome />
                <Brands />
                <Packages />
                <PopularCourses />
                <BuyCourses cardData={state.buyCardData} />
                <Subscribe cardData={state.subscribeCardData} />
                <Reviews />
                <Form />
            </main>
            <Footer />
        </div>
    );
}

export default App;