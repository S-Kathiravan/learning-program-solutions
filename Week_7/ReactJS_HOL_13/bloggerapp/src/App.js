import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  const [view, setView] = useState('all'); 

  const renderView = () => {
    switch (view) {
      case 'courses':
        return <CourseDetails />;
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      default:
        return (
          <div className="container">
            <div className="section"><CourseDetails /></div>
            <div className="section"><BookDetails /></div>
            <div className="section"><BlogDetails /></div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={() => setView('all')}>Show All</button>
        <button onClick={() => setView('courses')}>Course Details</button>
        <button onClick={() => setView('books')}>Book Details</button>
        <button onClick={() => setView('blogs')}>Blog Details</button>
      </nav>
      {renderView()}
    </div>
  );
}

export default App;