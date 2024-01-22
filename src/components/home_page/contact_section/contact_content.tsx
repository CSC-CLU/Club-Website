interface Props{
    officerList: string[];
}

function ContactContent({officerList} : Props){

    let listElements:any[] = [];

    for (let i = 0; i < officerList.length - 1; i+=2){
        if (officerList[i+1].length > 0){
            listElements.push(
                <li>
                    <b>
                        {officerList[i]}
                    </b>
                    
                    <a href = {"mailto:" + officerList[i+1]}>
                        {officerList[i+1]}
                    </a>
                </li>
            );
        }
    }

    return (
        <div className='content'>
            <div className="content-card">
                <a className = "image-container" href="https://discord.gg/S3UGxBWWMJ">
                    <img src="/discord_qr_code.png"></img>
                </a>

                <p>
                    If you are interested in becoming a part of our community, feel free to join our club Discord! Alternatively, you can drop by on Tuesdays at 6PM in <a href="https://www.callutheran.edu/map/d-building">D8</a> for our weekly club meetings!
                </p>

                <ul>
                    <li className="Descriptor">
                    Feel free to reach out to the club or any one of our officers below with any questions too!
                    </li>
                    {listElements}
                </ul>
            </div>
        </div>
    );
}

export default ContactContent;