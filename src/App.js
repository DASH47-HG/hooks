import './App.css';
 import MoviesList from  './Components/MoviesList';
 import MovieCard from './Components/MovieCard';
 import Filter from './Components/Filter';
 import Navbar from './Components/Navbar';
 import React, {useState} from 'react';
 

function App() {
  const [movies, setMovies] = useState([
    { id: 1, 
    Title: "Money Heist",
    Description :"begins with the aftermath of a failed bank robbery by a woman using the alias tokyo as a man called the Professor saves her from being caught by the police.",
    PosterURL : "https://www.netflix.com/watch/80205342?trackId=13752289&tctx=0%2C0%2Cf740642578da3556ccfec1c0afd985ce87befb9e%3A01e1f612d37c21c339209582689f137f35546c18%2Cf740642578da3556ccfec1c0afd985ce87befb9e%3A01e1f612d37c21c339209582689f137f35546c18%2C%2C%2C%2C",
    rating : "5",
    ImageMovies : "https://i2.wp.com/tatvabodhini.com/wp-content/uploads/2021/09/Money-Heist-5-review.jpg?fit=1200%2C660&ssl=1"
    },

    { id: 4, 
      Title: "Shooter",
      Description :"A former sniper returns to service to foil an impending plot against the President of the United States, but finds himself charged with attempted murder.",
      PosterURL : "https://www.netflix.com/tn-fr/title/80109194",
      rating : "2",
      ImageMovies : "https://cache.pressmailing.net/thumbnail/story_hires/9815f03b-6202-4442-adb5-420996e04e40/image.jpg"
    },
    
    { id: 6, 
      Title: "Breaking Bad",
      Description :"A chemistry teacher with cancer teams up with a former student to make and sell methamphetamine to secure his family's financial future.",
      PosterURL : "https://www.netflix.com/tn-fr/title/70143836",
      rating : "5",
      ImageMovies : "https://fr.web.img3.acsta.net/r_1280_720/pictures/18/07/23/11/26/2778599.jpg"
      },

    
      
  ]);


  
        const [movie, setMovie] = useState({
          Title: "",
          ImageMovies: "",
          Descreption: "",
          PosterURL: "",
          Rating:""
        });

      const addMovie = (movieAdd) => {
        setMovies([...movies, movieAdd]);
      };

      const handleSearch= (Title,rating) =>{
        const mv = movies.filter((item) => (item.Title.includes(Title) ) && (item.rating >= rating)) 
        setMovies(mv)
      }

      const handleChange = (e) =>{
        setMovie({...movie, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) =>{
        e.preventDefault()
        addMovie({...movie})
      };
  return (
    <div className="App">
      <Navbar addMovie={addMovie} handleSearch={handleSearch} />
      <MoviesList  movies={movies}/>
      <div className="addMovies">
      <input type="text" placeholder="Title" name="Title"  onChange={ handleChange}></input>
      <input type="text" placeholder="Description" name="Description" onChange={ handleChange} ></input>
      <input type="text" placeholder="URL" name="PosterURL" onChange={ handleChange}></input>
      <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={ handleChange}></input>
      <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>Add</button>
     </div> 
    </div>
  );
}

export default App;