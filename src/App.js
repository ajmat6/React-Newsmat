import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import{
  BrowserRouter,
  Routes,
  Route,
  Link
}from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
  //to change pagesize easily
  pagesize = 6;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  render() {
    return (
      <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar //for loading bar when we swtich during the routing
        color='#f11946'
        height={3} //to increase height of the loading bar
        progress={this.state.progress} //to change progress
        />
        <Routes>
          //key element has to be passed to differentiate that this News component is different from the previous one otherwise it will continue to show previous News component
          <Route path='/' element={<News setProgress={this.setProgress}  key='general' pageSize={this.pagesize} country='in' category="general"/>}/>
          <Route path='/sports' element={<News setProgress={this.setProgress}  key='sports' pageSize={this.pagesize} country='in' category="sports"/>}/>
          <Route path='/entertainment' element={<News setProgress={this.setProgress}  key='entertainment' pageSize={this.pagesize} country='in' category="entertainment"/>}/>
          <Route path='/science' element={<News setProgress={this.setProgress}  key='science' pageSize={this.pagesize} country='in' category="science"/>}/>
          <Route path='/business' element={<News setProgress={this.setProgress}  key='business' pageSize={this.pagesize} country='in' category="business"/>}/>
          <Route path='/health' element={<News setProgress={this.setProgress}  key='health' pageSize={this.pagesize} country='in' category="health"/>}/>
          <Route path='/technology' element={<News setProgress={this.setProgress}  key='technology' pageSize={this.pagesize} country='in' category="technology"/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

