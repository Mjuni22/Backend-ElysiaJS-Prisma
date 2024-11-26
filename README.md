# 🌱 **Backend API Pencemaran Udara** 🌱

API ini memungkinkan pengguna untuk memantau kualitas udara di berbagai lokasi dengan data yang diambil dari dataset **Kaggle**. Dengan menggunakan data pencemaran udara real-time, aplikasi ini memberikan informasi penting tentang kondisi udara seperti **PM2.5**, **PM10**, **suhu**, dan **kelembapan**. 

Bergabunglah dalam proyek ini untuk membuat dunia lebih hijau dan lebih sehat!

---

## 📜 Deskripsi Proyek

Proyek ini adalah API backend yang menyediakan data kualitas udara berdasarkan lokasi wilayah. API ini berguna untuk aplikasi berbasis web yang ingin memberikan informasi kepada pengguna tentang tingkat pencemaran udara yang dapat mempengaruhi kesehatan mereka.

Menggunakan **dataset pencemaran udara** dari **Kaggle**, API ini menyediakan data real-time tentang polusi udara dan memungkinkan pengguna untuk menganalisis data tersebut berdasarkan standar kualitas udara global.

### 🚀 Fitur Utama

- **Data Real-Time**: Akses data pencemaran udara yang selalu terupdate.
- **Lokasi Berbasis**: Ambil data berdasarkan koordinat geografis (latitude dan longitude).
- **Filter Kualitas Udara**: Menyaring hasil berdasarkan nilai PM2.5, PM10, dan lainnya.
- **Analisis Kondisi Udara**: Dapatkan informasi suhu dan kelembapan untuk lokasi tertentu.

---

## ⚙️ Prasyarat

Sebelum mulai, pastikan Anda memiliki semua perangkat dan software yang dibutuhkan untuk menjalankan API ini:

- **Bun** – Paket manajer yang lebih cepat untuk JavaScript/TypeScript, digunakan untuk menjalankan dan mengelola proyek ini.
- **Elysia** – Framework web untuk membangun API secara efisien dan cepat.
- **Prisma** – ORM (Object Relational Mapping) untuk memudahkan pengelolaan database.

---

## 📥 Instalasi

Ikuti langkah-langkah di bawah ini untuk menginstal dan menjalankan project ini:

### 1. **Clone Repositori Ini**

Clone repositori ini ke mesin lokal Anda dengan menggunakan Git:

```bash

git clone https://https://github.com/Mjuni22/Backend-ElysiaJS-Prisma.git

cd Backend-ElysiaJS-Prisma

bun install

bun run dev
```

### 1. **Pastikan sudah mempunya database**

```ENV

DATABASE_URL="YourDatabaseSchema"

```
