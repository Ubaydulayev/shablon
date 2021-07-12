import "./PageFour.css"
import mebel from "../../../img/Rectangle 15.png"
import mebel2 from "../../../img/Rectangle 17.png"
import mebel3 from "../../../img/Rectangle 19.png"
import mebel4 from "../../../img/Rectangle 21.png"
import mebel5 from "../../../img/Rectangle 22.png"

function PageFour() {
    return(
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="textGallery">
                        <p className="headText">About hotel gallery</p>
                        <p className="textPass">While some of these examples are real – actually<br/> offering guests a stay in the locations advertised – it’s<br/> mainly just a way.</p>
                        <button className="btn btn-primary">View more</button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="theDetails">
                        <p className="textDetails ms-2 mt-1">Lux: Room <span className="smallDetails">$60 night</span></p>
                        <button className="btn btn-primary buy ms-5 p-2">Buy now</button>
                    </div>
                    <img src={ mebel } className="mebel mb-4" />
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="theDetails">
                        <p className="textDetails ms-2 mt-1">Mini Room <span className="smallDetails">$70 night</span></p>
                        <button className="btn btn-primary buy ms-5 p-2">Buy now</button>
                    </div>
                    <img src={ mebel2 } className="mebel mb-4" />
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="theDetails">
                        <p className="textDetails ms-2 mt-1">Stande Room <span className="smallDetails">$65 night</span></p>
                        <button className="btn btn-primary buy ms-5 p-2">Buy now</button>
                    </div>
                    <img src={ mebel3 } className="mebel mb-4" />
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="theDetails">
                        <p className="textDetails ms-2 mt-1">Single Room <span className="smallDetails">$55 night</span></p>
                        <button className="btn btn-primary buy ms-5 p-2">Buy now</button>
                    </div>
                    <img src={ mebel4 } className="mebel mb-4" />
                </div>
                <div className="col-lg-6 col-md-4 col-sm-2">
                    <div className="theDetails">
                        <p className="textDetails ms-2 mt-1">Elite Room <span className="smallDetails">$65 night</span></p>
                        <button className="btn btn-primary buy ms-5 p-2">Buy now</button>
                    </div>
                    <img src={ mebel5 } className="mebel mb-4" />
                </div>
            </div>
        </div>
    );
}

export default PageFour