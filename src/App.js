import React, { useEffect, useState } from "react";
import ImagesCard from "./Components/ImagesCard"
import ImageSearch from "./Components/ImageSearch";

const App = () => {
  const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [term, setTerm] = useState('');
    console.log(images);
    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=22018298-8710df9dd49149c1dcd1f83d4&q=${term}&image_type=photo&pretty=true`)
        .then(res => res.json())
        .then(data => {
            setImages(data.hits);
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }, [term])

  return (
        <div className='container mx-auto'>
          <ImageSearch searchText={(text) => setTerm(text)}/>
          {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Image Found!</h1>}
          {isLoading ? 
          <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1>:
          <div className="grid grid-cols-3 gap-4">
            {images.map(image => 
              <ImagesCard key={image.id} image={image}/>
              )}
          </div>
             }
        </div>
  );
}

export default App;
