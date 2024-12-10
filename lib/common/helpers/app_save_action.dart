/*
 * @ Author: Flutter Journey 🎯 <flutterjourney.org@gmail.com>
 * @ Created: 2024-12-09 13:15:47
 * @ Message: You look very hardworking 👨‍💻. Keep focusing on your goals. 🌤️
 */

import 'package:url_launcher/url_launcher.dart';

class GitHubService {
  final String username = 'Flutter-Journey';
  final String repository = 'Fruit-Cutting-Game';
  final String mode;
  final bool win;
  final String baseIssueUrl;
  final String title;

  GitHubService({
    required String time,
    required String score,
    required this.mode,
    required this.win,
  })  : title = 'Game Result Submission: $time - Score: $score - Mode: $mode - Win: ${win ? 1 : 0}',
        baseIssueUrl =
            'https://github.com/Flutter-Journey/Fruit-Cutting-Game/issues/new?assignees=&labels=game-result&projects=&template=game_result.md';

  void createIssue() async {
    // Encode title to include in the URL
    // final encodedTitle = Uri.encodeComponent(title);
    final url = '$baseIssueUrl&title=$title';

    if (await canLaunch(url)) {
      await launch(url);
    } else {
      throw 'Could not launch $url';
    }
  }
}
