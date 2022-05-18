import React from 'react'


class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section id="home" className="full-screen">
                <header>
                    <h2 className="text-center">SOY</h2>
                    <h1 className="text-center d-flex flex-shrink-0 justify-content-center flex-wrap">NARA<span style={{color: "#f66e50", borderColor: "var(--secondary)"}}>&nbsp;ABRIL&nbsp;</span><span>NANFARA</span></h1>
                    <h4 className="text-center" style={{marginBottom: "0", marginTop: "1em"}}>¡Vamos a conocer mi portfolio!</h4>
                </header>
            </section>
        );
    }

}

export default Header;