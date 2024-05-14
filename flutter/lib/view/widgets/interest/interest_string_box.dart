import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class InterestStringAddBox extends StatelessWidget {
  const InterestStringAddBox(
      {super.key, required this.interest, required this.remove});
  final String interest;
  final void Function(String) remove;
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            color: AppColor.abouttext.withOpacity(.1),
            borderRadius: BorderRadius.circular(4)),
        padding: const EdgeInsets.all(6),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              interest,
              style: const TextStyle(color: Colors.white, fontSize: 12),
            ),
            const SizedBox(width: 4),
            InkWell(
              child: const Icon(
                Icons.close,
                color: Colors.white,
                size: 14,
              ),
              onTap: () => remove(interest),
            ),
          ],
        ));
  }
}
