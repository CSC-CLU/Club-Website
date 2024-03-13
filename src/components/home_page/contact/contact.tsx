import ContactContent from "./contact_content";
import Officer_Contact_Info from "../../../../content/officer_contact_info"

function Contact() {
    return (
        <div className="contact-page" id="contact">
            <div className="header">
                <h1>Contact Us</h1>
            </div>
            
            <ContactContent officerList= {Officer_Contact_Info}></ContactContent>
        </div>
    );
}

export default Contact;