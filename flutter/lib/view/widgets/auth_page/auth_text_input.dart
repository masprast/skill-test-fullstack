import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class AuthTextInput extends StatelessWidget {
  const AuthTextInput(
      {super.key,
      required this.controller,
      required this.isPassword,
      required this.placeholder,
      this.validator,
      this.formater,
      this.viewPassword = false,
      this.setViewPass});
  final TextEditingController controller;
  final bool isPassword;
  final bool viewPassword;
  final String placeholder;
  final String? Function(String? value)? validator;
  final List<TextInputFormatter>? formater;
  final void Function()? setViewPass;
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 18),
      decoration: BoxDecoration(
          color: Colors.white.withOpacity(.06),
          borderRadius: BorderRadius.circular(12)),
      child: TextFormField(
        onTapOutside: (event) => FocusScope.of(context).unfocus(),
        autovalidateMode: AutovalidateMode.onUserInteraction,
        validator: validator,
        controller: controller,
        obscureText: viewPassword,
        textAlignVertical: TextAlignVertical.center,
        inputFormatters: formater,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
            suffixIconConstraints: const BoxConstraints(maxHeight: 40),
            contentPadding: const EdgeInsets.all(0),
            isDense: true,
            border: InputBorder.none,
            suffixIcon: isPassword
                ? GestureDetector(
                    onTap: setViewPass,
                    child: Icon(!viewPassword
                        ? Icons.visibility
                        : Icons.visibility_off))
                : null,
            hintText: placeholder),
      ),
    );
  }
}
