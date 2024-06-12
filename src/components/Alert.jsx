// src/components/Alert.jsx
import "./Alert.css";
// import clsx from "clsx";
import css from "./Alert.module.css";




export const Alert = ({ variant, children }) => {
  return <p className={css[variant]}>{children}</p>;
};



// export const Alert = ({ variant, children }) => {
//   const classNames = ["alert", variant];

//   return <p className={classNames.join(" ")}>{children}</p>;
// };



// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };



// Синтаксис імпорту CSS-модуля


// Отримуємо об'єкт відповідності імен класів
console.log(css); // { alert: "Alert_alert_ax7yz" }

