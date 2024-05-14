import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return BasePage(
      child: Center(
        child: ElevatedButton(
            onPressed: () => navigatorKey.currentState
                ?.pushNamed(AppRoute.about.name, arguments: userincomplete),
            child: Text('about page')),
      ),
    );
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
