import 'package:flutter/material.dart';
import 'package:frontend_youapp/view/pages/base.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    final double lebar = MediaQuery.of(context).size.width;
    return BasePage(
        appBar: AppBar(
          automaticallyImplyLeading: true,
          centerTitle: true,
          toolbarHeight: 48,
          elevation: 0,
          actions: [
            IconButton.outlined(
                onPressed: () => print('action'),
                icon: const Icon(Icons.mode_edit_outline))
          ],
          title: Text(
            '@johndoe123',
            style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Container(
                constraints: BoxConstraints(
                    maxWidth: lebar, minHeight: 187, maxHeight: 187),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  color: Colors.green.shade800,
                ),
                child: Align(
                  alignment: Alignment.bottomLeft,
                  child: Padding(
                    padding: const EdgeInsets.only(left: 8, bottom: 8),
                    child: Text(
                      '@johndoe123',
                      style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: 32),
                    ),
                  ),
                ),
              ),
              Container(),
              Container()
            ],
          ),
        ));
  }
}
