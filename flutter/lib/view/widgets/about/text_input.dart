import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class AboutDataInput extends StatelessWidget {
  const AboutDataInput(
      {super.key,
      this.aktif = true,
      this.number = false,
      required this.placeholder});
  final bool aktif;
  final bool number;
  final String placeholder;
  @override
  Widget build(BuildContext context) {
    return TextField(
      textAlign: TextAlign.end,
      textCapitalization: TextCapitalization.words,
      style: TextStyle(color: aktif ? Colors.white : AppColor.aboutTextOp),
      maxLength: 64,
      enabled: aktif,
      keyboardType: number ? TextInputType.number : TextInputType.text,
      decoration: InputDecoration(
          hintText: placeholder,
          hintStyle: TextStyle(
              fontSize: 14,
              color: number
                  ? AppColor.abouttext.withOpacity(.35)
                  : AppColor.abouttext.withOpacity(.5)),
          counterText: '',
          isDense: true,
          border: InputBorder.none),
    );
  }
}
