import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enums/enum_route.dart';
import 'package:frontend_youapp/app/services/route_service.dart';

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: const Locale('ID'),
      title: 'YouApp Flutter',
      theme: ThemeData(visualDensity: VisualDensity.adaptivePlatformDensity),
      onGenerateRoute: RouteService.genRoute,
      initialRoute: EnRoute.home.name,
      scaffoldMessengerKey: messengerKey,
      navigatorKey: navigatorKey,
    );
  }
}
