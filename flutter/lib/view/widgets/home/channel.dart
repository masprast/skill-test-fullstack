import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/home/avatar.dart';

class ChannelsInHome extends StatelessWidget {
  const ChannelsInHome(
      {super.key,
      required this.onTap,
      required this.channelName,
      required this.message});
  final void Function() onTap;
  final String channelName;
  final String message;
  @override
  Widget build(BuildContext context) {
    return InkWell(
      splashColor: AppColor.abouttext.withOpacity(.2),
      radius: 12,
      onTap: onTap,
      child: Container(
        constraints: BoxConstraints(
            minWidth: MediaQuery.of(context).size.width,
            minHeight: 72,
            maxHeight: 72),
        child: ListTile(
          contentPadding: const EdgeInsets.all(8),
          textColor: Colors.white,
          title: Text(channelName),
          subtitle: Text(message),
          leading: AvatarUser(nama: channelName),
          trailing: Text(
            DateTime.now().toIso8601String().split('T')[0],
            style: const TextStyle(fontSize: 10),
          ),
        ),
      ),
    );
  }
}
