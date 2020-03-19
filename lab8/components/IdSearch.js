// import React from 'react';

class IdSearch extends React.Component {
    idGrabber(event){
        
        let formId = document.querySelector("#pokeId");
                    
        fetch("/api/pokemon/id/" + formId.value).then((res) => {
            return res.json();
        
        }).then((processed) => {
            let reporting = document.querySelector("#reportingArea");
                
            if(processed.error) {
                reporting.innerHTML = "You're a fake, that\'s not a real number!";
            } else {
                reporting.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
            }
        });
    };
    render(){
        return (
            <div>
                <form onSubmit={this.idGrabber}>
                    <h1>Give me your ID</h1>
                    <input type="text" id="pokeId"/>
                    <button>Submit</button>
                </form>
            </div>
        );
    };
}

export default IdSearch;