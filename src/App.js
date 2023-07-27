import React,{Component} from "react";
import CardList from "./CardList";
import Scroll from "./Scroll";
import Searchbox from './Searchbox';




class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield : ''
        }
    }

    onsearch=(event)=>{
        this.setState({searchfield:event.target.value})
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(users=>this.setState({'robots':users}))
    }

    render(){
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1>Loading</h1>
        }
        else{

        
            return(
                <div className="tc">
                    <h1>ROBOFRIENDS</h1>
                    <Searchbox onsearch={this.onsearch}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            ); 
        }
    }
}

export default App;