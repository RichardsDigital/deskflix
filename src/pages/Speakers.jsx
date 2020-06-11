import React from 'react';
import seminar from '../images/seminar.jpg';

class Speakers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const array = 
        ["speaker01", "speaker02", "speaker03", "speaker04", 
        "speaker05", "speaker06", "speaker07", "speaker08"];

        const images = array.map(image => {
           return <img key={image} src={require(`../images/speakers/${image}.png`)} />
        });

        return (
            <div className="speakersPage">
                <img className="speakersBackground" src={seminar} alt="seminar"/>
                <h2>SPEAKERS</h2>

                <div className="speakersViewWindow">
                    <div className="speakerRow">
                    
                        <div className="speakerBox">
                            {images[0]}
                            <div className="infoBox">
                                <h4>Speaker Name</h4>
                                <p>Job Title, Department, <br></br> 
                                Name, Company Name</p>
                            </div>
                        </div>
                        <div className="speakerBox">
                            {images[1]}
                            <div className="infoBox">
                                <h4>Speaker Name</h4>
                                <p>Job Title, Department, <br></br> 
                                Name, Company Name</p>
                            </div>
                        </div>
                        <div className="speakerBox">
                            {images[2]}
                            <div className="infoBox">
                                <h4>Speaker Name</h4>
                                <p>Job Title, Department, <br></br> 
                                Name, Company Name</p>
                            </div>
                        </div>
                        <div className="speakerBox">
                            {images[3]}
                            <div className="infoBox">
                                <h4>Speaker Name</h4>
                                <p>Job Title, Department, <br></br> 
                                Name, Company Name</p>
                            </div>
                        </div>
                    </div>

                    <div className="speakerRow">
                    
                    <div className="speakerBox">
                        {images[4]}
                        <div className="infoBox">
                            <h4>Speaker Name</h4>
                            <p>Job Title, Department, <br></br> 
                            Name, Company Name</p>
                        </div>
                    </div>
                    <div className="speakerBox">
                        {images[5]}
                        <div className="infoBox">
                            <h4>Speaker Name</h4>
                            <p>Job Title, Department, <br></br> 
                            Name, Company Name</p>
                        </div>
                    </div>
                    <div className="speakerBox">
                        {images[6]}
                        <div className="infoBox">
                            <h4>Speaker Name</h4>
                            <p>Job Title, Department, <br></br> 
                            Name, Company Name</p>
                        </div>
                    </div>
                    <div className="speakerBox">
                        {images[7]}
                        <div className="infoBox">
                            <h4>Speaker Name</h4>
                            <p>Job Title, Department, <br></br> 
                            Name, Company Name</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )

        }
}

export default Speakers;