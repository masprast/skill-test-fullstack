import 'package:flutter/material.dart';
import 'package:frontend_youapp/view/pages/about/about_page.dart';
import 'package:frontend_youapp/view/pages/chat/chat_page.dart';
import 'package:frontend_youapp/view/pages/interest/add_interests.dart';
import 'package:frontend_youapp/view/pages/home/home_page.dart';
import 'package:frontend_youapp/view/pages/login/login_page.dart';
import 'package:frontend_youapp/view/pages/register/register_page.dart';

class RouteService {
  static Route routeService(RouteSettings settings) {
    final arg = settings.arguments;
    late Widget widget;

    switch (settings.name) {
      case 'home':
        widget = const HomePage();
        break;
      case 'about':
        widget = AboutPage(
          user: arg as Map<String, dynamic>,
        );
        break;
      case 'login':
        widget = const LoginPage();
        break;
      case 'register':
        widget = const RegisterPage();
        break;
      case 'interest':
        widget = AddInterestPage(
          interests: arg as List<String>,
        );
        break;
      case 'chat':
        widget = ChatPage(
          data: arg as Map<String, dynamic>,
        );
        break;
      default:
    }

    return MaterialPageRoute(builder: (context) => widget);
  }
}
