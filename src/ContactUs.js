import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useState} from "react";



const ContactUs = () => {

    const [submitted, setSubmit] = useState(false);
    const [fieldData, setFieldData] = useState({
        "entry.1271105453" : "", // Full Name
        "entry.997699616" : "", // Email
        "entry.724193911" : "" // Message
    });

    const handleChange = (data) => (e) => {
        const value = e.target;

        setFieldData({[data]:value});
    };

    async function handleSubmit (e) {
        e.preventDefault();
        setSubmit(true);

        let url = `https://docs.google.com/forms/u/1/d/e/1FAIpQLScPIU2siiKK8hcVgP_VrUVLXDZ6WVaHexS-V2738Lol0C4brA/formResponse?entry.1271105453=${fieldData["entry.1271105453"]}&entry.997699616=${fieldData["entry.997699616"]}&entry.724193911=${fieldData["entry.724193911"]}`;

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }

    if (!submitted) {
        return (
            <div id = "contact" className="bg text-center pt-5 mb-3 section">
                <h1>Contact Us</h1>
                <Form onSubmit={handleSubmit} className='w-50 m-auto align-text-center'>
                    <Row className="pt-5 mb-3">
                        <Form.Group as={Col} controlId = "contact_form.name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control required type = "text" placeholder = "First & Last Name" name = "entry.1271105453" onChange = {handleChange("entry.1271105453")}></Form.Control>
                        </Form.Group>
                        <Form.Group as = {Col} controlId = "contact_form.email">
                            <Form.Label >Email</Form.Label>
                            <Form.Control required type = "email" placeholder = "name@email.com" name = "entry.997699616" onChange = {handleChange("entry.997699616")}></Form.Control> 
                        </Form.Group>
                    </Row>

                    <Row className="pt-5 mb-3">
                        <Form.Group as = {Col} controlId = "contact_form.message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control required as = "textarea" rows={5} placeholder = "Write message here..." name = "entry.724193911" onChange = {handleChange("entry.724193911")}></Form.Control>                    
                        </Form.Group>
                    </Row>

                    <Row className="pt-5 mb-3 w-25 m-auto">
                        <Button variant="light" type="submit">Submit</Button>
                    </Row>
                </Form>

            </div>
        );
    } else {
        return (
            <div className="bg text text-center pt-5 mb-3">
                <h1>Your message has been submitted. We will get back to you shortly!</h1>
            </div>
        );
    }
}

export default ContactUs;