import 'package:flutter/material.dart';
import 'package:frontend_youapp/app/configs/constants/global_key.dart';
import 'package:frontend_youapp/view/widgets/auth_page/auth_base.dart';
import 'package:frontend_youapp/view/widgets/auth_page/auth_text_input.dart';

class RegisterPage extends StatefulWidget {
  const RegisterPage({super.key});

  @override
  State<RegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final formKey = GlobalKey<FormState>();
  final TextEditingController controllerEmail = TextEditingController();
  final TextEditingController controllerUser = TextEditingController();
  final TextEditingController controllerPass = TextEditingController();
  final TextEditingController controllerConfirmPass = TextEditingController();
  bool viewPass = false;

  registerProcess() {
    if (controllerPass.text == controllerConfirmPass.text) {
    } else {
      messengerKey.currentState?.showSnackBar(const SnackBar(
          shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.vertical(top: Radius.circular(8))),
          content: Text('Password doesn\'t match')));
    }
  }

  changeViewPass() {
    setState(() {
      viewPass = !viewPass;
    });
  }

  @override
  Widget build(BuildContext context) {
    return AuthBase(
        formState: formKey,
        inputs: [
          AuthTextInput(
              validator: (value) {
                if (controllerEmail.text
                    .contains(RegExp(r'[a-z0-9_]@[a-zA-Z0-9].[a-z]'))) {
                  return null;
                }
                return 'Isi email dengan alamat yang benar!';
              },
              controller: controllerEmail,
              isPassword: false,
              placeholder: 'Email'),
          AuthTextInput(
              validator: (value) {
                if (controllerUser.text.startsWith(RegExp(r'[0-9]'))) {
                  return 'Username harus diawali dengan huruf';
                }
                return null;
              },
              controller: controllerUser,
              isPassword: false,
              placeholder: 'Username'),
          AuthTextInput(
              validator: (value) {
                if (controllerPass.text.length < 8) {
                  return 'Password minimal 8 karakter';
                }
                return null;
              },
              controller: controllerPass,
              isPassword: true,
              viewPassword: viewPass,
              setViewPass: () => changeViewPass,
              placeholder: 'Password'),
          AuthTextInput(
              validator: (value) {
                if (controllerPass.text.length < 8) {
                  return 'Password minimal 8 karakter';
                }
                return null;
              },
              controller: controllerConfirmPass,
              isPassword: true,
              viewPassword: viewPass,
              setViewPass: () => changeViewPass,
              placeholder: 'Confirm password')
        ],
        authProcess: () => print('object'),
        isLogin: false);
  }
}
