import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/about/about_kontainer.dart';

class InterestsWrapper extends StatelessWidget {
  const InterestsWrapper(
      {super.key,
      required this.list,
      required this.onPressed,
      required this.title,
      required this.width});
  final List<String> list;
  final String title;
  final double width;
  final void Function() onPressed;
  @override
  Widget build(BuildContext context) {
    return AboutContainer(
        button: IconButton(
            onPressed: onPressed,
            icon: const Icon(Icons.edit_outlined, size: 18)),
        width: width,
        title: title,
        child: [
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 8, 8, 24),
            child: Wrap(
              spacing: 12,
              runSpacing: 12,
              children: [
                for (var i in list) ...[
                  Container(
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(16),
                        color: AppColor.imgProfile),
                    padding:
                        const EdgeInsets.symmetric(vertical: 8, horizontal: 12),
                    child: Text(i,
                        style:
                            const TextStyle(color: Colors.white, fontSize: 14)),
                  )
                ]
              ],
            ),
          )
        ]);
  }
}
