# Menggunakan image resmi Node.js versi 18
FROM node:18

# Membuat direktori kerja dan menetapkannya sebagai direktori kerja
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin semua file dari direktori lokal ke dalam direktori kerja di container
COPY . .

# Mengubah kepemilikan direktori kerja ke non-root user (opsional tapi direkomendasikan)
RUN chown -R node:node /usr/src/app

# Menetapkan user untuk menjalankan aplikasi
USER node

# Menetapkan variabel lingkungan melalui ENV
ENV SERVER_PORT=3000
ENV DB_HOST=34.101.84.123
ENV DB_USERNAME=user
ENV DB_PASSWORD=capstoneproject
ENV DB_NAME=recratify
ENV DB_PORT=3306
ENV APP_USER=recratify@gmail.com
ENV JWT_SECRET=mysecretkey

# Mengekspos port 3000
EXPOSE 3000

# Menjalankan perintah saat container dimulai
CMD [ "npm", "start" ]
