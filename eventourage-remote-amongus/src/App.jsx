import React, { useEffect, useRef } from "react";
import Phaser from 'phaser'
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  MIN_SCREEN_WIDTH,
  MIN_SCREEN_HEIGHT,
  MAX_SCREEN_WIDTH,
  MAX_SCREEN_HEIGHT
} from './phaser/constants'
import MyGame from './phaser/scene'

export default function App() {
  const isFirstLoad = useRef(true);

  const config = {
    type: Phaser.AUTO,
    parent: "amongus",
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
    scene: MyGame
  };

  useEffect(() => {
    if (isFirstLoad.current === true) {
      new Phaser.Game(config);
    }

    return () => {
      isFirstLoad.current = false;
    };
  }, []);

  return <div id="amongus" />;
}
