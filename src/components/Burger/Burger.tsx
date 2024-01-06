import styles from "./index.module.scss";

interface toggle {
  toggleMenu: boolean;
  setToggleMenu: (arg: boolean) => void;
}

const Burger = ({ toggleMenu, setToggleMenu }: toggle) => {
  return (
    <button
      className={styles.burger}
      onClick={() => setToggleMenu(!toggleMenu)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="37"
        height="29"
        viewBox="0 0 37 29"
        fill="none"
      >
        <path
          d="M35.4583 26H1.54167C0.690667 26 0 26.672 0 27.5C0 28.328 0.690667 29 1.54167 29H35.4583C36.3093 29 37 28.328 37 27.5C37 26.672 36.3093 26 35.4583 26Z"
          fill="black"
        />
        <path
          d="M35.5 0H14.5C13.672 0 13 0.672 13 1.5C13 2.328 13.672 3 14.5 3H35.5C36.328 3 37 2.328 37 1.5C37 0.672 36.328 0 35.5 0Z"
          fill="black"
        />
        <path
          d="M35.4583 9H1.54167C0.690667 9 0 9.672 0 10.5C0 11.328 0.690667 12 1.54167 12H35.4583C36.3093 12 37 11.328 37 10.5C37 9.672 36.3093 9 35.4583 9Z"
          fill="black"
        />
        <path
          d="M35.5 18H14.5C13.672 18 13 18.672 13 19.5C13 20.328 13.672 21 14.5 21H35.5C36.328 21 37 20.328 37 19.5C37 18.672 36.328 18 35.5 18Z"
          fill="black"
        />
      </svg>
    </button>
  );
};

export default Burger;
