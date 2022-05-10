import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Muniba's Todo's</h1>
        <ul> 
          <li> walk the dog </li>
          <li> take out the trash</li>
          <li> Workout</li>
        </ul>
        <form>
          <input/>
          <button> Add </button>
        </form>
         <button> Clear </button>
      </div>
    
    )
  }
}
