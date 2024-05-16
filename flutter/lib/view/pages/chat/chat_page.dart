import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';

class ChatPage extends StatefulWidget {
  const ChatPage({super.key, required this.data});
  final Map<String, dynamic> data;

  @override
  State<ChatPage> createState() => _ChatPageState();
}

class _ChatPageState extends State<ChatPage> {
  final TextEditingController controller = TextEditingController();
  late List<Map<String, dynamic>> messages;
  late String channel;
  late String author;

  void setTeks(String teks) {
    setState(() {
      controller.text = teks;
    });
  }

  void send() {
    // Map<String, String> message = {};
    // message.addEntries([
    //   MapEntry('author', author),
    //   MapEntry('messages', controller.text),
    //   MapEntry('date', DateTime.now().toIso8601String().split('T')[0])
    // ]);
    // setState(() {
    //   messages.add(message);
    // });
    print('sended');
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    channel = widget.data['channelname'];
    messages = widget.data['messages'] as List<Map<String, dynamic>>;
    author = widget.data['me'];
  }

  @override
  Widget build(BuildContext context) {
    final double lebar = MediaQuery.of(context).size.width;
    return BasePage(
        withBGColor: false,
        appBar: AppBar(
          backgroundColor: AppColor.aboutBox,
          title: Text(channel),
        ),
        child: Stack(
          children: [
            Positioned(
                top: 98,
                width: lebar,
                child: ListView.separated(
                  physics: const BouncingScrollPhysics(),
                  padding: const EdgeInsets.symmetric(horizontal: 12),
                  shrinkWrap: true,
                  itemCount: messages.length,
                  separatorBuilder: (context, index) =>
                      const SizedBox(height: 8),
                  itemBuilder: (context, index) {
                    return bubble(
                        messages[index], messages[index]['author'] == author);
                  },
                )),
            Positioned(
                bottom: 0,
                width: lebar,
                child: Container(
                  constraints: BoxConstraints(minWidth: lebar, maxHeight: 72),
                  padding: const EdgeInsets.all(12),
                  color: AppColor.bg,
                  child: Container(
                    constraints:
                        BoxConstraints(maxHeight: 40, maxWidth: lebar * .8),
                    decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(18),
                        color: AppColor.abouttext.withOpacity(.2)),
                    alignment: Alignment.center,
                    child: TextField(
                      controller: controller,
                      onSubmitted: (value) => setTeks(value),
                      onTapOutside: (event) => FocusScope.of(context).unfocus(),
                      decoration: InputDecoration(
                          contentPadding: const EdgeInsets.symmetric(
                              vertical: 8, horizontal: 18),
                          border: InputBorder.none,
                          isDense: true,
                          suffixIcon: IconButton(
                            onPressed: send,
                            icon: const Icon(
                              Icons.send,
                            ),
                            iconSize: 18,
                            color: AppColor.abouttext,
                            visualDensity: VisualDensity.compact,
                            constraints: const BoxConstraints(maxWidth: 18),
                          )),
                    ),
                  ),
                ))
          ],
        ));
  }

  Widget bubble(Map<String, dynamic> message, bool isAuthor) => Align(
      alignment: isAuthor ? Alignment.centerRight : Alignment.centerLeft,
      child: Column(
        crossAxisAlignment:
            isAuthor ? CrossAxisAlignment.end : CrossAxisAlignment.start,
        children: [
          Container(
              constraints: BoxConstraints(
                  maxWidth: MediaQuery.of(context).size.width * .8),
              decoration: BoxDecoration(
                  color: isAuthor ? AppColor.aboutBox : AppColor.aboutTextBoxOp,
                  borderRadius: BorderRadius.circular(12)),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              child: Text(message['message'])),
          const SizedBox(height: 2),
          Text(
            message['date'],
            style: const TextStyle(color: Colors.grey, fontSize: 12),
          )
        ],
      ));
}
