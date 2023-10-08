import Header from "../components/contact_page/header"
import ContactContent from "../components/contact_page/content";
import Officer_Contact_Info from "../../content/officer_contact_info"

function Contact() {
    return (
        <div className="contact-page">
            <Header></Header>
            <ContactContent officerList= {Officer_Contact_Info}></ContactContent>
        </div>
    );
}

export default Contact;