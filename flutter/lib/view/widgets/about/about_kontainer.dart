import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class AboutContainer extends StatelessWidget {
  const AboutContainer({
    super.key,
    required this.width,
    required this.title,
    required this.button,
    required this.child,
  });
  final double width;
  final String title;
  final List<Widget> child;
  final Widget button;
  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(maxWidth: width),
      decoration: BoxDecoration(
          color: AppColor.aboutBox, borderRadius: BorderRadius.circular(18)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: const EdgeInsets.all(18),
                  child: Text(
                    title,
                    style: const TextStyle(fontWeight: FontWeight.bold),
                  ),
                ),
                button
              ]),
          // Flexible(fit: FlexFit.tight, child: child)
          for (var c in child) ...[c]
        ],
      ),
    );
  }
}
