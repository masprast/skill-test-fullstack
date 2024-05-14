import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/pages/about/about_formatter.dart';
import 'package:frontend_youapp/view/widgets/about/about_kontainer.dart';

class AboutWithData extends StatelessWidget {
  const AboutWithData(
      {super.key,
      required this.changeData,
      required this.width,
      required this.title,
      required this.user,
      required this.age});
  final void Function() changeData;
  final double width;
  final String title;
  final Map<String, dynamic> user;
  final String age;
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
          const SizedBox(height: 6),
          dataText('Birthday',
              '${AboutFormatter.formatDate(user['birthday'])} (Age $age)'),
          const SizedBox(height: 12),
          dataText('Horoscope', user['horoscope']),
          const SizedBox(height: 12),
          dataText('Zodiac', user['zodiac']),
          const SizedBox(height: 12),
          dataText('Height', '${user['height']} cm'),
          const SizedBox(height: 12),
          dataText('Weight', '${user['weight']} kg'),
          const SizedBox(height: 16)
        ]);
  }

  String usia(String tgl) =>
      (DateTime.now().difference(DateTime.parse(tgl)).inDays / 365)
          .floor()
          .toString();

  Widget dataText(String property, String data) {
    return Container(
      margin: const EdgeInsets.only(left: 18, right: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        children: [
          Text(
            '$property: ',
            style: TextStyle(color: AppColor.abouttext.withOpacity(.5)),
          ),
          Text(data, style: const TextStyle(color: Colors.white))
        ],
      ),
    );
  }
}
