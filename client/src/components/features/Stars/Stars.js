import styles from './Stars.module.scss';
import {useEffect} from 'react';


const Stars = () => {
  
  function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function createStar() {
      const space = document.getElementById('stars');
      const star = document.createElement('span');
      star.classList.add(styles.star);

      // size
      const size = star.style.width = random(2, 5) + 'px';
      star.style.width = size;
      star.style.height = size;

      // positon
      star.style.top = random(2, 85) + '%';
      star.style.left = random(2, 98) + '%';

      // glow
      const glow = random(3, 5);
      star.style.boxShadow = '0px 0px ' + glow + 'px ' + glow / 1.6 + 'px   rgba(255, 255, 255, 0.3)';

      // animation
      star.style.animationDuration = random(3000, 5000) + 'ms';
      
      space.appendChild(star);
  }

  function populateSpace(nbr) {
      for (var i = 0; i < nbr; i++) {
          createStar();
      }
  }

  useEffect(() => {
    populateSpace(150);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.rot}>
      <div className={styles.stars} id='stars'></div>
      <img 
        className={styles.moon}
        alt={'moon'}
        src={`${process.env.PUBLIC_URL}/images/moon.png`} />
      <img 
        className={styles.nebula2}
        alt={'nebula'}
        src={`${process.env.PUBLIC_URL}/images/nebula2.png`} />
      <img 
        className={styles.nebula3}
        alt={'nebula'}
        src={`${process.env.PUBLIC_URL}/images/nebula3.png`} />
      <img 
        className={styles.nebula}
        alt={'nebula'}
        src={`${process.env.PUBLIC_URL}/images/nebula.png`} />
    </div>
  );
};

export default Stars;