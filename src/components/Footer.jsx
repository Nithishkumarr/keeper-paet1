import React from "react";


var date= new Date();
var currentYear=date.getFullYear();
console.log(currentYear);
function Footer () {
    return (
        <div>
            <footer>
            <p>copyrightÂ©{currentYear}</p>
            </footer>
        </div>
    )
    
}
export default Footer;
