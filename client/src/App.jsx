import { useEffect, useState } from "react";
import Card from "./components/Card";
import CardSkeleton from "./components/CardSkeleton";
import Pagination from "./components/Pagination";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const [lastPage, setLastPage] = useState(1);
  const [total, setTotal] = useState(0);

  const LIMIT = 20;

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:8000/photos?page=" + page)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.data);
        setLastPage(data.total_pages ?? 1);
        setTotal(data.total);
        setPage(data.current_page);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-6xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          📷 Stock Image Gallery
        </h1>
        <p className="text-gray-600">
          Simple image gallery built with React & public API
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {loading
          ? Array.from({ length: LIMIT }).map((_, i) => (
              <CardSkeleton key={i} />
            ))
          : images.map((image, index) => (
              <Card key={image.id + index} image={image} />
            ))}
      </main>

      <Pagination page={page} lastPage = {lastPage} setPage={setPage} ></Pagination>

      <footer className="mt-10 text-center text-xs text-gray-400">
        Images from Unsplash API
      </footer>
    </div>
  );
}