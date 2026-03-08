# Image Gallery

Image Gallery adalah aplikasi web sederhana untuk menampilkan koleksi gambar dalam bentuk galeri.  
Aplikasi ini mengambil data gambar dari API eksternal lalu menampilkannya dalam bentuk grid dengan sistem pagination sehingga pengguna dapat menjelajahi gambar secara efisien.

Project ini dibuat untuk mendemonstrasikan implementasi integrasi API, caching data, pagination, serta pemisahan arsitektur backend dan frontend dalam aplikasi web.

---

## Features

- Fetch gambar dari API eksternal
- Pagination data
- Grid image gallery
- Loading state menggunakan skeleton loading
- Backend dan frontend terpisah
- Caching response API untuk meningkatkan performa

---

## Tech Stack

### Backend

- PHP
- Laravel
- Redis (caching)
- REST API

### Frontend

- React
- JavaScript (ES6)
- CSS

---

## Project Structure

```
Image-Gallery
│
├── backend
│   ├── app
│   ├── routes
│   ├── controllers
│   └── config
│
├── frontend
│   ├── src
│   ├── components
│   └── pages
│
└── README.md
```

---

## How It Works

1. Frontend mengirim request ke backend untuk mengambil data gambar.
2. Backend mengambil data dari API eksternal.
3. Response dari API disimpan sementara menggunakan cache.
4. Backend mengembalikan data dalam format JSON.
5. Frontend menampilkan gambar dalam bentuk gallery grid.

---

## API Endpoints

### Get Images

```
GET /api/images?page={page}
```

### Query Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| page | integer | nomor halaman pagination |

### Example Request

```
GET /api/images?page=1
```

### Example Response

```json
{
  "current_page": 1,
  "per_page": 20,
  "total": 400,
  "total_pages": 20,
  "data": [
    {
      "id": "image_id",
      "author": "author_name",
      "download_url": "image_url"
    }
  ]
}
```

---

# Installation

## 1. Clone Repository

```
git clone https://github.com/Corazons/Image-Gallery.git
cd Image-Gallery
```

---

# Backend Setup

Masuk ke folder backend:

```
cd backend
```

Install dependency Laravel:

```
composer install
```

Copy file environment:

```
cp .env.example .env
```

Generate application key:

```
php artisan key:generate
```

Jalankan server Laravel:

```
php artisan serve
```

Backend akan berjalan di:

```
http://localhost:8000
```

---

# Frontend Setup

Masuk ke folder frontend:

```
cd frontend
```

Install dependency:

```
npm install
```

Jalankan development server:

```
npm run dev
```

Frontend akan berjalan di:

```
http://localhost:5173
```

---

## Development Notes

Beberapa konsep yang digunakan dalam project ini:

- Pagination untuk membatasi jumlah data yang dimuat sekaligus
- Skeleton loading untuk meningkatkan pengalaman pengguna saat data sedang dimuat
- Caching API response untuk mengurangi request berulang ke API eksternal
- Pemisahan backend dan frontend untuk memudahkan pengembangan

---
