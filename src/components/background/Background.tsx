import styles from './Background.module.css';

interface Ball {
  id: number;
  x: number;
  y: number;
  r: number;
  color: string;
};

const balls: Array<Ball> = [
  {
    id: 1,
    x: 10,
    y: 20,
    radius: 20,
    rotation: 0,
    color: '#d73d6c'
  },
  {
    id: 2,
    x: 40,
    y: 60,
    radius: 30,
    rotation: 80,
    color: '#d57276'
  },
  {
    id: 3,
    x: 40,
    y: 60,
    radius: 20,
    rotation: 80,
    color: '#ffd700'
  },
  {
    id: 4,
    x: 70,
    y: 20,
    radius: 20,
    rotation: 175,
    color: '#c0cccc'
  },
  {
    id: 5,
    x: 60,
    y: 50,
    radius: 30,
    rotation: 230,
    color: '#65b2c6'
  },
  {
    id: 6,
    x: 20,
    y: 50,
    radius: 20,
    rotation: 230,
    color: '#65b2c6'
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
                transform: `rotate(${ball.rotation}deg)`,
                left: `${ball.x}%`,
                right: `${ball.y}%`,
                width: `${ball.radius * 2}%`,
              }}
            >
              <div
                className={styles.ball}
                style={{
                  background: ball.color
                }}
              ></div>
            </div>
          )
        })}
      </div>
      <div class={styles.overlay}></div>
    </div>
  );
}

export default Background;

