import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";


function Gallery() {

    const [images, setImages] = React.useState([])
    
    React.useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get('http://localhost:3003/gallery');
            console.log("response", response.data[0]);
            setImages(response.data);
        } catch (error) {
            console.error("Błąd podczas pobierania obrazów:", error);
        };
      };
      console.log("Zaktualizowany stan images:", images);
      fetchData();
      }
    , [])


    return (
        <>
        <h2>Galeria moich obrazów</h2>
        <ImageList sx={{ width: "100%", height: 450 }} cols={3} gap={2}>
      {images && images.map((image, index) => (<>
        <ImageListItem key={index}>
         <img 
         src={image.fileUrl}
         alt={image.fileName}
          />
        </ImageListItem>
      </>))}
    </ImageList>
      </>
    );
}
   

export default Gallery;

/*
 <img
            srcSet={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format`}
            alt={image}
            loading="lazy"
          />
*/
