import React from 'react';
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
        <div id="resources" className="section" style={{ paddingTop: "12%" , paddingBottom:"15%"}}>
            <div className="container">
                <h1 className="text-center" style={{paddingBottom:"5%"}}>Resources</h1>
                <div className="row justify-content-center"> {/* Center the row content */}
                    <ResourceCard
                        resourceName="Hackathon Code Of Conduct"
                        resourceURL="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                        imageUrl= {code_of_conduct_pic}
                    />
                </div>
            </div>
        </div>
    );
}

export default Resources;
