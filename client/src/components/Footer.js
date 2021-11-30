import  "../css/footer.css";

function Footer(){
    return (
        <footer>
            <div className="footerCredit">
                Using<a href='https://rawg.io/' target="_blank" rel="noreferrer"> RAWG api </a>
            </div>
            <div className="footerCredit">Icons:   
                <a href="https://www.flaticon.com/" title="Flaticon"> Flaticon</a>
            </div>
        </footer>
    );
}

export default Footer;