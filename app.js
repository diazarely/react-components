
class Nav extends React.Component{
    render(){
        return(
            <div className = "nav">
                <h4> Dashboard</h4>
                <h4> Widget</h4>
                <h4> Reviews</h4>
                <h4> Customers</h4>
            
            </div>
        )
    }
}

class Reviews extends React.Component{
    render(){
        return(
            <div className = "reviews">
                <h4> Reviews</h4>
                <h2> 1,288</h2>
            
            </div>
        )
    }
}

class Rating extends React.Component{
    render(){
        return(
            <div className = "rating">
                <h4> Average Rating</h4>
                <h2> 4.6</h2>
            
            </div>
        )
    }
}
class Analysis extends React.Component{
    render(){
        return(
            <div className = "analysis">
                <h4> Analysis</h4>
                <h2> 960</h2>
                <h2> 160</h2>
                <h2> 122</h2>
            
            </div>
        )
    }
}

class Map extends React.Component{
    render(){
        return(
            <div className = "map">
               
            
            </div>
        )
    }
}

class Visitors extends React.Component{
    render(){
        return(
            <div className = "visitors">
                <h4> Website Visitors</h4>
                <h2> 821</h2>
            < Map />
            </div>
        )
    }
}

class Back extends React.Component{
    render(){
        return(
            <div className = "back">
                <Nav />
              <Reviews />
              <Rating />
              <Analysis />
              <Visitors />

            </div>
        )
    }
}


class App extends React.Component{
    render() {
      return (
          <div>
              
              < Back />
          </div>
      )
    }
}

  
  ReactDOM.render(
    // <h1>{message}</h1>,
    <App />,
    document.querySelector('.container')
);

