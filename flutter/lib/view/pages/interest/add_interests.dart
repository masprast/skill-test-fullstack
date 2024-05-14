import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/view/widgets/interest/interest_add_box.dart';
import 'package:frontend_youapp/view/widgets/interest/interest_string_box.dart';
import 'package:textfield_tags/textfield_tags.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';

class AddInterestPage extends StatefulWidget {
  const AddInterestPage({super.key, required this.interests});
  final List<String> interests;

  @override
  State<AddInterestPage> createState() => _AddInterestPageState();
}

class _AddInterestPageState extends State<AddInterestPage> {
  late List<String> list;
  late StringTagController tagController;

  @override
  void initState() {
    super.initState();
    tagController = StringTagController();
    list = widget.interests;
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();
    tagController.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      onPopInvoked: (didPop) {
        if (didPop) return;
      },
      child: BasePage(
          withBGColor: false,
          appBar: AppBar(
            automaticallyImplyLeading: true,
            elevation: 0,
            toolbarHeight: 96,
            backgroundColor: Colors.transparent,
            forceMaterialTransparency: true,
            actions: [
              TextButton(
                  onPressed: () {
                    setState(() {
                      Navigator.of(context).pop(list);
                    });
                  },
                  child: const Text(
                    'Save',
                    style: TextStyle(color: Colors.blue, fontSize: 14),
                  ))
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                SizedBox(height: MediaQuery.of(context).size.height * .2),
                const Padding(
                  padding: EdgeInsets.only(left: 8),
                  child: Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'Tell everyone about your self',
                        style: TextStyle(fontWeight: FontWeight.bold),
                      )),
                ),
                const Padding(
                  padding: EdgeInsets.only(left: 8),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: Text(
                      'What interest you?',
                      style: TextStyle(
                          fontWeight: FontWeight.bold,
                          color: Colors.white,
                          fontSize: 20),
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                InterestsAddBox(
                    controller: tagController,
                    list: list,
                    setList: (_list) => setState(() {
                          list = _list;
                        }))
              ],
            ),
          )),
    );
  }
}
