import Card from "./components/card";
import "./style.css"


const App = () => {
  let photos = [
    {
      url: "https://images.unsplash.com/photo-1746310783422-16df7622e7c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D",
      content: "image 1"
    },
    {
      url: "https://images.unsplash.com/photo-1744124371777-e7b5984deb77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D",
      content: "image 2"
    },
    {
      url: "https://images.unsplash.com/photo-1745276242272-18e54ab3c4b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NHx8fGVufDB8fHx8fA%3D%3D",
      content: "image 3"
    }
  ];

  return (
    <>
      <div className="card-container">
        {photos.map((photo, index) => (
          <Card key={index} url={photo.url} content={photo.content} />
        ))}
      </div>
    </>
  );
};

export default App;

// why is photos inside curly braces because
// inside return = inside jsx
// now html if written inside jsx should be written inside {}

