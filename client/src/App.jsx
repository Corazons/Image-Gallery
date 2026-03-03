import { useEffect, useState } from "react";
import Card from "./components/Card"
const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.unsplash.com/photos?per_page=20&client_id=" + ACCESS_KEY)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">📷 Stock Image Gallery</h1>
        <p className="text-gray-600">Simple image gallery built with React & public API</p>
      </header>

      {loading ? (
        <p className="text-center text-gray-500">Loading images...</p>
      ) : (
        <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card key={image.id + index} image = {image}></Card>
          ))}
        </main>
      )}

      <footer className="mt-10 text-center text-xs text-gray-400">
        Images from Unsplash API
      </footer>
    </div>
  );
}
