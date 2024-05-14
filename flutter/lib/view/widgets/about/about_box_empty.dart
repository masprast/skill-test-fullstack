import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/about/about_kontainer.dart';

class EmptyAboutBox extends StatelessWidget {
  const EmptyAboutBox(
      {super.key,
      required this.title,
      required this.hint,
      required this.changeData,
      required this.width});
  final String title;
  final String hint;
  final double width;
  final void Function() changeData;
  @override
  Widget build(BuildContext context) {
    return AboutContainer(
        button: IconButton(
            iconSize: 18,
            visualDensity: VisualDensity.compact,
            onPressed: changeData,
            icon: const Icon(
              Icons.edit_outlined,
            )),
        width: width,
        title: title,
        child: [
          // const SizedBox(height: 24),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 8, 8, 24),
            child: Text(
              hint,
              style: const TextStyle(fontSize: 13, color: AppColor.abouttext),
            ),
          ),
        ]);
  }
}
