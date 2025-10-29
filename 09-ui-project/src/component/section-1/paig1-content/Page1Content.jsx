import React from 'react';
import styles from './page1-content.module.css';

const Page1Content = ({ images }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.left}>
        <h1>Perspective customer segmentation</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, nemo qui vel ea odit
          deserunt natus reiciendis architecto? Eveniet, laborum?
        </p>
        <i className="ri-arrow-right-up-line"></i>
      </div>

      <div className={styles.right}>
        <div
          className={`${styles.box} ${styles.one}`}
          style={{ backgroundImage: `url(${images.img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className={`${styles.box} ${styles.two}`}
          style={{ backgroundImage: `url(${images.img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        <div
          className={`${styles.box} ${styles.three}`}
          style={{ backgroundImage: `url(${images.img3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>
    </div>
  );
};

export default Page1Content;
