import styles from './pageNotFound.module.scss';

const PageNotFound = () => {
  return (
    <div className={styles.pageNotFoundContainer}>
      <h1 className={styles.pageNotFoundTitle}>
        404 This site cannot be reached
      </h1>
      <img src="https://bit.ly/3fTyW3K" alt=""></img>
    </div>
  );
};

export default PageNotFound;
