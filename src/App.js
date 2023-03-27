import axios from "axios";
import { useEffect, useState } from "react";
import buttonImg from "./images/icon-dice.svg";
import styles from "./app.module.scss";
function App() {
  const [advice, setAdvice] = useState([]);
  const [changeAdvice, setChangeAdvice] = useState(false);
  useEffect(() => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then(({ data }) => setAdvice([data.slip]));
  }, [changeAdvice]);
  return (
    <div className={styles.advice}>
      <div className={styles.advice_wrapper}>
        {!!advice.length ? (
          advice.map((elem) => {
            console.log(elem);
            return (
              <div key={elem.id}>
                <h1 className={styles.advice_title}>A D V I C E # {elem.id}</h1>
                <p className={styles.advice_text}>{elem.advice}</p>
              </div>
            );
          })
        ) : (
          <h1 className={styles.advice_load}>Loading....</h1>
        )}
        <div className={styles.advice_container_btn}>
          <button
            onClick={() => setChangeAdvice(!changeAdvice)}
            className={styles.btn}
          >
            <img src={buttonImg} alt="button-decoration"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
