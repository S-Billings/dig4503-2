class Home extends React.Component {

    getName() {
      let formName = document.querySelector("#pokeName");
      fetch("/api/pokemon/name/" + formName.value)
      .then((res) => { return res.json(); } )
      .then((processed) => {
        let resultElement = document.querySelector("#reportingArea");
        if(processed.error) {
          resultElement.innerHTML = "You're a fake, that\'s not a real name!";
        } else {
            "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
        }
      });
    }
    getId() {
        let formId = document.querySelector("#pokeId");

        fetch("/api/pokemon/id/" + formId.value)
        .then((res) => { return res.json(); } )
        .then((processed) => {
          let resultElement = document.querySelector("#reportingArea");
          if(processed.error) {
            resultElement.innerHTML = "You're a fake, that\'s not a real number!";
          } else {
            resultElement.innerHTML = "According to my pokedex, " + processed.id+ ", you\'re a " + processed.name + "! I knew it!";
          }
        });
      }
  
    render() {
      return (
        <div>
            <h1>Give me your name</h1>
            <input type="text" id="pokeName" />
            <button onClick={() => { this.getName() } }>SUBMIT</button>

            <h1>Give me your ID</h1>
            <input type="text" id="pokeId" />
            <button onClick={() => { this.getId() } }>SUBMIT</button>
            <div id="reportingArea"></div>
        </div>
      );
    }
  }
  
  export default Home;

  /* 
import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";

const Home = () => {
    return (
        <div>
            <NameSearch/>
            <IdSearch/>
            <div id = "reportingArea"></div>
        </div>
    );
}

export default Home
*/