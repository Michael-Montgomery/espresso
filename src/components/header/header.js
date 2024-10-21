import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faBars, faClose, faPhone } from '@fortawesome/free-solid-svg-icons';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


export default function Header() {

    const [contactModalIsOpen, setContactModalIsOpen] = useState(false);
    const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);

    // Contact form fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    // const [emailAdd, setEmailAdd] = useState('');
    const [message, setMessage] = useState('');

    const [sendBtnVisible, setSendBtnVisible] = useState(false);


    function openContactModal() {
        setContactModalIsOpen(true);
    }

    function closeContactModal() {
        setContactModalIsOpen(false);
    }

    function handleMobileMenuClick() {
        setMobileMenuExpanded(!mobileMenuExpanded)
    }

    // function sendMessage() {

    // }

    function validateForm() {
        if(firstName.length > 2 && lastName.length > 2 && message.length > 5) {
            setSendBtnVisible(true);
        } else {
            setSendBtnVisible(false);
        }
    }



    return (
        <>
            <header>
                <nav>
                    <Link to='/' id='header-logo' style={{fontSize: mobileMenuExpanded ? '1em' : '1.5em'}}>Espresso<br></br>Self</Link>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/menu'>Menu</NavLink>
                    <NavLink to='#' onClick={openContactModal}>Contact</NavLink>
                    {/* <button id='header-order-btn'>Order</button> */}
                    <p id='responsive-bars' onClick={handleMobileMenuClick}>{mobileMenuExpanded ? <FontAwesomeIcon icon={faClose}></FontAwesomeIcon> : <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}</p>
                </nav>
            </header>
            <div id='mobile-nav' style={{ height: mobileMenuExpanded ? '175px' : 0 }} onClick={handleMobileMenuClick}>
                {
                    mobileMenuExpanded ? <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='#' onClick={openContactModal}>Contact</Link></li>
                        {/* <li><button>Order</button></li> */}
                    </ul> : <></>
                }
            </div>
            <Modal
                isOpen={contactModalIsOpen}
                onRequestClose={closeContactModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id='contact-modal-wrapper'>
                    <p id='close-btn' onClick={closeContactModal}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></p>
                    <form onKeyDown={validateForm}>
                        <h2>We Would Love to hear from you!</h2>
                        <input type='text' placeholder='First Name' className='half' value={firstName} onChange={(e) => setFirstName(e.target.value)} maxLength='20' required></input>
                        <input type='text' placeholder='Last Name' className='half' value={lastName} onChange={(e) => setLastName(e.target.value)} maxLength='25' required></input><br></br>
                        {/* <input type='email' placeholder='Email Address' className='full' value={emailAdd} onChange={(e) => setEmailAdd(e.target.value)}></input><br></br> */}
                        <textarea placeholder='Your Message here...' className='full' value={message} onChange={(e) => setMessage(e.target.value)} maxLength='500' required></textarea><br></br>
                        <p id='char-count' style={{backgroundColor: message.length >= 500 ? 'red' : 'lightblue'}}>{`${message.length}/500`}</p>
                        <a href={`mailto:thehealthyprogrammer@outlook.com?subject=Inquiry Via Website&body=From ${firstName} ${lastName}: ${message}`} id='send-link' style={{visibility: sendBtnVisible ? 'visible' : 'hidden'}}><FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon></a>
                    </form>
                    <ul>
                    <li>
                            <a href='tel:13217777777' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.facebook.com/p/Espresso-Self-Mobile-Coffee-Shop-100063646685335/' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href='http://www.apple.com' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.yelp.com/biz/espresso-self-malabar-2' target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faYelp}></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                </div>

            </Modal>
        </>
    )
}