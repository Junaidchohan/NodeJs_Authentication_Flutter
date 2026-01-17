import 'package:flutter/material.dart';
import 'package:flutter_nodejs_auth/models/user.dart';

class UserProvider extends ChangeNotifier {
  User user = User(id: "", name: "", email: "", token: "", password: "");
}
