import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/app_color.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/app/configs/enum/app_route.dart';
import 'package:frontend_youapp/view/pages/base_page.dart';

class AuthBase extends StatelessWidget {
  const AuthBase(
      {super.key,
      required this.inputs,
      required this.authProcess,
      required this.isLogin,
      required this.formState});
  final bool isLogin;
  final List<Widget> inputs;
  final void Function() authProcess;
  final GlobalKey<FormState> formState;
  @override
  Widget build(BuildContext context) {
    return BasePage(
        appBar: isLogin
            ? null
            : AppBar(
                automaticallyImplyLeading: true,
                backgroundColor: Colors.transparent,
                shadowColor: Colors.transparent,
                elevation: 0,
              ),
        withBGColor: false,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          physics: const BouncingScrollPhysics(),
          child: Column(
            children: [
              const SizedBox(
                height: 110,
              ),
              Align(
                alignment: AlignmentDirectional.centerStart,
                child: Padding(
                  padding: const EdgeInsets.only(left: 16),
                  child: Text(
                    isLogin ? 'Login' : 'Register',
                    style: const TextStyle(
                        color: Colors.white,
                        fontSize: 28,
                        fontWeight: FontWeight.bold),
                  ),
                ),
              ),
              const SizedBox(
                height: 24,
              ),
              Form(
                  key: formState,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      for (var i in inputs) ...[i, const SizedBox(height: 12)],
                    ],
                  )),
              const SizedBox(height: 20),
              Container(
                constraints:
                    BoxConstraints(minWidth: MediaQuery.of(context).size.width),
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(8),
                    boxShadow: const [
                      BoxShadow(
                          color: AppColor.buttonGradient1,
                          blurRadius: 14,
                          offset: Offset(0, 4))
                    ],
                    gradient: const LinearGradient(
                        colors: [
                          AppColor.buttonGradient1,
                          AppColor.buttonGradient
                        ],
                        begin: Alignment.bottomLeft,
                        end: Alignment.topRight,
                        stops: [.4, .7])),
                child: InkWell(
                  onTap: authProcess,
                  child: Center(
                    child: Text(isLogin ? 'Login' : 'Register',
                        style: const TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 18)),
                  ),
                ),
              ),
              const SizedBox(height: 36),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                      isLogin ? 'Don\'t have an account?' : 'Have an account?'),
                  TextButton(
                      onPressed: () => isLogin
                          ? navigatorKey.currentState
                              ?.pushNamed(AppRoute.register.name)
                          : navigatorKey.currentState?.pop(),
                      style: ButtonStyle(
                          visualDensity: VisualDensity.compact,
                          shape: MaterialStatePropertyAll(LinearBorder.bottom(
                              size: .8,
                              side: const BorderSide(
                                  strokeAlign: -2,
                                  color: AppColor.aboutTextGold,
                                  width: 2)))),
                      child: Text(
                        '${isLogin ? 'Register' : 'Login'} here',
                        style: const TextStyle(color: AppColor.aboutTextGold),
                      ))
                ],
              )
            ],
          ),
        ));
  }
}
