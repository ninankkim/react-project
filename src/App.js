import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/createStore';
import InputSection from './components/InputSection';
import NotesSection from './components/NotesSection';
import './App.scss';

//I created the foundation for what the login and register page will look like
//So now I have to create routes so that the user register then login
// And then they can route to register and then login again
// And then route to their notes pages 

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>My Notes</h1>
        <InputSection />
        <div className="line"></div>
        <NotesSection />
      </div>
    </Provider>    
  );
}

export default App;

// const App = () => {
//   return (
// <React.Fragment>
//     <Header />
//     <div className="container my-5">
//       <Switch>
//       <Route exact path="/auth" component={AuthPage} />
//       <Route exact path="/notes" component={NotesPage} />
//       <Route exact path="/edit-note" component={EditNotePage} />
//       <Route exact path="/edit-note/:noteId" component={EditNotePage} />
//       <Redirect to="/auth" />
//       </Switch>
//     </div>
// </React.Fragment>
//   );
// };
