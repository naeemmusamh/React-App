import React from "react";
import ReactJson from "react-json-view";
import './History.scss';
//import If from '../If/If.js';
//import Else from '../Else/Else.js';

export default class History extends React.Component {
    state = {
        loading: true,
        people: null,
    };

         async componentDidMount(){
            let url = 'https://randomuser.me/api/?results=10';
            let response = await fetch(url);
            let data = await response.json();
            this.setState({ people: data.results, loading : false });
            console.log('data',this.state.people);
        }

        render(){

            if(this.state.loading){
                return  <div className="loading-page"></div>;
            }

            if(!this.state.people){
                return <div> 
                didn't find any data
                </div>;
            }

            return (
                <>
                    <div className="form">
                        <form>
                            <input type="text" />
                            <input type="submit" />
                        </form>
                    </div>
                    <div className="data">
                        <ReactJson src={this.state.people[0]} />
                     </div>
                </>
            );

}

}

//<If condition={this.state.loading} >
// <div> loading.... </div>
//  <div>
//      <form>
//          <input type="text" />
//          <input type="submit" />
//      </form>
//  </div>
//      <div>
//          <ReactJson src={this.state.people.name.first} />
//      </div>
//  </If>
//  <Else condition={!this.state.people}>
//      <div> didn't find any data </div>
//  </Else>