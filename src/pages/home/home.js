import Header from '../../components/header/header';
import './home.css';


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

                <p id='homepage-address'>775 Malabar Rd. Palm Bay, FL</p>
                <p id='credit-link'><a href='https://michael-montgomery.github.io/theory23'>T23</a></p>
            </div>
        </>
    )
}