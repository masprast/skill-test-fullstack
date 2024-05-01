## Technical Challenge - Frontend (Flutter/Nextjs):
Create a mobile app (Flutter App) - Open the figma link below
- Create the Flutter app based on design.
- Implement BLOC in Flutter or Implement routes.
- Writing unit tests, widget tests & integration tests.
- Usage of good design patterns & architecture patterns.
- Build and Connect with API

### Or
Create Mobile Webapp in Nextjs - Open the figma link below:
- Create using Nextjs 13 with app router based on design.
- Implement tailwind css custom and modular configuration
- Usage of good design patterns & react architecture patterns.
- Build and Connect with API

#### Attachments
1. Design : [Figma template](https://www.figma.com/file/VnqmoYfwdTzN8qvvDZn6GC/YouApp-Test?node-id=0%3A1&=p7hNpbhefNuFtLs7-0)
2. API : http://techtest.youapp.ai/
API Docs: https://techtest.youapp.ai/api-docs#/

- a. Login
>url : */api/login*

- b. Register
>url : */api/register*

- c. Get Profile
>url : */api/profile*

- d. Update Profile
>url : */api/profile*

(Feel free to mock the api if it is down/offline)
Zodiac/Horoscope Calculation: [Google Docs](https://docs.google.com/spreadsheets/d/1Oahej8yuEHfDsQI-AwycEpQ0CnjkMsxOMg2ywMKnjsg/edit#gid=1538893505)

## Technical Challenge - Backend: 🚀

1. Create a project of _login/profile/chat_ using `Nest.Js`, `MongoDB` and `Node.js` implemented using `docker` with JWT Token, DTO, validations, `socket.io`, `rabbit mq` and unit tests.
2. Visit our figma: [Figma Template](https://www.figma.com/file/VnqmoYfwdTzN8qvvDZn6GC/YouApp-Test?node-id=0%3A1&=p7hNpbhefNuFtLs7-0) and extract the fields needed to build the database schema in `MongoDB` and API in `Nest.js` for the login/profile. For the chat room, do as you prefer with as many features that shows off your knowledge of object oriented programming and data structures. **Please do the chat with more effort as we will grade it more thoroughly**.
3. Do CRUD with as many features that shows off your knowledge of object oriented programming and data structures. Show off your knowledge of schema planning and micro services in NOSQL. **You will build the above figma of login and profile** (Take note of the horoscope and zodiac in the profile) as well as text based chat between user A and user B with `RabbitMQ` & send a message to notify each user whenever a message is received.
4. Document and create API by adding the params below so that any frontend developers may use it.
   
   1. #### Register
      `POST` **url** : _/api/register_
      |Header|Request|Response|
      |:-:|:-:|---|
      |-|**RegisterDto{}**|`201` 👉 'User has been created successfully'|
      response:
      ```json
      {
        "message": "User has been created successfully"
      }
      ```
   2. #### Login
      `POST` **url** : _/api/login_
      |Header|Request|Response|
      |:-:|:-:|---|
      |-|**LoginDto{}**|`200` 👉 'User has been logged in'|
      response:
      ```json
      {
        "message": "User has been logged in successfully",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmM3ZGIwMTRlZDY4OGM3ZDg2NWZhNyIsInVzZXJuYW1lIjoic3RyaW5nZyIsImVtYWlsIjoic3RyaW5nZ0BzdHJpbmcuc3RyIiwiaWF0IjoxNzE0MTkxODA3LCJleHAiOjE3MTQxOTU0MDd9.idCIkmA8dTQzTeDPI1_SN7EgNh4O3qNM9HOMC5A18sI"
      }
      ```
   3. #### Create Profile
      `POST` **url** : _/api/createProfile_
      |Header|Request|Response|
      |:-:|:-:|---|
      |`x-access-token` : _string_ / `Authorization`|**CreateUserDto{}**|`201` 👉 'Profile has been created'|
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
      |Header|Request|Response|
      |:-:|:-:|---|
      |`x-access-token` : _string_ / `Authorization`|-|`200` 👉 'Profile has been found'|
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
      |Header|Request|Response|
      |:-:|:-:|---|
      |`x-access-token` : _string_ / `Authorization`|**UpdateUserDto{}**|`200` 👉 'Profile has been updated'|
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
5. YouApp API v1.0

   1. **CreateUserDto{}**
      |fields |type |
      | ---------------- | -------------- |
      | **name\*** | **string** |
      | **birthday\*** | **string** |
      | **height\*** | **number** |
      | **weight\*** | **number** |
      | **interests\*** | [**string**] |

   2. **UpdateUserDto{}**
      |fields |type |
      | ---------------- | -------------- |
      | **name\*** | **string** |
      | **birthday\*** | **string** |
      | **height\*** | **number** |
      | **weight\*** | **number** |
      | **interests\*** | [**string**] |

   3. **RegisterDto{}**
      |field|type|
      |---|---|
      |**email\***| **string**|
      |**username\***| **string**|
      |**password\***| **string** (>8 *char*)|

   4. **LoginDto{}**
      |field|type|
      |---|---|
      |**email\***| **string**|
      |**username\***| **string**|
      |**password\***| **string**|

6. You will be judged for your ability to build the most complete backend with
   validations, *documentation and the best practices for api & database*.
   For Reference Zodiac/Horoscope Calculation: [Google Docs](https://docs.google.com/spreadsheets/d/1Oahej8yuEHfDsQI-AwycEpQ0CnjkMsxOMg2ywMKnjsg/edit#gid=1538893505)

7. Popular types of Data Structures:
<pre>
      - Array
      - Linked List
      - Stack
      - Queue
      - Binary Tree
      - Binary Search Tree
      - Heap
      - Hashing
      - Graph
      - Matrix
      - Other advanced data structures
</pre>

#### Addition
- Horoscope
  |Horoscope|StartDate|-EndDate|
  |-|-|-|
  |♈ Aries (Ram)| March 21|April 19|
  |♉ Taurus (Bull)| April 20|May 20|
  |♊ Gemini (Twins)| May 21|June 21|
  |♋ Cancer (Crab)| June 22|July 22|
  |♌ Leo (Lion)| July 23|August 22|
  |♍ Virgo (Virgin)| August 23|September 22|
  |♎ Libra (Balance)| September 23|October 23|
  |♏ Scorpius (Scorpion)| October 24|November 21|
  |♐ Sagittarius (Archer)| November 22|December 21|
  |♑ Capricornus (Goat)| December 22|January 19|
  |♒ Aquarius (Water Bearer)| January 20|February 18|
  |♓ Pisces (Fish)| February 19|March 20|
- Zodiac
  - Attached

waktu video tutorial: 1:13