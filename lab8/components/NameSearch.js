// import React from "react";

class NameSearch extends React.Component {
    nameGrabber(event){
        event.preventDefault();
                    
        let formName = document.querySelector("#pokeName");
        
        fetch("/api/pokemon/name/" + formName.value).then((res) => {
            return res.json();

        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");
            
            if(processed.error) {
                reporting.innerHTML = "You're a fake, that\'s not a real name!";
            } else {
                reporting.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
            }
        });
    };
    render() {
        return(
            <div>
                <h1>Give me your name</h1>
                <input type="text" id="pokeName"/>
                <button>Submit</button>
                <div id="reportingArea"></div>
            </div>  
        );
    };
}

export default NameSearch;