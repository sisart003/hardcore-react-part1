

const Footer = () => {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    // console.log(isOpen);

    // if(hour >= openHour && hour <= closeHour) console.log("We're currently open!");
    // else console.log(`Sorry We're closed`);

    

    return (
        <footer className="footer">
            {isOpen ? (
                <div className="order">
                    <p>We're open until {closeHour}:00. Come visit us or order online.</p>
                    <button className="btn">Order</button>
                </div>
            ): (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>)}     
        </footer>
    )
}

export default Footer