import Header from '../../components/header/header';
import './home.css';
import  cartImg  from '../../assets/cart.png';


export default function Home() {
    return (
        <>
            <div id='homepage-wrapper'>
                <Header></Header>
                {/* image of coffee cart */}
                {/* <img src=''></img> */}
                <div class="center">
                    <div id="cloud">
                    </div>
                </div>
                <img id='homepage-coffee-cart' src={cartImg} alt='cart'></img>

                <p id='homepage-address'>775 Malabar Rd. Palm Bay, FL</p>
                <p id='credit-link'><a href='https://michael-montgomery.github.io/theory23'>MM</a></p>
            </div>
        </>
    )
}