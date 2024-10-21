import { useState } from 'react';
import Header from '../../components/header/header';
import './menu.css';
import menu from '../../data/menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';


let menuCopy = menu;

export default function Menu() {




    const [displayMenu, setDisplayMenu] = useState(menuCopy)

    // console.log(displayMenu) 

    return (
        <>
            <div id='homepage-wrapper'>
                <Header></Header>
               
                <div id='menu-wrapper'>
                     <h2>Menu</h2>
                     <ul id='legend-list'>
                        <li>
                        <p className='popular-icon'><FontAwesomeIcon icon={faFire}></FontAwesomeIcon> - Popular</p>
                        </li>
                        <li>
                        <p className='vegetarian-icon'><FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon> - Vegetarian</p>
                        </li>
                        <li>
                        <p className='special-icon'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> - Temporary</p>
                        </li>
                     </ul>
                    <div id='filters-wrapper'>
                        {/* vegetarian, treat, special, coffee, tea */}

                    </div>

                    <h2>Breakfast</h2><hr></hr>
                   <ul id='breakfast-list' className='menu-list'>
                   {
                        displayMenu.filter((val) => val.mealtime === 'breakfast').map((item, idx) => {
                            console.log(item)
                            return(
                                <li key={idx}>
                                    <div>
                                        <p className='dish-title'>{item.title} {item.tags.includes('vegetarian') ? <p className='vegetarian-icon'><FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon></p>: <></>} {item.tags.includes('popular') ? <p className='popular-icon'><FontAwesomeIcon icon={faFire}></FontAwesomeIcon></p>: <></>} {item.tags.includes('special') ? <p className='special-icon'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>: <></>}</p>
                                        <p className='dish-description'>{item.description}</p>
                                        <p className='dish-price'>{`$${item.price.toFixed(2)}`}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                   </ul>
                   <h2>Lunch</h2><hr></hr>
                   <ul id='lunch-list' className='menu-list'>
                   {
                        displayMenu.filter((val) => val.mealtime === 'lunch').map((item, idx) => {
                            console.log(item)
                            return(
                                <li key={idx}>
                                    <div>
                                        <p className='dish-title'>{item.title} {item.tags.includes('vegetarian') ? <p className='vegetarian-icon'><FontAwesomeIcon icon={faLeaf}></FontAwesomeIcon></p>: <></>} {item.tags.includes('popular') ? <p className='popular-icon'><FontAwesomeIcon icon={faFire}></FontAwesomeIcon></p>: <></>} {item.tags.includes('special') ? <p className='special-icon'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>: <></>}</p>
                                        <p className='dish-description'>{item.description}</p>
                                        <p className='dish-price'>{`$${item.price.toFixed(2)}`}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                   </ul>
                   <ul>
                    <li>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                    </li>
                    <li>
                        <div></div>
                    </li>
                   </ul>
                </div>
            </div>
        </>
    )
}