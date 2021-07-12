import "./PageTree.css"
import image1 from "../../../img/Group 247.svg"
import image2 from "../../../img/Group 248.svg"
import image3 from "../../../img/Group 249.svg"
import image4 from "../../../img/Group 250.svg"

function PageTree() {
    return(
        <div className="container">
            <div className="chooseText mb-5">
                <p className="textP text-center">Why you choose us!</p>
                <p className="text-center textPass">Naturally, it’s becoming even more important for hotel and hospitality brands to stand out from the<br/> crowd. Content marketing remains a key way for hotels to do this.</p>
            </div>
                <div className="d-flex justify-content-center">
                    <div className="booking p-3 shadow">
                        <img src={ image1 } className="image-1 p-4" />
                        <p className="bookingText">Easy booking</p>
                        <p className="bookingSmall">The booking process should<br/> include minimal steps.</p>
                    </div>
                    <div className="booking p-3 shadow">
                        <img src={ image2 } className="image-1 p-4" />
                        <p className="bookingText">Friendly interface</p>
                        <p className="bookingSmall">A hotel booking engine with<br/> a good user-friendly.</p>
                    </div>
                    <div className="booking p-3 shadow">
                        <img src={ image3 } className="image-1 p-4" />
                        <p className="bookingText">Responsibility</p>
                        <p className="bookingSmall">You should be able to add<br/> rooms to your system.</p>
                    </div>
                    <div className="booking p-3 shadow">
                        <img src={ image4 } className="image-1 p-4" />
                        <p className="bookingText">Quick order supply</p>
                        <p className="bookingSmall">The booking process should<br/> include minimal steps.</p>
                    </div>
                </div>
        </div>
    );
}

export default PageTree;