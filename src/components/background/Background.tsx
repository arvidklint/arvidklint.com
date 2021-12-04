import Img from '../img/Img';

import styles from './Background.module.css';

interface Ball {
  id: number;
  x: number;
  y: number;
  radius: number;
  rotation: number;
  fileName: string;
};

const balls: Array<Ball> = [
  {
    id: 1,
    x: -10,
    y: -10,
    radius: 25,
    rotation: 0,
    fileName: 'ball_red.png',
  },
  {
    id: 5,
    x: 5,
    y: -20,
    radius: 20,
    rotation: 175,
    fileName: 'ball_blue.png',
  },
  {
    id: 3,
    x: 0,
    y: -10,
    radius: 20,
    rotation: 100,
    fileName: 'ball_yellow.png',
  },
  {
    id: 2,
    x: -10,
    y: 10,
    radius: 30,
    rotation: 80,
    fileName: 'ball_red.png',
  },
  {
    id: 6,
    x: -10,
    y: 0,
    radius: 30,
    rotation: 230,
    fileName: 'ball_blue.png',
  },
  {
    id: 4,
    x: 10,
    y: 15,
    radius: 30,
    rotation: 100,
    fileName: 'ball_yellow.png',
  },
]

function Background() {
  return (
    <div className={styles.container}>
      <div className={styles.ballContainer}>
        {balls.map(ball => {
          return (
            <div
              key={ball.id}
              className={styles.ballWrapper}
              style={{
                transform: `translate(${ball.x}%, ${ball.y}%) rotate(${ball.rotation}deg)`,
                width: `${ball.radius * 2 * 2}%`,
              }}
            >
              <div
                className={styles.ball}
              >
                <Img
                  src={`/balls/${ball.fileName}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Background;

