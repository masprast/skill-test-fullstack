import 'package:flutter/material.dart';
import 'package:frontend_youapp/view/pages/about/about_page.dart';
import 'package:frontend_youapp/view/pages/home/home_page.dart';

class RouteService {
  static Route genRoute(RouteSettings settings) {
    final arg = settings.arguments;
    late Widget widget;

    switch (settings.name) {
      case 'home':
        widget = HomePage();
        break;
      case 'login':
        widget = Container();
        break;
      case 'register':
        widget = Container();
        break;
      case 'interest':
        widget = Container();
        break;
      case 'chat':
        widget = Container();
        break;
      case 'about':
        widget = AboutPage();
        break;
      default:
    }

    return MaterialPageRoute(builder: (context) => widget);
  }
}
