import React from 'react';
import package_pic from "./Home Page Photos/sponsorship_package.png";
import code_of_conduct_pic from "./Home Page Photos/code_of_conduct.png"
import './Resources.css'; // Import your custom CSS for the hover effect

function ResourceCard({ resourceName, resourceURL, imageUrl }) {
    return (
        <div className="col-md-4 text-center mb-4"> {/* Use col-md-4 to make the cards one-third wide on medium screens */}
            <a href={resourceURL} target="_blank" rel="noopener noreferrer">
                <div className="card hover-card"> {/* Add custom CSS class for the hover effect */}
                    <div className="card-img-container">
                        <img src={imageUrl} className="card-img" alt={resourceName} />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{resourceName}</h5>
                    </div>
                </div>
            </a>
        </div>
    );
}

function Resources() {
    return (
        <div id="resources" className="section">
            <div className="container">
                <h2 className="text-center">Resources</h2>
                <div className="row justify-content-center"> {/* Center the row content */}
                    <ResourceCard
                        resourceName="Hackathon Code Of Conduct"
                        resourceURL="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        imageUrl= {code_of_conduct_pic}
                    />
                    <ResourceCard
                        resourceName="UTRA Sponsorship Package 23-24"
                        resourceURL="https://drive.google.com/file/d/1yhuxijjjOdvd7furPhY_yatJd0xVVd7Q/view?usp=share_link"
                        imageUrl={package_pic}
                    />
                </div>
            </div>
        </div>
    );
}

export default Resources;
