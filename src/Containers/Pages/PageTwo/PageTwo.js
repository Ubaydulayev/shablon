import "./PageTwo.css";
import backDrawing from "../../../img/Rectangle 13.png"
import frontDrawing from "../../../img/Rectangle 12.png";

function PageTwo() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-lg-7 col-md-8">
                    <div className="drawing">
                        <img src={ backDrawing } className="backDrawing" />
                        <img src={ frontDrawing } className="frontDrawing" />
                    </div>
                </div>
                <div className="col-sm-8 col-lg-5 col-md-4">
                    <p className="day">DREAM HOLIDAYS</p>
                    <p className="dreamDay">Enjoy unforgettable experiences in dream hotels.</p>
                    <button className="btn btn-primary">View more</button>
                </div>
            </div>
        </div>
    );
}

export default PageTwo;