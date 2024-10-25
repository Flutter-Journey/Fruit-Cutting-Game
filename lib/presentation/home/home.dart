import 'package:flame/components.dart';
import 'package:flutter/material.dart';
import 'package:fruit_cutting_game/common/widgets/button/rounded_button.dart';
import 'package:fruit_cutting_game/core/configs/assets/app_images.dart';
import 'package:fruit_cutting_game/core/configs/constants/app_router.dart';
import 'package:fruit_cutting_game/core/configs/theme/app_colors.dart';
import 'package:fruit_cutting_game/main_router_game.dart';
import 'package:fruit_cutting_game/presentation/home/widgets/tutorial_fruit_component.dart';
import 'package:fruit_cutting_game/presentation/home/widgets/tutorial_rule_component.dart';

class HomePage extends Component with HasGameReference<MainRouterGame> {
  late final RoundedButton _button;

  late final TutorialRuleComponent _tutorialRuleLose1Component;
  late final TutorialRuleComponent _tutorialRuleLose2Component;
  late final TutorialRuleComponent _tutorialRuleScore1Component;
  late final TutorialRuleComponent _tutorialRuleScore2Component;

  // ignore: unused_field
  late final TextComponent _ediblesTextComponent;
  late final TextComponent _bombTextComponent;

  @override
  void onLoad() async {
    super.onLoad();

    final textTitlePaint = TextPaint(
      style: const TextStyle(
        fontSize: 26,
        color: AppColors.white,
        fontFamily: 'Insan',
        letterSpacing: 2.0,
        fontWeight: FontWeight.bold,
      ),
    );

    addAll(
      [
        _button = RoundedButton(
          text: 'Start',
          onPressed: () {
            game.router.pushNamed(AppRouter.gamePage);
          },
          bgColor: AppColors.blue,
          borderColor: AppColors.white,
        ),
        _ediblesTextComponent = TextComponent(
          text: 'Edibles',
          position: Vector2(45, 10),
          anchor: Anchor.topLeft,
          textRenderer: textTitlePaint,
        ),
        _tutorialRuleLose1Component = TutorialRuleComponent(
          text: 'Bomb explodes is lose,',
          textColor: AppColors.white,
          fontSize: 32,
        ),
        _tutorialRuleLose2Component = TutorialRuleComponent(
          text: 'miss three fruit is a loss.',
          textColor: AppColors.white,
          fontSize: 32,
        ),
        _tutorialRuleScore1Component = TutorialRuleComponent(
          text: 'Hit 1 fruit for 1 point,',
          textColor: AppColors.white,
          fontSize: 32,
        ),
        _tutorialRuleScore2Component = TutorialRuleComponent(
          text: '1 fruit can earn many points..',
          textColor: AppColors.white,
          fontSize: 32,
        ),
        TutorialFruitsListComponent(
          isLeft: true,
          fruits: [
            TutorialFruitComponent(text: 'Apple', imagePath: AppImages.apple, isLeft: true),
            TutorialFruitComponent(text: 'Banana', imagePath: AppImages.banana, isLeft: true),
            TutorialFruitComponent(text: 'Cherry', imagePath: AppImages.cherry, isLeft: true),
            TutorialFruitComponent(text: 'Kiwi', imagePath: AppImages.kiwi, isLeft: true),
            TutorialFruitComponent(text: 'Orange', imagePath: AppImages.orange, isLeft: true),
          ],
        )..position = Vector2(0, 50),
        _bombTextComponent = TextComponent(
          text: 'Bomb',
          position: Vector2(game.size.x - 45, 10),
          anchor: Anchor.topRight,
          textRenderer: textTitlePaint,
        ),
        TutorialFruitsListComponent(
          isLeft: false,
          fruits: [
            TutorialFruitComponent(text: 'Bomp', imagePath: AppImages.bomb, isLeft: false),
            TutorialFruitComponent(text: 'Flame', imagePath: AppImages.flame, isLeft: false),
            TutorialFruitComponent(text: 'Flutter', imagePath: AppImages.flutter, isLeft: false),
          ],
        )..position = Vector2(0, 50),
      ],
    );
    ;
  }

  @override
  void onGameResize(Vector2 size) {
    super.onGameResize(size);

    // button in center of page
    _button.position = size / 2;
    _tutorialRuleScore1Component.position = Vector2(game.size.x / 2, game.size.y - game.size.y / 3.9);
    _tutorialRuleScore2Component.position = Vector2(game.size.x / 2, game.size.y - game.size.y / 5.1);
    _tutorialRuleLose1Component.position = Vector2(game.size.x / 2, game.size.y / 5.1);
    _tutorialRuleLose2Component.position = Vector2(game.size.x / 2, game.size.y / 3.9);
    _bombTextComponent.position = Vector2(game.size.x - 45, 10);
  }
}
