import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/view/widgets/about/text_input.dart';

class AboutRowData extends StatelessWidget {
  const AboutRowData(
      {super.key,
      required this.property,
      required this.placeholder,
      this.drop = false,
      this.aktif = true,
      this.number = false,
      this.dropDownItem});
  final String property;
  final String placeholder;
  final bool drop;
  final bool aktif;
  final bool number;
  final Widget? dropDownItem;
  @override
  Widget build(BuildContext context) {
    double panjang = 180;
    return Container(
      margin: const EdgeInsets.only(left: 18, right: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(
            '$property:',
            style: TextStyle(color: AppColor.abouttext.withOpacity(.5)),
          ),
          Container(
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(8),
                color: AppColor.aboutTextBoxOp,
                border: Border.all(color: Colors.white, width: .3)),
            constraints: BoxConstraints.tightFor(width: panjang, height: 36),
            padding: EdgeInsets.only(right: drop ? 0 : 18),
            child: SizedBox(
              width: panjang,
              child: drop
                  ? Align(alignment: Alignment.centerRight, child: dropDownItem)
                  : AboutDataInput(
                      placeholder: placeholder, aktif: aktif, number: number),
            ),
          )
        ],
      ),
    );
  }
}
