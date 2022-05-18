import React, {useEffect} from 'react'
// import { consumers } from 'stream'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkills: []
        };
        this.getAllSkills = this.getAllSkills.bind(this)
 
    }

     async componentDidMount() {
        await fetch('http://localhost:8080/api/skills').then(res => res.json()).then(result => {
            this.setState({
                allSkills: result
            })
        }).catch(console.log)
    }

    getAllSkills() {
        fetch('http://localhost:8080/api/skills').then(res => res.json()).then(result => {
            this.setState({
                allSkills: result
            })
        }).catch(console.log)
        console.log('getAllSkills')
        console.log(this.state.allSkills[0])
    }

    getCard(data) {
        return (

        <div className="col-auto">
            <div className="card">
                <div className="card-body" style={{ background: "var(--bg-default)", border: "5px solid var(--secondary)" }}>
                    <h4 className="card-title">{data.title}</h4>
                    <h6 className="text-muted card-subtitle mb-2">{data.level}</h6>
                    <p className="card-text">{data.description}<br /></p>
                </div>
            </div>
        </div>

        );
    }

    getTestHTML(){
        return (

            <div>
                <button type="button">Hey I'm a button</button>
            </div>

        );
    }

    init = () => {
        let result = []
        this.state.allSkills.forEach(element => {
            result.push(this.getCard(element))
        });
        console.log(result)
        return(
            result
        );
    }

    render() {
        return (
            <section id="skills" className="full-screen">
                <div className="container">
                {/* <button type="button" onClick={this.getAllSkills}>get skills</button> */}
                    <h2 className="text-center">SKILLS</h2>
                    <h5 style={{ marginBottom: "1em" }}>Categoría</h5>
                    <div className="row">
                        {this.init()}
                        {/* <div className="col-auto">
                            <div className="card">
                                <div className="card-body" style={{ background: "var(--bg-default)", border: "5px solid var(--secondary)" }}>
                                    <h4 className="card-title">Title</h4>
                                    <h6 className="text-muted card-subtitle mb-2">level</h6>
                                    <p className="card-text">Description<br /></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="card">
                                <div className="card-body" style={{ background: "var(--bg-default)", border: "5px solid var(--secondary)" }}>
                                    <h4 className="card-title">Title</h4>
                                    <h6 className="text-muted card-subtitle mb-2">level</h6>
                                    <p className="card-text">Description<br /></p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }

}

export default Skills;