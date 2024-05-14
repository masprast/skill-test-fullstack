import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/interest/interest_string_box.dart';
import 'package:textfield_tags/textfield_tags.dart';

class InterestsAddBox extends StatefulWidget {
  const InterestsAddBox(
      {super.key,
      required this.controller,
      required this.list,
      required this.setList});
  final StringTagController controller;
  final List<String> list;
  final void Function(List<String> _list) setList;
  @override
  State<InterestsAddBox> createState() => _InterestsAddBoxState();
}

class _InterestsAddBoxState extends State<InterestsAddBox> {
  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: BoxConstraints(minWidth: MediaQuery.of(context).size.width),
      decoration: BoxDecoration(
          color: AppColor.abouttext.withOpacity(.06),
          borderRadius: BorderRadius.circular(8)),
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
      child: TextFieldTags<String>(
          textfieldTagsController: widget.controller,
          initialTags: widget.list,
          textSeparators: const [','],
          validator: (tag) {
            if (widget.controller.getTags!.contains(tag)) {
              return 'enter anonther tag';
            }
            return null;
          },
          inputFieldBuilder: (context, textFieldTagValues) => Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
              child: Wrap(
                spacing: 4,
                runSpacing: 8,
                children: [
                  if (textFieldTagValues.tags.isNotEmpty)
                    for (var i in textFieldTagValues.tags) ...[
                      InterestStringAddBox(
                          interest: i, remove: textFieldTagValues.onTagRemoved)
                    ],
                  const SizedBox(width: 8),
                  SizedBox(
                    height: 30,
                    width: MediaQuery.of(context).size.width * .4,
                    child: TextField(
                      onSubmitted: (value) => setState(() {
                        if (value.isEmpty) return;
                        textFieldTagValues.tags.add(value);
                        textFieldTagValues.textEditingController.clear();
                        widget.setList(textFieldTagValues.tags);
                      }),
                      controller: textFieldTagValues.textEditingController,
                      focusNode: textFieldTagValues.focusNode,
                      style: const TextStyle(color: Colors.white, fontSize: 14),
                      decoration: InputDecoration(
                          hintText: 'add here ...',
                          hintStyle: TextStyle(
                              color: AppColor.abouttext.withOpacity(.5)),
                          contentPadding: const EdgeInsets.all(2),
                          border: InputBorder.none,
                          isDense: true,
                          filled: true,
                          fillColor: AppColor.abouttext.withOpacity(0)),
                      onChanged: textFieldTagValues.onTagChanged,
                    ),
                  ),
                ],
              ))),
    );
  }
}
