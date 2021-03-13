import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newitem:"",
      list:[]
    }
  }
  

  deleteItem(id){
    //copy current list of items
    const list = [...this.state.list];

    //filter out item being deleted
    const updatedList = list.filter(item => item.id !=id);

    this.setState({list:updatedList})
  }
  updateInput(key, value){
    //update react state
    this.setState({
      [key]:value
    });
  }
  addItem(){
    //step 2
    //create item with unique id
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()
    };
    

    //copy current list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);

    this.setState({
      list,
      newItem:""
    })
  }

  render(){
    return(
      <div className="App">
        {/*step 1 */}
         <div>
           Add an Item...
           <br/>
           <input 
              type ='text'
              placeholder="Type item here .."
              value ={this.state.newItem}
              onChange={e=> this.updateInput("newItem", e.target.value)}
              />
              <button onClick={() => this.addItem()}>
                Add
              </button>
              {/*create add Item function */}
              {/*step 4 */}
              <br/>
              <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      {item.value}
                      <button 
                        onClick={() => this.deleteItem(item.id)}
                        >
                          x
                        </button>
                    </li>
                )
                })}
              </ul>
        </div>
        </div>
    );
  }
}
export default App;
