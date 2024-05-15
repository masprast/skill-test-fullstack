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
      | `x-access-token` : _string_ & `Authorization` | **CreateUserDto{}** | `201` 👉 'Profile has been created' |
      response:
      ```json
      {
        "message": "Profile has been updated successfully",
        "data": {
          "email": "pras0@mail.pras",
          "username": "prast_number.0",
          "interests": [
            "computer",
            "games",
            "architecture"
          ],
          "birthday": "2 Desember 1989",
          "height": 160,
          "horoscope": "Sagittarius (Archer)",
          "name": "prast number.0",
          "weight": 58,
          "zodiac": "Snake"
        }
      }
      ```
      - Note: Masukkan token pada *header* `x-access-token` dan *Auth Bearer*, jika token hanya diisi pada salah satu, akan menyebabkan *error* **500** (*x-access-token* kosong) atau **401** (*auth bearer* kosong)
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
          "email": "pras0@mail.pras",
          "username": "prast_number.0",
          "interests": [
            "computer",
            "games",
            "architecture"
          ],
          "birthday": "2 Desember 1989",
          "height": 160,
          "horoscope": "Sagittarius (Archer)",
          "name": "prast number.0",
          "weight": 58,
          "zodiac": "Snake"
        }
      }
      ```
   5. #### Update Profile
      `PUT` **url** : _/api/updateProfile_
      |                    Header                     |       Request       | Response                           |
      | :-------------------------------------------: | :-----------------: | ---------------------------------- |
      | `x-access-token` : _string_ / `Authorization` | **UpdateUserDto{}** | `200` 👉 'Profile has been updated' |
      Requests body:
      ```json
      {
        "interests": [
          "game",
          "architecture",
          "cars",
          "education"
        ]
      }
      ```
      Response body:
      ```json
      {
        "email": "pras0@mail.pras",
        "username": "prast_number.0",
        "interests": [
          "game",
          "architecture",
          "cars",
          "education"
        ],
        "birthday": "2 Desember 1989",
        "height": 160,
        "horoscope": "Sagittarius (Archer)",
        "name": "prast number.0",
        "weight": 58,
        "zodiac": "Snake"
      }
      ```
   6. #### View Messages
      **url** : _/api/viewMessages_
   7. #### Send Message
      `POST` **url** : ~~_/api/sendMessage_~~ */api/messages/create*
      |Header|Request|Response|
      |-|-|-|
      |Authorization: 'Bearer'|**object**|**object**|
      Request body:
      ```json
      {
        "user": "prast_number.0",
        "channel": "channel1",
        "message": "testing",
        "created": "2024-05-04T08:08:00.000Z"
      }
      ```
      Response body
      ```json
      {
        "user": "6637a28285d953b6762bde0d",
        "channel": "6637a74085d953b6762bf087",
        "message": "testing",
        "created": "2024-05-05T15:38:54.048Z",
        "_id": "6637a80ecf21c3df22fda40d",
        "__v": 0
      }
      ```

### TODO:
- [x] Konfigurasi Docker utk MongoDB & RabbitMQ
- [x] CRUD user
- [x] Auth dengan JWT token
- [x] Validasi input/payload
- [x] SwaggerUI
- [x] Chat REST API
- Chat menggunakan websocket
- Chat queue pd RabbitMQ
- unit test

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
- [x] Load TailwindCSS ke NextJS
- [x] Halaman Auth (Login & Register)
- [x] Halaman user
- [x] Halaman Chat
- API connection

## FRONTEND ( FLUTTER )
### TODO
- [x] working about page
- [x] working login page
- [x] working register page
- [ ] home page
- [ ] chat page
- [ ] API integration
- [ ] save API data to local