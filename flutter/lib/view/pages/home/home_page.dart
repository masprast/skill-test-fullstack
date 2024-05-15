import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return BasePage(
        appBar: AppBar(
          title: const Text(
            'Chat',
            style: TextStyle(
                color: Colors.white, fontSize: 32, fontWeight: FontWeight.bold),
          ),
          actions: [
            Hero(
                tag: 'UserProfile',
                child: IconButton.filled(
                    visualDensity: VisualDensity.compact,
                    onPressed: () => print('object'),
                    icon: const Icon(
                      Icons.person_outline,
                      color: Colors.white,
                      size: 14,
                    )))
          ],
        ),
        child: ListView.builder(
          itemCount: 10,
          physics: const BouncingScrollPhysics(),
          padding: const EdgeInsets.symmetric(horizontal: 18),
          keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
          itemBuilder: (context, index) {
            return ListTile(
              leading: Icon(Icons.person),
              title: Text('person #$index'),
              subtitle: Text('data'),
            );
          },
        ));
  }
}

final userincomplete = {
  "name": "@johndoe123",
  "username": '@johndoe',
};
final user = {
  "name": "@johndoe123",
  "username": '@johndoe',
  'birthday': '23-4-2000',
  'horoscope': '',
  'zodiac': '',
  'age': '',
  'interests': [],
  'height': 0,
  'weight': 0,
  'email': '',
  'photo': ''
};
