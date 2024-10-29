import 'dart:math';

import 'package:flame/components.dart';
import 'package:flame/events.dart';
import 'package:flame/game.dart';
import 'package:flame/parallax.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart' as material;
import 'package:flutter/services.dart' as services;

import 'package:fruit_cutting_game/core/configs/assets/app_images.dart';
import 'package:fruit_cutting_game/core/configs/constants/app_configs.dart';
import 'package:fruit_cutting_game/core/configs/constants/app_router.dart';
import 'package:fruit_cutting_game/data/models/fruit_model.dart';
import 'package:fruit_cutting_game/presentation/game/game.dart';
import 'package:fruit_cutting_game/presentation/game_save/game_save.dart';
import 'package:fruit_cutting_game/presentation/game_over/game_over.dart';
import 'package:fruit_cutting_game/presentation/game_pause/game_pause.dart';
import 'package:fruit_cutting_game/presentation/game_victory/game_victory.dart';
import 'package:fruit_cutting_game/presentation/home/home.dart';

/// Main game class that extends FlameGame
class MainRouterGame extends FlameGame with KeyboardEvents {
  late final RouterComponent router;
  late double maxVerticalVelocity;

  // List of available fruits in the game
  final List<FruitModel> fruits = [
    FruitModel(image: AppImages.apple),
    FruitModel(image: AppImages.banana),
    FruitModel(image: AppImages.kiwi),
    FruitModel(image: AppImages.orange),
    FruitModel(image: AppImages.peach),
    FruitModel(image: AppImages.pineapple),
    FruitModel(image: AppImages.watermelon),
    FruitModel(image: AppImages.cherry),
    FruitModel(image: AppImages.bomb, isBomb: true),
    FruitModel(image: AppImages.flame, isBomb: true),
    FruitModel(image: AppImages.flutter, isBomb: true),
  ];

  @override
  void onLoad() async {
    super.onLoad();

    // Load images for all fruits in the list.
    for (final fruit in fruits) {
      await images.load(fruit.image);
    }

    addAll(
      [
        ParallaxComponent(
          parallax: Parallax(
            [
              await ParallaxLayer.load(
                ParallaxImageData(AppImages.homeBG),
              ),
            ],
          ),
        ),
        // Set up the router for navigating between different game screens.
        router = RouterComponent(
          initialRoute: AppRouter.homePage,
          routes: {
            AppRouter.homePage: Route(HomePage.new),
            AppRouter.gamePage: Route(GamePage.new),
            AppRouter.gameVictory: VictoryRoute(),
            AppRouter.gameSave: SaveRoute(),
            AppRouter.gameOver: GameOverRoute(),
            AppRouter.gamePause: PauseRoute(),
          },
        )
      ],
    );
  }

  @override
  void onGameResize(Vector2 size) {
    super.onGameResize(size);
    getMaxVerticalVelocity(size);
  }

  /// Calculate the maximum vertical velocity based on the game size.
  void getMaxVerticalVelocity(Vector2 size) {
    // Formula to calculate maximum vertical velocity.
    maxVerticalVelocity = sqrt(2 * (AppConfig.gravity.abs() + AppConfig.acceleration.abs()) * (size.y - AppConfig.objSize * 2)); // Adjust for the object's size.
  }

  // Field to store the player's name
  String name = '';

  // Called when a key event is received
  @override
  @mustCallSuper
  material.KeyEventResult onKeyEvent(
    material.KeyEvent event,
    Set<services.LogicalKeyboardKey> keysPressed,
  ) {
    super.onKeyEvent(event, keysPressed);

    if (event is services.KeyDownEvent) {
      // Handle character input
      if (event.character != null) {
        name += event.character!;
      }
      // Handle backspace
      else if (event.logicalKey == services.LogicalKeyboardKey.backspace && name.isNotEmpty) {
        name = name.substring(0, name.length - 1);
      }
    }

    return material.KeyEventResult.handled;
  }

  // Placeholder for saving the name when appropriate
  String showName() {
    return name;
  }
}