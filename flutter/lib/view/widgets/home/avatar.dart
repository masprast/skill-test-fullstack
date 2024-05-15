import 'dart:io';

import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class AvatarUser extends StatelessWidget {
  const AvatarUser({super.key, required this.nama, this.file});
  final String nama;
  final String? file;
  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      backgroundColor: AppColor.buttonGradient1,
      backgroundImage: file == null ? null : FileImage(File(file!)),
      child: Text(nama[0].toUpperCase()),
    );
  }
}
