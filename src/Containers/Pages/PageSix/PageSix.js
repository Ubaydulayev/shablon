import "./PageSix.css"

function PageSix() {
    return(
        <div className="container">
            <div className="text-center pageSix">
                <p className="pageSixSmallText">STAY IN TOUCH</p>
                <p className="pageSixText mt-3">Join our email. First to know about specials,events and more!</p>
                <input className="inputPageSix mt-4 " placeholder="Enter your email address"></input>
                <button className="btn btn-primary pageSixButton">Subscribe</button>
            </div>
        </div>
    );
}

export default PageSix