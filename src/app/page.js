import Script from 'next/script'
import styles from './page.module.css'
// import { Html, Head, Main, NextScript } from 'next/document'

export default function Home() {
  return (

    <div className={styles.Body__container}>
      <Script src="/api.js"></Script>
      <div className={styles.Main__container}>
        <div className={styles.Heading__container}>
          <h1 className={styles.Header__text}>Philosophy Quotes Generator</h1>
        </div>
        <div className={styles.Quotes__container}>
          <p id='quotes-text' className={styles.Quotes__text}></p>
        </div>
        <div className={styles.Btn__container}>
          <button className={styles.CTA__btn} >New quotes</button>
        </div>
      </div>
    </div>

  )
}
