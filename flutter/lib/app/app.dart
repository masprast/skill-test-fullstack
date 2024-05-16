import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/app/services/route_service.dart';

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      locale: Locale('ID'),
      title: 'Youapp Flutter',
      theme: ThemeData(
          visualDensity: VisualDensity.adaptivePlatformDensity,
          colorScheme: const ColorScheme.dark()),
      scaffoldMessengerKey: messengerKey,
      navigatorKey: navigatorKey,
      onGenerateRoute: RouteService.routeService,
      initialRoute: AppRoute.login.name,
    );
  }
}
