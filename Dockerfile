# Menggunakan image resmi Node.js versi 18
FROM node:18

# Menetapkan direktori kerja di dalam container
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Menginstall dependencies
RUN npm install

# Menyalin semua file dari direktori lokal ke dalam direktori kerja di container
COPY . .

#Server Configuration
ENV SERVER_PORT=3000

#Database Configuration Mysql
ENV DB_HOST=
ENV DB_USERNAME=user
ENV DB_PASSWORD=capstoneproject
ENV DB_NAME=recratify
ENV DB_PORT=3306

#Email Service Configuration
ENV APP_USER=recratify@gmail.com

#JWT TOKEN
ENV JWT_SECRET=mysecretkey

# Mengekspos port 3000
EXPOSE 3000

# Menjalankan perintah saat container dimulai
CMD [ "npm", "start" ]
