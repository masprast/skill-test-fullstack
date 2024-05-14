import 'dart:io';

import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/app/configs/constants/zoho/horoscope_unicode.dart';
import 'package:frontend_youapp/app/configs/constants/zoho/zodiac_unicode.dart';

class ProfilePicture extends StatelessWidget {
  const ProfilePicture(
      {super.key,
      required this.fullname,
      required this.onPresed,
      this.age,
      this.gender,
      this.horoscope,
      this.zodiac,
      required this.image});
  final String fullname;
  final String? age;
  final String? gender;
  final String? horoscope;
  final String? zodiac;
  final String? image;
  final void Function() onPresed;

  zohoSymbol(String horoscope, String zodiac) {
    final symbolHoroscope = HoroscopeUnicode.horoscopeList
        .firstWhere((element) => element.zoho == horoscope.toLowerCase())
        .unicodeString;

    if (zodiac == 'boar') {
      zodiac = 'pig';
    }
    final symbolZodiac = ZodiacUnicode.zodiacList
        .firstWhere((element) => element.zoho == zodiac.toLowerCase())
        .unicodeString;
    return {'horoscope': symbolHoroscope, 'zodiac': symbolZodiac};
  }

  @override
  Widget build(BuildContext context) {
    Map zohosymbol = zohoSymbol(horoscope ?? '', zodiac ?? '');
    return Container(
      constraints: BoxConstraints(
          maxWidth: MediaQuery.of(context).size.width,
          minHeight: 180,
          maxHeight: 180),
      decoration: BoxDecoration(
          image: DecorationImage(
              image: FileImage(File(image ?? '')), fit: BoxFit.cover),
          borderRadius: BorderRadius.circular(18),
          color: AppColor.imgProfile),
      child: Align(
        alignment: Alignment.bottomLeft,
        child: Stack(
          children: [
            Positioned(
              bottom: 16,
              left: 16,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    '$fullname, ${age ?? ""}',
                    style: const TextStyle(fontSize: 18, color: Colors.white),
                  ),
                  gender != null
                      ? Text(
                          gender ?? '',
                          style: const TextStyle(
                              fontSize: 12, color: Colors.white),
                        )
                      : Container(),
                  const SizedBox(height: 8),
                  age != null
                      ? Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            zoho(zohosymbol['horoscope'], horoscope ?? ''),
                            const SizedBox(
                              width: 8,
                            ),
                            zoho(zohosymbol['zodiac'], zodiac ?? '')
                          ],
                        )
                      : Container()
                ],
              ),
            ),
            Positioned(
                top: 0,
                right: 0,
                child: IconButton(
                    onPressed: onPresed,
                    icon: const Icon(
                      Icons.edit_outlined,
                      size: 18,
                      color: Colors.white,
                    )))
          ],
        ),
      ),
    );
  }

  Widget zoho(String zoho, String u) {
    var style = const TextStyle(color: Colors.white, fontSize: 14);
    return Container(
      decoration: BoxDecoration(
          color: Colors.grey.shade900, borderRadius: BorderRadius.circular(18)),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      child: Center(
          child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(zoho, style: style),
          const SizedBox(width: 8),
          Text(u, style: style)
        ],
      )),
    );
  }
}
