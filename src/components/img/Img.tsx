import cn from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import styles from './Img.module.css';

interface Props {
  src: string;
};

function Img(props: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      className={cn(styles.image, {
        [styles.loaded]: loaded
      })}
      {...props}
      layout="fill"
      alt=""
      onLoadingComplete={() => setLoaded(true)}
      priority
    />
  )
}

export default Img;

