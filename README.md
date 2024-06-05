<center>

# ReCratify Backend API

</center>

This is the documentation of The ReCratify Backend API. It is a part of the Capstone Project "ReCratify" by C241-PS077 Bangkit Academy 2024 Batch 1.

```markdown
# Prerequisites

Before running the application, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (JavaScript Runtime Environment)
- [npm](https://www.npmjs.com/) (Node Package Manager)

# Tech We Use in Capstone Project

- Hapi.js (Node.js Framework)
- MySQL (Database)
- Sequelize (Object Relational Mapper)
- nanoid (Unique ID Generator)
- bcrypt (Password Hashing)
- multer (multipart/form-data)
- jsonwebtoken (JWT Token)
- nodemailer (Email Services)
- Sequelize (Object Relational Mapper)
- ????? (Deployment)
- Cloud SQL (Database)
- Cloud Storage (Image Storage)
```

## Getting Started

To run the API on your local computer, follow these steps:

1.  Clone this repository
    ```bash
    git clone https://github.com/lintangbhanu/Backend-ReCratify.git
    ```
2.  Install the required dependencies
    ```bash
     npm install
    ```
3.  To run this project, you will need to add the following environment variables to your .env file

    ```bash
    #Database Configuration Mysql
    DB_HOST=localhost
    DB_USERNAME=root
    DB_PASSWORD=
    DB_NAME=Change this to your own database name!
    DB_PORT=3306

    #Email Service Configuration
    APP_USER=example@gmail.com
    APP_PASS=xxxx xxxx xxxx xxxx

    #JWT TOKEN
    JWT_SECRET=change this your own random token key!
    ```

