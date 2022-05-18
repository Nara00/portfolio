import React from 'react'

class CustomNavbar extends React.Component {
    constructor(props) {
        super(props) 
    }

    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg sticky-top navigation-clean">
                <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><i className="fa fa-star fa fa-bars" style={{color: "var(--secondary)"}}></i></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                        </ul>
                    </div><a className="navbar-brand" href="#" style={{color: "var(--primary)"}}>N<span style={{color: "var(--secondary)"}}>A</span><span>N</span></a>
                </div>
            </nav>
        );
    }

}

export default CustomNavbar;