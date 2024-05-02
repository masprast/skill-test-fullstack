# SKILL TEST YOUAPP
Ini adalah repositori untuk *skill test* dalam rangka proses rekrutmen sebagai *fullstack/backend developer*

## BACKEND
*Techstack* yang digunakan untuk *backend* antara lain:
1. Docker
2. NodeJS
3. MongoDB
4. NestJS

Untuk melakukan pengetesan:
1. Jalankan *service* yang telah dikonfigurasi dengan Docker dengan perintah:
   ```sh
   $ docker-compose -f docker/docker-compose up &
   ```
   *Service* yang dikonfigurasi pada Docker antara lain: MongoDB, 
2. Jalankan server dengan perintah:
   ```sh
   $ npm run start:dev
   ```
3. Buka *web browser* dan arahkan ke `localhost:3000/api` untuk *init database* (*setup* `collection` untuk *horoscope & zodiac*)
4. Untuk melakukan pengetesan API dapat membuka alamat `localhost:/3000/api-docs` pada *web browser* atau menggunakan *software* sejenis Postman
5. API CRUD:
   1. #### Register
      `POST` **url** : _/api/register_
      | Header |      Request      | Response                                     |
      | :----: | :---------------: | -------------------------------------------- |
      |   -    | **RegisterDto{}** | `201` 👉 'User has been created successfully' |
      response:
      ```json
      {
        "message": "User has been created successfully"
      }
      ```
   2. #### Login
      `POST` **url** : _/api/login_
      | Header |    Request     | Response                          |
      | :----: | :------------: | --------------------------------- |
      |   -    | **LoginDto{}** | `200` 👉 'User has been logged in' |
      response:
      ```json
      {
        "message": "User has been logged in successfully",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmM3ZGIwMTRlZDY4OGM3ZDg2NWZhNyIsInVzZXJuYW1lIjoic3RyaW5nZyIsImVtYWlsIjoic3RyaW5nZ0BzdHJpbmcuc3RyIiwiaWF0IjoxNzE0MTkxODA3LCJleHAiOjE3MTQxOTU0MDd9.idCIkmA8dTQzTeDPI1_SN7EgNh4O3qNM9HOMC5A18sI"
      }
      ```
   3. #### Create Profile
      `POST` **url** : _/api/createProfile_
      |                    Header                     |       Request       | Response                           |
      | :-------------------------------------------: | :-----------------: | ---------------------------------- |
      | `x-access-token` : _string_ / `Authorization` | **CreateUserDto{}** | `201` 👉 'Profile has been created' |
      response:
      ```json
      {
        "message": "Profile has been created successfully",
        "data": {
          "email": "stringg@string.str",
          "username": "stringg",
          "interests": []
        }
      }
      ```
   4. #### Get Profile
      `GET` **url** : _/api/getProfile_
      |                    Header                     | Request | Response                         |
      | :-------------------------------------------: | :-----: | -------------------------------- |
      | `x-access-token` : _string_ / `Authorization` |    -    | `200` 👉 'Profile has been found' |
      response:
      ```json
      {
        "message": "Profile has been found successfully",
        "data": {
          "email": "stringg@string.str",
          "username": "stringg",
          "name": "stringg",
          "birthday": "28 Februari 2001",
          "horoscope": "Pisces",
          "zodiac": "Snake",
          "height": 150,
          "weight": 150,
          "interests": [
            "string"
          ]
        }
      }
      ```
   5. #### Update Profile
      `PUT` **url** : _/api/updateProfile_
      |                    Header                     |       Request       | Response                           |
      | :-------------------------------------------: | :-----------------: | ---------------------------------- |
      | `x-access-token` : _string_ / `Authorization` | **UpdateUserDto{}** | `200` 👉 'Profile has been updated' |
      ```json
      {
        "message": "Profile has been updated successfully",
        "data": {
          "email": "stringg@string.str",
          "username": "stringg",
          "name": "stringg",
          "birthday": "tanggal",
          "horoscope": "Error",
          "height": 120,
          "weight": 120,
          "interests": [
            "string"
          ]
        }
      }
      ```
   6. #### View Messages
      **url** : _/api/viewMessages_
   7. #### Send Message
      **url** : _/api/sendMessage_

### TODO:
1. ~~Konfigurasi Docker utk MongoDB & RabbitMQ~~
2. ~~CRUD user~~
3. ~~Auth dengan JWT token~~
4. ~~Validasi input/payload~~
5. ~~SwaggerUI~~
6. Chat menggunakan websocket
7. Chat queue pd RabbitMQ
8. unit test

## FRONTEND
*Techstack* yang digunakan untuk *backend* antara lain:
1. NextJS + typescript
2. TailwindCSS

Untuk melakukan pengetesan, jalankan perintah:
```sh
$ npm run dev
```
Lalu buka alamat `localhost:8000` pada web browser

### TODO
1. ~~Load TailwindCSS ke NextJS~~
2. ~~Halaman Auth (Login & Register)~~
3. ~~Halaman user~~
4. Halaman Chat (WIP)
5. API connection
6. 