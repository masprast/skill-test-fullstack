import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/enums/enum_route.dart';
import 'package:frontend_youapp/view/pages/base.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return BasePage(
        child: Center(
      child: ElevatedButton(
          onPressed: () => Navigator.pushNamed(context, EnRoute.about.name),
          child: Text('about page')),
    ));
  }
}
