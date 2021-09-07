import React from 'react';
import Books from './Books';

const Hero = ({handleLogout}) =>{
    return (
        <div className='hero'>
            <nav>
                <h2>Team 0X64 Library</h2>
                <div className='left_side'>
                    <input className='books_search' placeholder='search for books'></input>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </nav>
            <div className='book_list'>
               <Books />
            </div>
        </div>

    )
}

export default Hero;