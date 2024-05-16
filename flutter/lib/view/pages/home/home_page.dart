import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';
import 'package:frontend_youapp/view/widgets/home/avatar.dart';
import 'package:frontend_youapp/view/widgets/home/channel.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late final ScrollController scrollController;
  final TextEditingController textEditingController = TextEditingController();
  late List<Map<String, dynamic>> list;
  List<Map<String, dynamic>> filtered = [];

  pencarian(String cari) {
    if (cari.isNotEmpty) {
      setState(() {
        textEditingController.clear();
        filtered = list
            .where((element) =>
                element.values.any((element) => element == cari.toLowerCase()))
            .toList();
      });
    }
    FocusScope.of(context).unfocus();
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    scrollController = ScrollController();
    // list = [
    //   for (var i = 0; i < 20; i++) ...['channel #$i']
    // ];
    list = userchannel;
    filtered = list;
  }

  @override
  void dispose() {
    // TODO: implement dispose
    textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return BasePage(
      // appBar: AppBar(
      //   leadingWidth: 48,
      //   leading: Hero(
      //     tag: 'UserProfile',
      //     child: SizedBox.square(
      //       dimension: 32,
      //       child: Padding(
      //         padding: const EdgeInsets.only(left: 16),
      //         child: GestureDetector(
      //             onTap: () => navigatorKey.currentState?.pushNamed(
      //                 AppRoute.about.name,
      //                 arguments: userincomplete),
      //             child: avatar('nama')),
      //       ),
      //     ),
      //   ),
      //   flexibleSpace: FlexibleSpaceBar(
      //     background: searchField(textEditingController),
      //   ),
      //   backgroundColor: AppColor.imgProfile,
      //   actions: [
      //     IconButton.filled(
      //         style: const ButtonStyle(
      //             backgroundColor:
      //                 MaterialStatePropertyAll(AppColor.aboutBox)),
      //         onPressed: () => navigatorKey.currentState
      //             ?.pushNamed(AppRoute.about.name, arguments: userincomplete),
      //         icon: const Icon(
      //           Icons.add_circle,
      //           color: Colors.white,
      //         ))
      //   ],
      // ),
      // child: ListView.builder(
      //   itemCount: 20,
      //   shrinkWrap: true,
      //   physics: const BouncingScrollPhysics(),
      //   padding: const EdgeInsets.symmetric(horizontal: 18),
      //   keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
      //   itemBuilder: (context, index) {
      //     return channel('channel #index');
      //   },
      // )

      child: CustomScrollView(
        controller: scrollController,
        physics: const BouncingScrollPhysics(),
        slivers: [
          SliverAppBar(
            pinned: true,
            backgroundColor: AppColor.imgProfile,
            leadingWidth: 48,
            leading: Hero(
              tag: 'UserProfile',
              child: SizedBox.square(
                dimension: 32,
                child: Padding(
                  padding: const EdgeInsets.only(left: 12),
                  child: GestureDetector(
                      onTap: () => navigatorKey.currentState
                          ?.pushNamed(AppRoute.about.name, arguments: user),
                      child: const AvatarUser(nama: 'nama')),
                ),
              ),
            ),
            actions: [
              IconButton.filled(
                  style: const ButtonStyle(
                      backgroundColor:
                          MaterialStatePropertyAll(AppColor.aboutBox)),
                  onPressed: () => print('new chat'),
                  icon: const Icon(
                    Icons.add_circle,
                    color: Colors.white,
                  ))
            ],
            expandedHeight: 98,
            flexibleSpace: FlexibleSpaceBar(
              centerTitle: true,
              expandedTitleScale: 1,
              background: Align(
                alignment: Alignment.bottomCenter,
                child: Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
                  child: Container(
                    constraints: const BoxConstraints(maxHeight: 32),
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(8),
                        color: AppColor.buttonGradient1.withOpacity(.1)),
                    child: Row(
                      children: [
                        Expanded(
                          child: TextField(
                            controller: textEditingController,
                            onEditingComplete: () =>
                                pencarian(textEditingController.text),
                            decoration: const InputDecoration(
                                // contentPadding: EdgeInsets.all(0),
                                hintText: 'pencarian',
                                hintStyle: TextStyle(fontSize: 16),
                                suffixIcon: Icon(
                                  Icons.filter_list,
                                  size: 18,
                                ),
                                suffixIconConstraints:
                                    BoxConstraints(maxWidth: 18),
                                border: InputBorder.none,
                                isDense: true,
                                isCollapsed: true),
                          ),
                        ),
                        IconButton.filled(
                            iconSize: 18,
                            visualDensity: VisualDensity.compact,
                            padding: const EdgeInsets.all(4),
                            constraints: const BoxConstraints(maxWidth: 32),
                            onPressed: () {
                              setState(() {
                                filtered = list;
                              });
                            },
                            icon: const Icon(Icons.search_off))
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
          SliverPadding(
              padding: const EdgeInsets.symmetric(horizontal: 18),
              sliver: SliverList.builder(
                itemCount: filtered.length,
                itemBuilder: (context, index) {
                  return ChannelsInHome(
                      onTap: () => navigatorKey.currentState?.pushNamed(
                          AppRoute.chat.name,
                          arguments: filtered[index]),
                      channelName: filtered[index]['channelname'],
                      message:
                          'message from ${filtered[index]['channelname']}');
                },
              ))
        ],
      ),
    );
  }
}

final userincomplete = {
  "name": "@johndoe123",
  "username": '@johndoe',
};
final Map<String, dynamic> user = {
  "name": "@johndoe123",
  "username": '@johndoe',
  'birthday': '2000-04-23',
  'horoscope': 'gemini',
  'zodiac': 'monkey',
  'age': '56',
  'interests': ['hiking', 'diving', 'fishing'],
  'height': 190,
  'weight': 90,
  'email': 'johndoe@mail.doe',
  'photo': ''
};
final List<Map<String, dynamic>> userchannel = [
  for (var i = 0; i < 20; i++) ...[
    {
      'channelname': 'channel #$i',
      'last_message': 'message from #$i',
      'user': ['@johndoe', '@renedoe'],
      'me': '@johndoe',
      'messages': [
        {'author': '@renedoe', 'message': 'hai,', 'date': '2024-05-16'},
        {'author': '@johndoe', 'message': 'hai,', 'date': '2024-05-16'},
        {
          'author': '@renedoe',
          'message': 'what do you do?',
          'date': '2024-05-16'
        },
        {
          'author': '@johndoe',
          'message': 'nothing important',
          'date': '2024-05-16'
        },
        {'author': '@renedoe', 'message': 'wanna join?', 'date': '2024-05-16'},
        {'author': '@johndoe', 'message': 'okay', 'date': '2024-05-16'},
        {
          'author': '@renedoe',
          'message': 'okay, see you',
          'date': '2024-05-16'
        },
      ]
    }
  ]
];
