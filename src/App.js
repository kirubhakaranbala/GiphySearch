import React from 'react';
import SearchBar from './component/search';  
import GifList from './component/GifList';
import './App.css';
import Navbar from './component/Navbar';
import Challange from './component/challange';
  
const GIPHY_KEY = 'qPHe5dsB7duZMRDZQptPMXea3IIYN8VZ';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
        gifs: [],
        limit:25,
        secretAcitve: false,
        term:''               
    };
   }

  componentDidMount() {   
    this.scrolledCheck();
  } 
  
  setLimit=(limit,term)=>{
  this.setState({term:term,gifs:[],limit:limit});
  }

  async fetchingData(a,term) {
    const url =`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${GIPHY_KEY}&limit=${this.state.limit + a}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;      
  }

  handleTermChange= () => {
    if (this.state.limit % 2 == 0) {   
      this.fetchingData(5,this.state.term)
          .then(newData => {
              this.setState({
                  gifs: newData.data,
                  secretAcitve: true,
                  limit: this.state.limit + 5
              })      
              setTimeout(() => {
                        this.setState({
                            secretAcitve: false
                        })
                    }, 800)
                      
          })
          
      } else {
      
      this.fetchingData(5,this.state.term)
          .then(newData => {
              this.setState({
                  gifs: newData.data,
                  limit: this.state.limit + 5
              })
          })
          }

  }

  scrolledCheck=() =>{     
      
    this.list.addEventListener('scroll', () => {
      
        let scrollCheck = this.list.scrollHeight -  this.list.scrollTop -  this.list.clientHeight < 100;
        if (scrollCheck) {
        this.handleTermChange()
        }
    })
  }

  render() {
    return (
      <div ref={div => this.list = div} className="list">
      <Navbar />
      <div className="container">       
       <div className="row" >
        <SearchBar limit={this.setLimit} onTermChange={this.handleTermChange} />        
        <GifList gifs={this.state.gifs} load={this.loadmore}/>
        <Challange active={this.state.secretAcitve} />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
