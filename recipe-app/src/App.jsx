import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import Login from './components/Login';
import FavoritesPage from './components/Favorites';
import RecipeList from './components/RecipeList';

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
                <Routes>
                    <Route path='/' element={<RecipeList />} />
                    <Route path='/favorites' element={<FavoritesPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/add-recipe' element={<RecipeForm />} />
                </Routes>
            </main>
          </div>  
        </Router>
    );
}

export default App;
