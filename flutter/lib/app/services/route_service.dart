import 'package:flutter/material.dart';
import 'package:frontend_youapp/view/pages/about/about_page.dart';
import 'package:frontend_youapp/view/pages/interest/add_interests.dart';
import 'package:frontend_youapp/view/pages/home/home_page.dart';

class RouteService {
  static Route routeService(RouteSettings settings) {
    final arg = settings.arguments;
    late Widget widget;

    switch (settings.name) {
      case 'home':
        widget = HomePage();
        break;
      case 'about':
        widget = AboutPage(
          user: arg as Map<String, dynamic>,
        );
        break;
      case 'login':
        widget = Container();
        break;
      case 'register':
        widget = Container();
        break;
      case 'interest':
        widget = AddInterestPage(
          interests: arg as List<String>,
        );
        break;
      case 'chat':
        widget = Container();
        break;
      default:
    }

    return MaterialPageRoute(builder: (context) => widget);
  }
}