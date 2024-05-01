# SKILL TEST YOUAPP
Ini adalah repositori untuk *skill test* dalam rangka proses rekrutmen sebagai *fullstack/backend developer*

## BACKEND
*Techstack* yang digunakan untuk *backend* antara lain:
1. Docker
2. NodeJS
3. MongoDB
4. NestJS

Untuk melakukan pengetesan:
1. Jalankan *service* yang telah dikonfigurasi dengan Docker dengan perintah
   ```sh
   $ docker-compose -f docker/docker-compose up &
   ```
   *Service* yang dikonfigurasi pada Docker antara lain: MongoDB, 
2. Buka *web browser* dan arahkan ke `localhost:3000/api` untuk *init database* (*setup* `collection` untuk *horoscope & zodiac*)
3. Untuk melakukan pengetesan API dapat membuka alamat `localhost:/3000/api-docs` pada *web browser* atau menggunakan *software* sejenis Postman
4. 


## FRONTEND