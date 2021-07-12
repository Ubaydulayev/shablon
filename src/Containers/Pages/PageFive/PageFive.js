import "./PageFive.css"
import belgi from "../../../img/Group.svg"
import activeBelgi from "../../../img/Group — копия.svg"
import person1 from "../../../img/Ellipse 7.png"
import person2 from "../../../img/Ellipse 7-2.png"
import person3 from "../../../img/Ellipse 7-3.png"

function PageFive() {
    return(
        <div className="container p-5">
            <div className="d-flex justify-content-between pageFive">
                <p className="pageFiveText">What our client say</p>
                <button className="btn btn-primary fiveButton">View All</button>
            </div>
            <div className="row">
                <div className="col-xl-12 col-lg-10 col-md-12 col-sm-8 col-6 ms-5">
                    <div className="allPersons d-flex">
                        <div className="pageFiveCards ms-3">
                            <div className="person1">
                                <img src={ belgi } className="belgi" />
                                <img src={ person1 } className="person-1 rasm mt-3 mb-3" />
                                <p className="textPass text-center">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit Ultrices.</p>
                                <p className="name text-center">David Porye</p>
                                <p className="email text-center">davidporye@</p>
                            </div>
                        </div>
                        <div className="pageFiveCards ms-3 me-3">
                                <div className="person2">
                                <img src={ activeBelgi } className="belgi" />
                                    <img src={ person2 } className="person-2 rasm mt-3 mb-3" />
                                <p className="textPass text-center">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit Ultrices.</p>
                                <p className="name text-center">Ravi shankor</p>
                                <p className="email text-center">ravishankor@</p>
                            </div>
                        </div>
                        <div className="pageFiveCards">
                            <div className="person3">
                                <img src={ belgi } className="belgi" />
                                    <img src={ person3 } className="person-3 rasm mt-3 mb-3" />
                                <p className="textPass text-center">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit Ultrices.</p>
                                <p className="name text-center">Thomas lew</p>
                                <p className="email text-center">thomaslew@</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageFive