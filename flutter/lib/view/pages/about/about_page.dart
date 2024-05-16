import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';
import 'package:frontend_youapp/view/widgets/about/about_box_edit.dart';
import 'package:frontend_youapp/view/widgets/about/about_box_empty.dart';
import 'package:frontend_youapp/view/widgets/about/about_with_data.dart';
import 'package:frontend_youapp/view/widgets/about/animated_about_container.dart';
import 'package:frontend_youapp/view/widgets/about/image_profile.dart';
import 'package:frontend_youapp/view/widgets/about/interest_wrapper.dart';

class AboutPage extends StatefulWidget {
  const AboutPage({super.key, required this.user});
  final Map<String, dynamic> user;

  @override
  State<AboutPage> createState() => _AboutPageState();
}

class _AboutPageState extends State<AboutPage> {
  bool showEditAbout = false;
  bool haveInterest = false;
  String gender = 'Select Gender';
  late Map<String, dynamic> user;
  File? image;
  XFile? picked;
  final picker = ImagePicker();

  changeData() => setState(() {
        showEditAbout = !showEditAbout;
      });

  changeGender(String g) => setState(() {
        gender = g;
      });

  changeInterest() async {
    final interests = await navigatorKey.currentState
        ?.pushNamed(AppRoute.interest.name, arguments: user['interests']);
    if (interests != null) {
      setState(() {
        haveInterest = !haveInterest;
        user['interests'] = interests as List<String>;
      });
    }
  }

  Future getImageFromGallery() async {
    final _picked =
        await picker.pickImage(source: ImageSource.gallery, imageQuality: 80);
    setState(() {
      picked = _picked;
    });
  }

  setImage(XFile? xFile) {
    if (xFile != null) {
      setState(() {
        image = File(xFile.path);
      });
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    // user = {
    //   'email': 'email',
    //   'username': 'username',
    //   'password': 'password',
    //   'name': 'name',
    //   'birthday': '1998-05-23',
    //   'kelamin': 'Female',
    //   'horoscope': 'virgo',
    //   'zodiac': 'ox',
    //   'height': 'height',
    //   'weight': 'weight',
    //   'interests': [
    //     'asdasd',
    //     'sacafa',
    //     'sdgdrhyfysdcaecaef',
    //     'ascvcafqwdq',
    //     'ds'
    //   ]
    // };
    user = widget.user;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final double lebar = MediaQuery.of(context).size.width;
    return BasePage(
      appBar: AppBar(
        automaticallyImplyLeading: true,
        centerTitle: true,
        elevation: 0,
        scrolledUnderElevation: 0,
        backgroundColor: AppColor.bg,
        actions: [
          IconButton(
              onPressed: () => print('action'),
              icon: const Icon(
                Icons.mode_edit_outline_outlined,
                size: 18,
              ))
        ],
        title: Text(
          widget.user['username'],
          style: const TextStyle(color: Colors.white, fontSize: 16),
        ),
      ),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        physics: const BouncingScrollPhysics(),
        child: Column(
          children: [
            const SizedBox(height: 12),
            Hero(
              tag: 'UserProfile',
              child: ProfilePicture(
                  image: image?.path,
                  fullname: user['name'],
                  age: usia(user['birthday']) ?? '',
                  gender: user['kelamin'],
                  horoscope: user['horoscope'],
                  zodiac: user['zodiac'],
                  onPresed: () => changeData()),
            ),
            const SizedBox(height: 24),
            AboutAnimatedContainer(
                showEdit: showEditAbout,
                first: user.isEmpty
                    ? EmptyAboutBox(
                        width: lebar,
                        title: 'About',
                        hint:
                            'Add in your information to help others know you better',
                        changeData: () => changeData())
                    : AboutWithData(
                        changeData: () => changeData(),
                        width: lebar,
                        user: user,
                        age: usia(user['birthday']) ?? '',
                        title: 'About'),
                second: AboutBoxEditing(
                  image: image,
                  title: 'About',
                  lebar: lebar,
                  changeData: changeData,
                  gender: gender,
                  setGender: (_gender) => setState(() {
                    gender = _gender!;
                  }),
                  getImage: (f) async {
                    getImageFromGallery();
                    if (picked != null) {
                      f = File(picked!.path);
                    }
                  },
                  setImagePath: () async => setImage(picked),
                )),
            const SizedBox(height: 24),
            AboutAnimatedContainer(
                showEdit: user['interests'].isEmpty || !showEditAbout,
                first: EmptyAboutBox(
                    width: lebar,
                    title: 'Interests',
                    hint: 'Add in your interests to find a better match',
                    changeData: () => changeInterest()),
                second: InterestsWrapper(
                    title: 'Interests',
                    width: lebar,
                    list: user['interests'],
                    onPressed: () => changeInterest())),
            const SizedBox(height: 32)
          ],
        ),
      ),
    );
  }

  String? usia(String? tgl) =>
      (DateTime.now().difference(DateTime.parse(tgl!)).inDays / 365)
          .floor()
          .toString();

  // Widget editAbout(double lebar, String title) => AboutContainer(
  //         width: lebar,
  //         title: title,
  //         button: TextButton(
  //             onPressed: changeData,
  //             child: const Text(
  //               'Save & Update',
  //               style: TextStyle(color: AppColor.aboutTextGold),
  //             )),
  //         child: [
  //           const SizedBox(height: 8),
  //           Padding(
  //             padding: const EdgeInsets.only(left: 18),
  //             child: Row(
  //               children: [
  //                 IconButton.filled(
  //                   onPressed: () => print('object'),
  //                   icon: const Icon(Icons.add),
  //                   constraints: BoxConstraints.tight(const Size.square(48)),
  //                   style: ButtonStyle(
  //                       iconColor: const MaterialStatePropertyAll(
  //                           AppColor.aboutTextGold),
  //                       backgroundColor:
  //                           const MaterialStatePropertyAll(AppColor.imgProfile),
  //                       shape: MaterialStatePropertyAll(RoundedRectangleBorder(
  //                           borderRadius: BorderRadius.circular(14)))),
  //                 ),
  //                 const SizedBox(
  //                   width: 18,
  //                 ),
  //                 const Text(
  //                   'Add image',
  //                   style: TextStyle(color: Colors.white),
  //                 )
  //               ],
  //             ),
  //           ),
  //           const SizedBox(height: 32),
  //           const AboutRowData(
  //               property: 'Display name', placeholder: 'Enter name'),
  //           const SizedBox(height: 16),
  //           AboutRowData(
  //               property: 'Gender',
  //               placeholder: 'Select Gender',
  //               drop: true,
  //               dropDownItem: dropDownGender()),
  //           const SizedBox(height: 16),
  //           const AboutRowData(property: 'Birthday', placeholder: 'DD MM YYYY'),
  //           const SizedBox(height: 16),
  //           const AboutRowData(
  //               property: 'Horoscope', placeholder: '--', aktif: false),
  //           const SizedBox(height: 16),
  //           const AboutRowData(
  //             property: 'Zodiac',
  //             placeholder: '--',
  //             aktif: false,
  //           ),
  //           const SizedBox(height: 16),
  //           const AboutRowData(
  //               property: 'Height', placeholder: 'Add height', number: true),
  //           const SizedBox(height: 16),
  //           const AboutRowData(
  //               property: 'Weight', placeholder: 'Add weight', number: true),
  //           const SizedBox(height: 40)
  //         ]);

  // Widget dropDownGender() => ButtonTheme(
  //       alignedDropdown: true,
  //       child: DropdownButton<String>(
  //         items: [
  //           for (var g in ['Select Gender', 'Male', 'Female']) ...[
  //             DropdownMenuItem<String>(
  //               value: g,
  //               alignment: Alignment.centerRight,
  //               child: Text(g),
  //             )
  //           ]
  //         ],
  //         onChanged: (value) => changeGender(value!),
  //         // isExpanded: true,
  //         isDense: true,
  //         value: gender,
  //         icon: const Icon(
  //           Icons.keyboard_arrow_down,
  //           color: Colors.white,
  //         ),
  //         dropdownColor: AppColor.bg,
  //         borderRadius: BorderRadius.circular(8),
  //         style: TextStyle(
  //             fontSize: 14, color: AppColor.abouttext.withOpacity(.5)),
  //         underline: const SizedBox(),
  //       ),
  //     );
}

// User{␊
// email:string;␊
// username:string;␊
// password:string;␊
// name?:string;␊
// birthday?:string;␊
// horoscope?:string;␊
// zodiac?:string;␊
// height?:number;␊
// weight?:number;␊
// interests?:string[];␊
// }␊