import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";
import BasicModal from "./BasicModal";

function Gallery() {

    const [images, setImages] = React.useState([])

    const [selectedImage, setSelectedImage] = React.useState(null);
      
    function handleClickOpen(event) {
      const {src, alt} = event.target;
      console.log({src, alt});
      setSelectedImage({src, alt})
    }

    
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
         key={index}
         src={image.fileUrl}
         alt={image.fileName}
         onClick={handleClickOpen}
          />
        </ImageListItem>
      </>))}
    </ImageList>
    {selectedImage && 
    <BasicModal 
      open={Boolean(selectedImage)}
      src={selectedImage.src} 
      alt={selectedImage.alt} 
      onClose={() =>setSelectedImage(null)}
      />
    }
      </>
    );
}
   

export default Gallery;
