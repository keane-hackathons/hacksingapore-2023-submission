import React, { useEffect, useRef } from "react";
import Phaser from 'phaser'
import LoadingScene from './phaser/LoadingScene'
import MainScene from './phaser/MainScene'
import GameScene from './phaser/GameScene'
import {
  IS_DEBUG,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  MIN_SCREEN_WIDTH,
  MIN_SCREEN_HEIGHT,
  MAX_SCREEN_WIDTH,
  MAX_SCREEN_HEIGHT
} from './phaser/constants'

export default function App() {
  const isFirstLoad = useRef(true);

  const config = {
    type: Phaser.AUTO,
    parent: "infinite-cars",
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade: {
        debug: IS_DEBUG,
      },
    },
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
      min: {
        width: MIN_SCREEN_WIDTH,
        height: MIN_SCREEN_HEIGHT,
      },
      max: {
        width: MAX_SCREEN_WIDTH,
        height: MAX_SCREEN_HEIGHT,
      },
    },
    scene: [LoadingScene, MainScene, GameScene],
  };

  useEffect(() => {
    if (isFirstLoad.current === true) {
      new Phaser.Game(config);
    }

    return () => {
      isFirstLoad.current = false;
    };
  }, []);

  return <div id="infinite-cars" />;
}
