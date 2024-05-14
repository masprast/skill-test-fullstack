import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';

class AboutFormatter {
  static String formatDate(String date) {
    initializeDateFormatting('ID', '');
    DateFormat df = DateFormat('dd / MM / yyyy', 'id');
    String tgl = df.format(DateTime.parse(date));
    return tgl;
  }
}
