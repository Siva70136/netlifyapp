import { useState } from 'react';
import { BsFacebook, BsYoutube, BsTelegram,BsWallet } from 'react-icons/bs';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineCheck,AiOutlineInfoCircle } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import {IoIosResize} from 'react-icons/io'
import {BiColorFill} from 'react-icons/bi'


import './index.css'
const Home = () => {
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [quantity3, setQuantity3] = useState(1);
    const [visible, setVisible] = useState(false);

    const price1 = 74;
    const price2 = 132;
    const price3 = 28;

    const item1 = price1 * quantity1;
    const item2 = price2 * quantity2;
    const item3 = price3 * quantity3;


    const increaseQuantity1 = () => {
        setQuantity1(quantity1 + 1);
    };
    const increaseQuantity2 = () => {
        setQuantity2(quantity2 + 1);
    };
    const increaseQuantity3 = () => {
        setQuantity3(quantity3 + 1);
    };

    const decreaseQuantity1 = () => {
        if (quantity1 > 1) {
            setQuantity1(quantity1 - 1);
        }
    }
    const decreaseQuantity2 = () => {
        if (quantity2 > 1) {
            setQuantity2(quantity2 - 1);
        }
    }
    const decreaseQuantity3 = () => {
        if (quantity3 > 1) {
            setQuantity3(quantity3 - 1);
        }
    }

    const onView = () => {
        setVisible(pre => !pre);
    }
    const total1 = quantity1 * item1;
    const total2 = quantity2 * item2;
    const total3 = quantity3 * item3;

    const total = total1 + total2 + total3;
    const ordertotal = total + 5 + 24.9;
    return (

        <div className='main-container'>
            <div className='nav-container'>
                <div className="navbar">
                    <img className="logo" src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo.f6121fbbfec25dbc851a3e5aea13c8ad.svg" alt='logo' />
                    <button className="button buy">Buy Now</button>

                </div>
            </div>

            <div className='middle-container'>
                <div className='nav-lg'>
                    <nav className="navbar" >
                        <div className="navbar2">
                            <div className="element mb-1 mb-lg-0">
                                <img src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg" alt="logo1" height="35rem" />
                            </div>

                            <div className="collapse nav-item-container">
                                <ul className="navbar-items">
                                    <li className="nav-item">
                                        <p className="nav-link">Men</p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link">Women</p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link">Beauty</p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="nav-link">Sport</p>
                                    </li>
                                    <li className="nav-item">
                                        <p></p>
                                        <select className="dropdown-menu">
                                            <option selected>
                                                <h4 className="nav-link dropdown-toggle1">Templates</h4>
                                            </option>
                                            <option>
                                                <p className="dropdown-item" href="/">Template 1</p>
                                            </option>
                                            <option>
                                                <p className="dropdown-item" href="/">Template 2</p>
                                            </option>
                                            <option>
                                                <a className="dropdown-item" href="/">Template 3</a>
                                            </option>
                                        </select>
                                    </li>
                                    <li className="nav-item">
                                        <p></p>
                                        <select className="dropdown-menu">
                                            <option selected><h4 className="nav-link dropdown-toggle1">Explore</h4></option>
                                            <option>
                                                <p className="dropdown-item" >Option 1</p>
                                            </option>
                                            <option>
                                                <p className="dropdown-item">Option 2</p>
                                            </option>
                                            <option>
                                                <p className="dropdown-item" >Option 3</p>
                                            </option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div className='icons-container'>

                                <div style={{ marginRight: "0.8rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div style={{ marginRight: "0.8rem" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2-2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </nav>
                    <hr />
                </div>
                <div className='nav-md'>
                    <nav className="navbar" >
                        <div className="navbar2">
                            <div className="element mb-1 mb-lg-0">
                                <img src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg" alt="logo1" height="35rem" />
                            </div>
                            <button onClick={onView}><AiOutlineMenu /></button>
                        </div>


                    </nav>
                    {visible &&
                        <div className="nav-item-md-container">
                            <ul className="navbar-items">
                                <li className="nav-item">
                                    <p className="nav-link">Men</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Women</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Beauty</p>
                                </li>
                                <li className="nav-item">
                                    <p className="nav-link">Sport</p>
                                </li>
                                <li className="nav-item">
                                    <p></p>
                                    <select className="dropdown-menu">
                                        <option selected>
                                            <h4 className="nav-link dropdown-toggle1">Templates</h4>
                                        </option>
                                        <option>
                                            <p className="dropdown-item" href="/">Template 1</p>
                                        </option>
                                        <option>
                                            <p className="dropdown-item" href="/">Template 2</p>
                                        </option>
                                        <option>
                                            <a className="dropdown-item" href="/">Template 3</a>
                                        </option>
                                    </select>
                                </li>
                                <li className="nav-item">
                                    <p></p>
                                    <select className="dropdown-menu">
                                        <option selected><h4 className="nav-link dropdown-toggle1">Explore</h4></option>
                                        <option>
                                            <p className="dropdown-item" >Option 1</p>
                                        </option>
                                        <option>
                                            <p className="dropdown-item">Option 2</p>
                                        </option>
                                        <option>
                                            <p className="dropdown-item" >Option 3</p>
                                        </option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    }
                    <hr />
                </div>
                <div className='check-container'>
                    <h2>Checkout</h2>
                    <p>Homepage / Clothing Categories / <u>Checkout</u></p>
                </div>

                <div className="details-container">
                    <div className="card1">
                        <div className='card'>
                            <div className="profile-container">
                                <div className='profile'>

                                    <div className='mt-0 m-2'>                                        <div className='pro-inner'>
                                        <CgProfile className='icon'/>
                                        <p className='mb-1'>CONTACT INFO</p>
                                        <AiOutlineCheck className='tick' />
                                    </div>
                                        <h6>Enrico Smith   +855-666-7744</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <button className="button change" >Change</button>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className='adress-card'>
                                    <div className="add-container">
                                        <div className='profile'>
                                            <div className='container'>

                                                <div className='pro-inner'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-intersection-y m-2 mt-1" viewBox="0 0 16 16">
                                                        <path d="M10.493 5.197 8 7.483 5.507 5.197 4.493 6.303 7.25 8.83V12h1.5V8.83l2.757-2.527-1.014-1.106Z" />
                                                        <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435Zm-1.4.7a.495.495 0 0 1 .7 0l6.516 6.515a.495.495 0 0 1 0 .7L8.35 14.866a.495.495 0 0 1-.7 0L1.134 8.35a.495.495 0 0 1 0-.7L7.65 1.134Z" />
                                                    </svg>
                                                    <p className='mb-1'>SHIPPING ADDRESS </p>
                                                    <AiOutlineCheck className='tick'/>
                                                </div>
                                                <h6>St. Paul's Road, Norris, SD 57560, Dakota, USA</h6>
                                            </div>
                                        </div>
                                        <div className='mt-2'>
                                            <button className="button change" >Change</button>
                                        </div>
                                    </div>

                                    <hr className='line' />
                                    <div className="container mt-4">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <label for="firstName" className="form-label">First name</label>
                                                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="lastName" className="form-label">Last name</label>
                                                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-8">
                                                    <label for="address" className="form-label">Address</label>
                                                    <input type="text" className="form-control" id="address" placeholder="Address" />
                                                </div>
                                                <div className="">
                                                    <label for="apt" className="form-label">Apt, Suite *</label>
                                                    <input type="text" className="form-control" id="apt" placeholder="Apt" />
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="">
                                                    <label for="city" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="city" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="row country">
                                                <label for="country" className="form-label">Country</label>
                                                <div>
                                                    <select className="form-select" id="country">
                                                        <option selected>Select</option>
                                                        <option>Country 1</option>
                                                        <option>Country 2</option>

                                                    </select>

                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <label for="state" className="form-label">State/Province</label>
                                                    <input type="text" className="form-control" id="state" placeholder="State" />
                                                </div>
                                                <div className="col-md-6">
                                                    <label for="postalCode" className="form-label">Postal code</label>
                                                    <input type="text" className="form-control" id="postalCode" placeholder="Postal Code" />
                                                </div>
                                            </div>
                                            <div class="radio-container ">

                                                <label className="form-label">Address Type</label>
                                                <div className='radio-items'>
                                                    <div className="form-check ">
                                                        <input className="form-check-input" type="radio" name="addressType" id="home" value="home" />
                                                        <label className="form-check-label" for="home">Home (All day Delivery)</label>
                                                    </div>
                                                    <div className="form-check ">
                                                        <input className="form-check-input" type="radio" name="addressType" id="office" value="office" />
                                                        <label className="form-check-label" for="office">Office (Delivery 9 AM - 5 PM)</label>
                                                    </div>


                                                </div>
                                            </div>
                                            <div className="row mt-5">
                                                <div className="d-flex">
                                                    <button type="submit" className="button confirm " style={{ borderRadius: "2rem", marginRight: "1rem" }}>Save and next to Payment</button>
                                                    <button type="button" className="button">Cancel</button>
                                                </div>
                                                <div className="col-md-2">

                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='card'>
                            <div className="profile-container">
                                <div className='profile'>
                                 
                                    <div className='mt-0 m-2'>
                                        <div className='pro-inner'>
                                            <BsWallet className='icon'/>
                                            <p className='mb-1'> PAYMENT METHOD</p>
                                            <AiOutlineCheck  className='tick'/>
                                        </div>
                                        <h6>Google / Apple Wallet xxx-xxx-xx55</h6>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <button className="button change" >Change</button>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div class="card2">
                        <div class="card">
                            <div class="card-body">

                                <div className="order-container">
                                    <h4 className='order-title'>Order Summary</h4>
                                    <div className="card border-0">

                                        <div className="card-body">
                                            <div className="item-card">
                                                <div className="image-container ">
                                                    <img className="image" src="https://monumental-ganache-c14cf0.netlify.app/static/media/hoodie.7701cf9446a6b588de67.png" alt="Item 1" />
                                                </div>
                                                <div className='data-container'>
                                                    <div className="data-inner-container">
                                                        <p className="item-title">Rey Nylon Backpack</p>
                                                        <div className='specifications'>
                                                            <div className='color'>
                                                                <p className="color-text"><BiColorFill className='color-icon' />Black</p>
                                                            </div>
                                                            <div className='size'>
                                                                <p className="size-text"><IoIosResize className='icon1' />2XL</p>
                                                            </div>
                                                        </div>
                                                        <div className="button-container mt-3 mb-0 ">
                                                            <button
                                                                className="button quan"
                                                                onClick={decreaseQuantity1}
                                                            >
                                                                -
                                                            </button>
                                                            <p className='count'>{quantity1}</p>
                                                            <button
                                                                className="button quan"
                                                                onClick={increaseQuantity1}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="price-container">
                                                        <div className='price'>
                                                            <button type="button" className="button price">${item1}</button>
                                                        </div>
                                                        <p className="remove">Remove</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <hr />
                                            <div className="item-card">
                                                <div className="image-container ">
                                                    <img className="image" src="https://monumental-ganache-c14cf0.netlify.app/static/media/beanie.5ed8bd8a65af67fd6c5c.png" alt="Item2" />
                                                </div>
                                                <div className='data-container'>
                                                    <div className="data-inner-container">
                                                        <p className="item-title">Waffle Knit Beanie</p>
                                                        <div className='specifications'>
                                                            <div className='color'>
                                                                <p className="color-text"><BiColorFill className='color-icon' />Black</p>
                                                            </div>
                                                            <div className='size'>
                                                                <p className="size-text"><IoIosResize className='icon1' />2XL</p>
                                                            </div>
                                                        </div>
                                                        <div className="button-container mt-3 mb-0 ">
                                                            <button
                                                                className="button quan"
                                                                onClick={decreaseQuantity2}
                                                            >
                                                                -
                                                            </button>
                                                            <p className='count'>{quantity2}</p>
                                                            <button
                                                                className="button quan"
                                                                onClick={increaseQuantity2}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="price-container">
                                                        <div>
                                                            <button type="button" className="button price">${item2}</button>
                                                        </div>
                                                        <p className="remove" style={{ color: "#005792" }}>Remove</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <hr />
                                            <div className="item-card">
                                                <div className="image-container ">
                                                    <img className="image" src="https://monumental-ganache-c14cf0.netlify.app/static/media/purse.7342ded3cf1426f3ce5e.png" alt="Item3" />
                                                </div>
                                                <div className='data-container'>
                                                    <div className="data-inner-container">
                                                        <p className="item-title">Travel Pet Carrier</p>
                                                        <div className='specifications'>
                                                            <div className='color'>
                                                                <p className="color-text"><BiColorFill className='color-icon' />Black</p>
                                                            </div>
                                                            <div className='size'>
                                                                <p className="size-text"><IoIosResize className='icon1' />2XL</p>
                                                            </div>
                                                        </div>
                                                        <div className="button-container mt-3 mb-0 ">
                                                            <button
                                                                className="button quan"
                                                                onClick={decreaseQuantity3}
                                                            >
                                                                -
                                                            </button>
                                                            <p className='count'>{quantity3}</p>
                                                            <button
                                                                className="button quan"
                                                                onClick={increaseQuantity3}
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <div className="price-container">
                                                        <div>
                                                            <button type="button" className="button price">${item3}</button>
                                                        </div>
                                                        <p className="remove" style={{ color: "#005792" }}>Remove</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <hr />
                                            <div className="container m-0 p-0">
                                                <p className='mb-1'>Discount code</p>
                                                <div className='discount-container'>
                                                    <div className="input-group mb-3" style={{ marginRight: "1rem" }}>
                                                        <input type="text" className="form-control" style={{ borderRadius: "1.5rem" }} />
                                                    </div>
                                                    <div>
                                                        <button className="button apply">Apply</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cal-container">
                                                <div className="cal">

                                                    <p>Subtotal</p>

                                                    <h6>${total}</h6>

                                                </div>
                                                <div className="cal">

                                                    <p>Shipping estimate</p>

                                                    <h6>$5.00</h6>

                                                </div>
                                                <div className="cal">

                                                    <p>Tax estimate</p>

                                                    <h6>$24.90</h6>

                                                </div>
                                                <div className="cal">
                                                    <h5>Order total</h5>
                                                    <h6>${ordertotal.toFixed(2)}</h6>
                                                </div>
                                                <div className="cal order-confirm">
                                                    <div className="confirm-container">
                                                        <button className="button confirm">Confirm Order</button>
                                                    </div>
                                                </div>
                                                <div className="cal learn">
                                                    <div className="">
                                                        <p className=''><AiOutlineInfoCircle/>Learn more <u>Taxes</u> and <u>Shipping</u> information</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>



                <footer>
                    <hr className='line' />
                    <div className="footer-container mt-5">
                        <div className="box1">
                            <img src="https://monumental-ganache-c14cf0.netlify.app/static/media/logo1.95d47bbac8db6c1e8f997bbf26ca05cf.svg" alt="logo1" height="30rem" />
                            <ul className="list-items">
                                <div className='inner-container'>
                                    <BsFacebook className='facebook' />
                                    <li>Facebook</li>
                                </div>
                                <div className='inner-container'>
                                    <BsYoutube className='youtube' />
                                    <li>Youtube</li>
                                </div>
                                <div className='inner-container'>
                                    <BsTelegram className='telegram' />
                                    <li>Telegram</li>
                                </div>
                                <div className='inner-container'>
                                    <FaTwitterSquare className='twitter' />
                                    <li>Twitter</li>
                                </div>
                            </ul>
                        </div>
                        <div className="box">
                            <h4>Getting Started</h4>
                            <ul className="list-items">
                                <li className='list-item1'>Release Notes</li>
                                <li className='list-item'>Upgrade Guide</li>
                                <li className='list-item'>Browser Support</li>
                                <li className='list-item'>Dark Mode</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h4>Explore</h4>
                            <ul className="list-items">
                                <li className='list-item1'>Prototyping</li>
                                <li className='list-item'>Design Systems</li>
                                <li className='list-item'>Pricing</li>
                                <li className='list-item'>Security</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h4>Resources</h4>
                            <ul className="list-items">
                                <li className='list-item1'>Best Practices</li>
                                <li className='list-item'>Support</li>
                                <li className='list-item'>Developers</li>
                                <li className='list-item'>Learn design</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h4>Community</h4>
                            <ul className="list-items">
                                <li className='list-item1'>Discussion Forums</li>
                                <li className='list-item'>Code of Conduct</li>
                                <li className='list-item'>Contributing</li>
                                <li className='list-item'>API Reference</li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </div>

        </div>
    );
}

export default Home;
