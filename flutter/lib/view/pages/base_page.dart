import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';

class BasePage extends StatelessWidget {
  const BasePage(
      {super.key, required this.child, this.appBar, this.withBGColor = true});
  final Widget child;
  final AppBar? appBar;
  final bool withBGColor;
  @override
  Widget build(BuildContext context) {
    return ScaffoldMessenger(
        child: Scaffold(
      appBar: appBar,
      extendBodyBehindAppBar: !withBGColor,
      body: Stack(
        alignment: Alignment.topCenter,
        fit: StackFit.expand,
        children: [
          Positioned.fill(
              child: Container(
            decoration: BoxDecoration(
                image: !withBGColor
                    ? const DecorationImage(
                        image: AssetImage('assets/BG.png'),
                        fit: BoxFit.none,
                        scale: 2.8)
                    : null,
                color: withBGColor ? AppColor.bg : null),
          )),
          Positioned(
            top: 0,
            bottom: 0, width: MediaQuery.of(context).size.width,
            // child: SingleChildScrollView(
            //   physics: const BouncingScrollPhysics(),
            //   padding: fullScreen
            //       ? const EdgeInsets.fromLTRB(12, 90, 12, 12)
            //       : const EdgeInsets.all(12),
            //   child: child,
            // )
            child: child,
          )
        ],
      ),
    ));
  }
}
