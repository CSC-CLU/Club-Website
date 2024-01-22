import Header from "./content_header"
import ContactContent from "./contact_content";
import Officer_Contact_Info from "../../../../content/officer_contact_info"

function Contact() {
    return (
        <div className="contact-page">
            <Header></Header>
            <ContactContent officerList= {Officer_Contact_Info}></ContactContent>
        </div>
    );
}

export default Contact;