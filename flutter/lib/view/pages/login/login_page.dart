import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/widgets/auth_page/auth_base.dart';
import 'package:frontend_youapp/view/widgets/auth_page/auth_text_input.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final formKey = GlobalKey<FormState>();
  final TextEditingController controllerUser = TextEditingController();
  final TextEditingController controllerPass = TextEditingController();
  bool viewPass = true;

  changeViewPass() {
    setState(() {
      viewPass = !viewPass;
    });
  }

  @override
  Widget build(BuildContext context) {
    // return BasePage(
    //     withBGColor: false,
    //     child: SingleChildScrollView(
    //       padding: const EdgeInsets.all(24),
    //       physics: const BouncingScrollPhysics(),
    //       child: Column(
    //         children: [
    //           const SizedBox(
    //             height: 156,
    //           ),
    //           Align(
    //             alignment: AlignmentDirectional.centerStart,
    //             child: Padding(
    //               padding: const EdgeInsets.only(left: 16),
    //               child: Text(
    //                 widget.title,
    //                 style: const TextStyle(
    //                     color: Colors.white,
    //                     fontSize: 28,
    //                     fontWeight: FontWeight.bold),
    //               ),
    //             ),
    //           ),
    //           const SizedBox(
    //             height: 24,
    //           ),
    //           textInput('username', controllerUser, false),
    //           const SizedBox(height: 18),
    //           textInput('password', controllerPass, true),
    //           const SizedBox(height: 32),
    //           Container(
    //             constraints:
    //                 BoxConstraints(minWidth: MediaQuery.of(context).size.width),
    //             padding: const EdgeInsets.all(14),
    //             decoration: BoxDecoration(
    //                 borderRadius: BorderRadius.circular(8),
    //                 boxShadow: const [
    //                   BoxShadow(
    //                       color: AppColor.buttonGradient1,
    //                       blurRadius: 14,
    //                       offset: Offset(0, 4))
    //                 ],
    //                 gradient: const LinearGradient(
    //                     colors: [
    //                       AppColor.buttonGradient1,
    //                       AppColor.buttonGradient
    //                     ],
    //                     begin: Alignment.bottomLeft,
    //                     end: Alignment.topRight,
    //                     stops: [.4, .7])),
    //             child: InkWell(
    //               onTap: () => print(controllerUser.text),
    //               child: Center(
    //                 child: Text(widget.title,
    //                     style: const TextStyle(
    //                         color: Colors.white,
    //                         fontWeight: FontWeight.bold,
    //                         fontSize: 18)),
    //               ),
    //             ),
    //           ),
    //           const SizedBox(height: 36),
    //           Row(
    //             mainAxisAlignment: MainAxisAlignment.center,
    //             children: [
    //               const Text('Don\'t Have an account?'),
    //               TextButton(
    //                   onPressed: () => navigatorKey.currentState
    //                       ?.pushNamed(AppRoute.register.name),
    //                   style: ButtonStyle(
    //                       visualDensity: VisualDensity.compact,
    //                       shape: MaterialStatePropertyAll(LinearBorder.bottom(
    //                           size: .8,
    //                           side: const BorderSide(
    //                               strokeAlign: -2,
    //                               color: AppColor.aboutTextGold,
    //                               width: 2)))),
    //                   child: const Text(
    //                     'Register here',
    //                     style: TextStyle(color: AppColor.aboutTextGold),
    //                   ))
    //             ],
    //           )
    //         ],
    //       ),
    //     ));
    return AuthBase(
        formState: formKey,
        inputs: [
          AuthTextInput(
              validator: (value) {
                if (controllerUser.text.startsWith(RegExp(r'[0-9]'))) {
                  return 'Username harus diawali dengan huruf';
                }
                return null;
              },
              controller: controllerUser,
              isPassword: false,
              placeholder: 'username'),
          AuthTextInput(
              validator: (value) {
                if (controllerPass.text.length < 8) {
                  return 'Password minimal 8 karakter';
                }
                return null;
              },
              viewPassword: viewPass,
              setViewPass: changeViewPass,
              controller: controllerPass,
              isPassword: true,
              placeholder: 'password')
        ],
        authProcess: () {
          if (controllerUser.text == controllerPass.text) {
            navigatorKey.currentState?.pushReplacementNamed(AppRoute.home.name);
          } else {
            messengerKey.currentState?.showSnackBar(const SnackBar(
                content: Text('Password & username doesn\'t match')));
          }
        },
        isLogin: true);
  }
}
