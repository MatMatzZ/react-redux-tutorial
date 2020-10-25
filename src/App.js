import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
//import store from './redux/store'
import store from './redux/sliceStore'
import CakeContainer from './components/CakeContainer';
//import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import { SimpleCake } from './redux/simpleCake/SimpleCake';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer/> */}
        {/* <UserContainer/> */}
        <SimpleCake/>
        {/* <NewCakeContainer/>
        <CakeContainer></CakeContainer>
        <IceCreamContainer/> */}
      </div>
    </Provider>
  );
}

export default App;
