import "./PageSeven.css"
import logo from "../../../img/687abebf7d05bc6f1a807ae8ccf81c63 1.png"

function PageSeven(){
    return(<>
        <img src={ logo } className="logoPageSeven ms-2" />
        <div className="container mb-5">
            <div className="PageSeven d-flex justify-content-between">
                <div className="interesting">
                    <p className="rayal">Rayal Park</p>
                    <p className="textPass">Travel deals on hotels,<br/> flights, vacation packages.</p>
                    <p className="rayalParkEmail textPass">endkik@gmail.com</p>
                </div>
                <div className="interesting">
                    <p className="rayal">Home</p>
                    <p className="textPass">Accessibility</p>
                    <p className="textPass">Lertifiotion</p>
                    <p className="textPass">Knowledge</p>
                </div>
                <div className="interesting">
                    <p className="rayal">Pages</p>
                    <p className="textPass">Blogs</p>
                    <p className="textPass">Careers</p>
                    <p className="textPass">Communing</p>
                </div>
                <div className="data">
                    <p className="rayal">SUBSCRIBE</p>
                    <input className="inputPageSeven" placeholder="Enter your email address"></input>
                    <button className="btn btn-primary pageSevenButton">Subscribe</button>
                </div>
            </div>
        </div>
    </>
    );
}

export default PageSeven