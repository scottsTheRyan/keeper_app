import React from "react";


function Footer(){
    
    const dynamic_year = new Date().getFullYear();
    return <footer>
        Copyright © {dynamic_year}
    </footer>
}

export default Footer;