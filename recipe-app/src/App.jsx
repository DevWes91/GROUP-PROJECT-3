import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import Login from './components/Login'; 
import FavoritesPage from './components/Favorites';
import RecipeList from './components/RecipeList';
import RecipeCard from './components/RecipeCard';


function App() {
    return (
        <Router>
          <div className='App'>
            <Header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/favorites'>Favorites</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/add-recipe'>Add Recipe</Link>
                </nav>
            </Header>
            <main>
            <Switch>
                <Route exact path='/' component={RecipeList} />
                <Route path='/favorites' component={FavoritesPage} />
                <Route path='/login' component={Login} />
                <Route path='/add-recipe' component={RecipeForm} />
            </Switch>
          </main>
         </div>  
        </Router>
    );
}

export default App;