import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class AboutAnimatedContainer extends StatelessWidget {
  const AboutAnimatedContainer(
      {super.key,
      required this.showEdit,
      required this.first,
      required this.second});
  final bool showEdit;
  final Widget first;
  final Widget second;
  @override
  Widget build(BuildContext context) {
    return AnimatedContainer(
      duration: Durations.medium1,
      constraints: BoxConstraints(maxWidth: MediaQuery.of(context).size.width),
      decoration: BoxDecoration(
          color: AppColor.aboutBox, borderRadius: BorderRadius.circular(18)),
      padding: const EdgeInsets.only(left: 8, right: 4),
      child: AnimatedCrossFade(
        duration: Durations.medium4,
        firstChild: first,
        secondChild: second,
        crossFadeState:
            !showEdit ? CrossFadeState.showFirst : CrossFadeState.showSecond,
        sizeCurve: Curves.easeIn,
      ),
    );
  }
}
