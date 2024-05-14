import 'package:flutter/material.dart';

class BasePage extends StatelessWidget {
  const BasePage({super.key, required this.child, this.appBar});
  final Widget child;
  final AppBar? appBar;

  @override
  Widget build(BuildContext context) {
    return ScaffoldMessenger(
        child: Scaffold(
      appBar: appBar,
      body: Container(
        decoration: const BoxDecoration(
            image: DecorationImage(
                image: AssetImage('asset/BG.png'), fit: BoxFit.fill)),
        alignment: Alignment.center,
        padding: const EdgeInsets.all(8),
        child: child,
      ),
    ));
  }
}
