import  "../css/footer.css";

// let getGames = function (user) {
//     let apiUrl = 'https://api.rawg.io/api/games?key=1cbc00cd5769401bbb4edd748b66b08c&dates=2019-09-01,2019-09-30&platforms=18,1,7';
  
//     fetch(apiUrl)
//         .then(function(res){
//             if (res.ok){
//                 res.json().then(function(data){
//                     console.log(data)
//                 })
//             }
//         })
//   };
//   getGames()

function Footer(){
    return (
        <footer>
            <div className="footerCredit">
                This site uses the <a href='https://rawg.io/' target="_blank" rel="noreferrer">RAWG api</a> for all information presented
            </div>
            <div className="footerCredit">Icons made by 
                <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div>
        </footer>
    );
}

export default Footer;