4.  create your own database like this

    <a href="">
      <img src="https://drive.google.com/file/d/1ceKT_Q2JSc56rmF6xQgX-uHeB_0RL2rs" />
    </a>

    <details>
    <summary>Databse Exported File</summary>
    You can use exported file for your database. You can download the exported file [HERE](https://drive.google.com/file/d/1CLu3uy8VBCzewzWjKV1OjT7StjRDzmBn/view?usp=sharing)
    </details>

5.  Start the server

```bash
npm start
```

6. The API will be running on http://localhost:3000.
7. [You can test the API using Postman or any other API testing tool.](#endpoints)

## Endpoints

If you want to test the API, you can use the following endpoints

OR

You can use Postman to test the API. You can download the Postman documentation [HERE](https://documenter.getpostman.com/view/)

<details>
<summary>User Auth</summary>

- **Register**
  <pre>POST /register</pre>
  Request Body:

```json
{
  "username": "yourname",
  "email": "yourname@example.com",
  "password": "password",
  "verifyPassword": "password"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Registrasi berhasil dilakukan!"
}
```

- **Login**
  <pre>POST /login</pre>
  Request Body:

```json
{
  "username": "yourname",
  "password": "password"
}
```

Response Body:

```json
{
  "error": false,
  "message": "Login berhasil",
  "loginResult": {
    "userId": "73--_kblXDg",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjczLS1fa2JsWERnIiwiaWF0IjoxNzE3NjAxMjA0LCJleHAiOjE3MTc4NjA0MDR9.1ViSuoQR-AtIN22J83nmGwzqrtSwbsP2HcLF85sFHtk"
  }
}
```

- **Logout**
  <pre>POST /logout</pre>
  Response Body:

```json
{
  "status": "success",
  "message": "Logout berhasil"
}
```

</details>

<details>
<summary>User</summary>

- **Forgot Password**
  <pre>POST /forgotpassword</pre>
  Request Body:

```json
{
  "email": "yourname@gmail.com"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Kode reset telah dikirim ke email Anda."
}
```

- **Verify Code**
  <pre>POST /verifycode</pre>
  Request Body:

```json
{
  "email": "yourname@gmail.com"
}
```

Response Body:

```json
{
  "email": "yourname@example.com",
  "resetCode": "123456"
}
```

- **Reset Password**
  <pre>POST /resetpassword</pre>
  Request Body:

```json
{
  "email": "yourname@example.com",
  "newPassword": "newPassword"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Password berhasil direset"
}
```

</details>

<details>
<summary>Youtube Craft</summary>

- **Get Craft Video**
    <pre>POST /craft-data/{{Craft}}</pre>
    <pre>Authorization: Token</pre>
  Response Body:

```json
{
  "status": "success",
  "label": "cans",
  "data": [
    {
      "Youtube_ID": "26DIw3itV5k",
      "Snippet": {
        "Title": "Ide Kreatif Kaleng Bekas jadi Wadah Serbaguna || Tempat Pensil dari Kaleng Bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/26DIw3itV5k/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=26DIw3itV5k"
      }
    },
    {
      "Youtube_ID": "7gAQzBSqNkA",
      "Snippet": {
        "Title": "18 Genius Tin Can Upcycling Ideas: Transforming Trash into Treasure",
        "URL_Thumbnail": "https://img.youtube.com/vi/7gAQzBSqNkA/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=7gAQzBSqNkA"
      }
    },
    {
      "Youtube_ID": "A3wLKpZi76w",
      "Snippet": {
        "Title": "Daur Ulang Kaleng Bekas | Ide Kreatif Dari Kaleng Bekas | DIY",
        "URL_Thumbnail": "https://img.youtube.com/vi/A3wLKpZi76w/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=A3wLKpZi76w"
      }
    },
    {
      "Youtube_ID": "gsHs1kb7m-k",
      "Snippet": {
        "Title": "Recycle cans into Airplane | Recycle Craft",
        "URL_Thumbnail": "https://img.youtube.com/vi/gsHs1kb7m-k/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=gsHs1kb7m-k"
      }
    },
    {
      "Youtube_ID": "iTWJxTXItV4",
      "Snippet": {
        "Title": "SANGAT BERGUNA! Anda tidak akan membuang Kaleng ke tempat sampah setelah mengetahui ide ini.",
        "URL_Thumbnail": "https://img.youtube.com/vi/iTWJxTXItV4/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=iTWJxTXItV4"
      }
    },
    {
      "Youtube_ID": "KLM8zx2E72k",
      "Snippet": {
        "Title": "cara membuat bunga dari kaleng bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/KLM8zx2E72k/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=KLM8zx2E72k"
      }
    },
    {
      "Youtube_ID": "MObulHcfPWs",
      "Snippet": {
        "Title": "Cara Membuat Motor Mainan Dari Kaleng Bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/MObulHcfPWs/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=MObulHcfPWs"
      }
    },
    {
      "Youtube_ID": "x_7HuUJ7Ifo",
      "Snippet": {
        "Title": "Cara membuat miniatur drum set dari kaleng bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/x_7HuUJ7Ifo/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=x_7HuUJ7Ifo"
      }
    },
    {
      "Youtube_ID": "Z-uYoU3UljU",
      "Snippet": {
        "Title": "Cara Buat Celengan dari Kaleng Bekas || DIY Celengan",
        "URL_Thumbnail": "https://img.youtube.com/vi/Z-uYoU3UljU/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=Z-uYoU3UljU"
      }
    },
    {
      "Youtube_ID": "ZhXq3oOYLyA",
      "Snippet": {
        "Title": "HOW TO TURN TIN CANS INTO BEAUTIFUL DECOR",
        "URL_Thumbnail": "https://img.youtube.com/vi/ZhXq3oOYLyA/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=ZhXq3oOYLyA"
      }
    }
  ]
}
```

- **Add Favorite**
  <pre>POST /favorites</pre>
  <pre>Authorization: Token</pre>
  Request Body:

```json
{
  "userId": "W381C_FfLhJ",
  "label": "cans",
  "Youtube_ID": "ZhXq3oOYLyA"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Video successfully added to favorites list!"
}
```

- **Get User Favorite**
  <pre>GET /favorites/{{userId}}</pre>
  Authorization: Token
  Response Body:

```json
{
  "status": "success",
  "favorites": [
    {
      "Youtube_ID": "JQocEeIuKxM",
      "label": "Plastic-Bottle",
      "Snippet": {
        "Title": "Cara Membuat Celengan Dari Botol Bekas Yang Bikin Tetangga Nyinyir || Ide Kreatif",
        "URL_Thumbnail": "https://img.youtube.com/vi/JQocEeIuKxM/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=JQocEeIuKxM"
      }
    },
    {
      "Youtube_ID": "JsltDFdXETg",
      "label": "Glass-Bottle",
      "Snippet": {
        "Title": "pressed flower || kerajinan dari botol kaca bekas",
        "URL_Thumbnail": "https://img.youtube.com/vi/JsltDFdXETg/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=JsltDFdXETg"
      }
    },
    {
      "Youtube_ID": "L0sC4NzsslY",
      "label": "Cardbox",
      "Snippet": {
        "Title": "30 COOL CARDBOARD CRAFTS AND IDEAS",
        "URL_Thumbnail": "https://img.youtube.com/vi/L0sC4NzsslY/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=L0sC4NzsslY"
      }
    },
    {
      "Youtube_ID": "3j80OY0Ns2g",
      "label": "E-Waste",
      "Snippet": {
        "Title": "emas, dari limbah elektronik | gold, from electronic waste",
        "URL_Thumbnail": "https://img.youtube.com/vi/3j80OY0Ns2g/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=3j80OY0Ns2g"
      }
    },
    {
      "Youtube_ID": "5G_fqVV-cFo",
      "label": "Vegetation",
      "Snippet": {
        "Title": "Kreatif! Daun Kering Disulap Jadi Kerajinan Beromset Puluhan Juta Rupiah",
        "URL_Thumbnail": "https://img.youtube.com/vi/5G_fqVV-cFo/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=5G_fqVV-cFo"
      }
    },
    {
      "Youtube_ID": "ZhXq3oOYLyA",
      "label": "Cans",
      "Snippet": {
        "Title": "HOW TO TURN TIN CANS INTO BEAUTIFUL DECOR",
        "URL_Thumbnail": "https://img.youtube.com/vi/ZhXq3oOYLyA/hqdefault.jpg",
        "URL_Video": "https://www.youtube.com/watch?v=ZhXq3oOYLyA"
      }
    }
  ]
}
```

- **Delete Favorite**
  <pre>DELETE /favorites</pre>
  <pre>Authorization: Token</pre>
  Request Body:

```json
{
  "userId": "W381C_FfLhJ",
  "label": "Cans",
  "Youtube_ID": "ZhXq3oOYLyA"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Video successfully removed from favorites list!"
}
```

</details>

<details>
<summary>Publish</summary>

- **Upload Craft**
  <pre>POST /publish</pre>
  <pre>Authorization: Token</pre>
  Request Body:

```json
{
  "userid": "W381C_FfLhJ",
  "title": "Vas Bunga Botol Kaca",
  "description": "Caranya adalah.......",
  "file": "1717604096234_f54eb8a70d58c1c8dbce0a8f739292cb.jpg"
}
```

Response Body:

```json
{
  "message": "File uploaded successfully",
  "data": {
    "postId": "6BOOlALQFju",
    "userId": "W381C_FfLhJ",
    "title": "Frame Foto Daur Ulang",
    "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604096234_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
    "description": "Caranya adalah......."
  }
}
```

- **Get All Post**
  <pre>GET /publish</pre>
  Authorization: Token
  Response Body:

```json
{
  "status": "success",
  "message": "Berhasil mengambil semua data postingan karya!",
  "data": [
    {
      "postId": "6BOOlALQFju",
      "userId": "W381C_FfLhJ",
      "title": "Frame Foto Daur Ulang",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604096234_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "User": {
        "username": "unta"
      }
    },
    {
      "postId": "9lpc8Ij1dSu",
      "userId": "cKjFks44HTb",
      "title": "Mobil dari Botol Plastik",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604217320_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "User": {
        "username": "mantul"
      }
    },
    {
      "postId": "9QCQjCrfFQ-",
      "userId": "cKjFks44HTb",
      "title": "Vas Bunga Botol Kaca",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604244220_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "User": {
        "username": "mantul"
      }
    },
    {
      "postId": "cijW0NeDRnZ",
      "userId": "W381C_FfLhJ",
      "title": "Vas Bunga Plastik",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604070259_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "User": {
        "username": "unta"
      }
    },
    {
      "postId": "j3632Hq5Pfr",
      "userId": "W381C_FfLhJ",
      "title": "Kincir Angin Kaleng",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717603807258_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "User": {
        "username": "unta"
      }
    }
  ]
}
```

- **Get User Post**
  <pre>GET /publish/{{userId}}</pre>
  <pre>Authorization: Token</pre>
  Response Body:

```json
{
  "status": "success",
  "message": "Successfully get craft posts by user: unta!",
  "userId": "W381C_FfLhJ",
  "data": [
    {
      "postId": "6BOOlALQFju",
      "title": "Frame Foto Daur Ulang",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604096234_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "createdAt": "2024-06-05T16:14:57.000Z"
    },
    {
      "postId": "cijW0NeDRnZ",
      "title": "Vas Bunga Plastik",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604070259_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "createdAt": "2024-06-05T16:14:31.000Z"
    },
    {
      "postId": "j3632Hq5Pfr",
      "title": "Kincir Angin Kaleng",
      "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717603807258_f54eb8a70d58c1c8dbce0a8f739292cb.jpg",
      "description": "Caranya adalah.......",
      "createdAt": "2024-06-05T16:10:09.000Z"
    }
  ]
}
```

- **Delete Post**
  <pre>DELETE /publish</pre>
  <pre>Authorization: Token</pre>
  Request Body:

```json
{
  "postId": "6BOOlALQFju",
  "URL_Image": "https://storage.googleapis.com/craft-storage-recratify/1717604070259_f54eb8a70d58c1c8dbce0a8f739292cb.jpg"
}
```

Response Body:

```json
{
  "status": "success",
  "message": "Craft Post deleted successfully!"
}
```

</details>

## Architecture

<a href="">
    <img src="" />
 </a>
