import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import RecipeForm from './components/RecipeForm';
import Login from './components/Login';
import FavoritesPage from './components/Favorites';
import RecipeList from './components/RecipeList';
import Home from './components/Home';

function App() {
    return (
        <Router>
          <div className='App'>
            <Header/>
             <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/components/Favorites' element={<FavoritesPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/add-recipe' element={<RecipeForm />} />
                </Routes>
            </main>
          </div>  
        </Router>
    );
}

export default App;
