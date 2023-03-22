import React from "react";
import Typed from "react-typed"
const Header = ()=>{

    return(
        <header>
            <div style={{    display: "flex", padding: "10rem"}}>
                <h1>
                    <Typed strings={["Lucas Freitas",
                                    "Frontend Developer"]}
                            typeSpeed={100}
                            backSpeed={150}
                            loop
                    />
                </h1>
            </div>
        </header>
    )
}
export {Header}