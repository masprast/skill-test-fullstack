import 'dart:io';

import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/about/about_kontainer.dart';
import 'package:frontend_youapp/view/widgets/about/row_data.dart';

class AboutBoxEditing extends StatelessWidget {
  const AboutBoxEditing(
      {super.key,
      required this.title,
      required this.lebar,
      required this.changeData,
      required this.setGender,
      required this.gender,
      required this.setImagePath,
      required this.image,
      required this.getImage});
  final String title;
  final double lebar;
  final String gender;
  final File? image;
  final void Function() changeData;
  final void Function(String? _gender) setGender;
  final Function setImagePath;
  final Function(File? file) getImage;

  @override
  Widget build(BuildContext context) {
    return AboutContainer(
        width: lebar,
        title: title,
        button: TextButton(
            onPressed: () {
              changeData();
              setImagePath();
            },
            child: const Text(
              'Save & Update',
              style: TextStyle(color: AppColor.aboutTextGold),
            )),
        child: [
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.only(left: 18),
            child: Row(
              children: [
                IconButton.filled(
                  onPressed: () {
                    getImage(image);
                    // setImagePath();
                  },
                  icon: image != null
                      ? Image(
                          image: FileImage(image!),
                          fit: BoxFit.cover,
                        )
                      : const Icon(Icons.add),
                  constraints: BoxConstraints.tight(const Size.square(48)),
                  style: ButtonStyle(
                      padding:
                          const MaterialStatePropertyAll(EdgeInsets.all(0)),
                      iconColor: const MaterialStatePropertyAll(
                          AppColor.aboutTextGold),
                      backgroundColor:
                          const MaterialStatePropertyAll(AppColor.imgProfile),
                      shape: MaterialStatePropertyAll(RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(14)))),
                ),
                const SizedBox(
                  width: 18,
                ),
                const Text(
                  'Add image',
                  style: TextStyle(color: Colors.white),
                )
              ],
            ),
          ),
          const SizedBox(height: 32),
          const AboutRowData(
              property: 'Display name', placeholder: 'Enter name'),
          const SizedBox(height: 16),
          AboutRowData(
              property: 'Gender',
              placeholder: 'Select Gender',
              drop: true,
              dropDownItem: dropDownGender(gender)),
          const SizedBox(height: 16),
          const AboutRowData(property: 'Birthday', placeholder: 'DD MM YYYY'),
          const SizedBox(height: 16),
          const AboutRowData(
              property: 'Horoscope', placeholder: '--', aktif: false),
          const SizedBox(height: 16),
          const AboutRowData(
            property: 'Zodiac',
            placeholder: '--',
            aktif: false,
          ),
          const SizedBox(height: 16),
          const AboutRowData(
              property: 'Height', placeholder: 'Add height', number: true),
          const SizedBox(height: 16),
          const AboutRowData(
              property: 'Weight', placeholder: 'Add weight', number: true),
          const SizedBox(height: 40)
        ]);
  }

  Widget dropDownGender(String gender) => ButtonTheme(
        alignedDropdown: true,
        child: DropdownButton<String>(
          items: [
            for (var g in ['Select Gender', 'Male', 'Female']) ...[
              DropdownMenuItem<String>(
                value: g,
                child: Text(g),
              )
            ]
          ],
          onChanged: setGender,
          isDense: true,
          alignment: Alignment.centerRight,
          value: gender,
          icon: const Icon(
            Icons.keyboard_arrow_down,
            color: Colors.white,
          ),
          dropdownColor: AppColor.bg,
          borderRadius: BorderRadius.circular(8),
          style: TextStyle(
              fontSize: 14, color: AppColor.abouttext.withOpacity(.5)),
          underline: const SizedBox(),
        ),
      );
}
