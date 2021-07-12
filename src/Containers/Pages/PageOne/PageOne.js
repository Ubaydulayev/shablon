import "./PageOne.css"
import logo from "../../../img/687abebf7d05bc6f1a807ae8ccf81c63 1.png"

function PageOne() {
    return(<>
    <div className="bagroundImg">   
    <img src={ logo } className="logoOne" />
        <div className="container">
            <div className="header d-flex justify-content-between pt-5">
                <div className="logo">
                    <p className="royalPark">Rayal Park</p>
                </div>
                <div className="home">
                    <a className="active">Home</a>
                    <a className="actives">Features</a>
                    <a className="actives">Gallery</a>
                    <a className="actives">Testimonials</a>
                </div>
                <div className="menu">
                    <button className="btn btn-primary boss">Book now</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5 col-lg-5 col-md-5 col-xl-5">
                    <div className="details">
                        <p className="sereNity">SERENITY</p>
                        <h1 className="textStay">Stay with us feel like <span className="active">home</span>.</h1>
                        <p>Pet-friendly hotels are becoming increasingly popular; appealing to travellers who can’t bear to be parted.</p>
                        <button className="btn btn-primary boss">Read more</button>
                    </div>
                </div>
            </div>
                <div className="checkPoint d-flex justify-content-between p-3">
                    <div className="checks">
                        <p>Cheek in</p>
                        <p>10 Feb 2021</p>
                    </div>
                        <p className="vertical-line mt-3"></p>
                    <div className="checks">
                        <p>Cheek in</p>
                        <p>13 Feb 2021</p>
                    </div>
                        <p className="vertical-line mt-3"></p>
                    <div className="checks">
                        <p>Cheek in</p>
                        <p>15 Feb 2021</p>
                    </div>
                    <div className="checks m-3">
                        <button className="btn btn-primary">Find room</button>
                    </div>
                </div>
            </div>    
        </div>
        </>
    );
}
export default PageOne