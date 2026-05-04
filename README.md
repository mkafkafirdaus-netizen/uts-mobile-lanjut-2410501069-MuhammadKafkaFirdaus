# uts-mobile-lanjut-2410501069-MuhammadKafkaFirdaus
ResepKita - Mini Catalog App

Profil
- Nama: Muhammad Kafka Firdaus
- NIM: 2410501069
- Kelas: B

Tema A: ResepKita - Katalog Resep Kuliner

Tech Stack
- React Native (Expo SDK)
- JavaScript
- React Navigation
- Context API + useReducer
- Fetch API

Dependencies
    "@expo/vector-icons": "^15.0.3",
    "@react-navigation/bottom-tabs": "^7.15.11",
    "@react-navigation/native": "^7.2.2",
    "@react-navigation/native-stack": "^7.14.12",
    "expo": "~54.0.33",
    "expo-status-bar": "~3.0.9",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0"

Cara Install & Run
- git clone (link repo ini)
- cd ResepKitaApp
- npm install
- npx expo start

Screenschot
- Terdapat pada folder screenshot 

Video Demo
- Link: https://drive.google.com/file/d/10xqlmXD7MFuHZTk2Unowd7mC-e6fzOlK/view?usp=drivesdk

State Management
- Aplikasi ini menggunakan Context API + useReducer untuk mengelola state favorit.
Alasan Pemilihan:
- Lebih sederhana dibanding Redux
- Tidak perlu konfigurasi tambahan
- Cocok untuk aplikasi skala kecil
- Mudah digunakan untuk global state seperti favorit
Kekurangan:
- Kurang optimal untuk aplikasi besar
- Tidak memiliki tools debugging seperti Redux DevTools

API
- Menggunakan API dari: https://www.themealdb.com/api.php
Endpoint:
- /categories.php
- /filter.php?c=<kategori>
- /lookup.php?i=<id>
- /search.php?s=<keyword>

Referensi
- https://reactnavigation.org/docs/getting-started/
- https://docs.expo.dev/
- https://www.themealdb.com/api.php
- https://stackoverflow.com/

Refleksi
Selama pengerjaan aplikasi ini, saya mengalami beberapa kesulitan terutama dalam memahami konsep navigasi menggunakan React Navigation dan pengelolaan state menggunakan Context API. Pada awalnya, saya sering mengalami error seperti “Element type is invalid” yang disebabkan oleh kesalahan import dan export komponen. Selain itu, saya juga sempat mengalami kendala dalam menampilkan data dari API karena struktur response yang belum dipahami dengan baik. Dalam proses debugging, saya belajar bagaimana cara membaca error message dan menelusuri penyebabnya secara sistematis. Saya juga belajar bagaimana mengatur struktur folder agar lebih rapi dan mudah dipahami. Fitur yang cukup menantang adalah implementasi state management untuk favorit, karena harus memastikan data tersimpan dengan benar dan dapat dihapus tanpa error. Selain itu, validasi pada fitur search juga memberikan pemahaman tentang pentingnya user input handling. Dari proyek ini, saya mendapatkan pemahaman yang lebih baik tentang pengembangan aplikasi mobile menggunakan React Native, termasuk penggunaan API, navigasi antar screen, dan pengelolaan state sederhana.
