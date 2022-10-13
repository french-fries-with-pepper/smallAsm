import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./examples.css";
import { fib, fact, pow, gcd } from "./programs";

function Examples() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeCode = (code) => {
    dispatch({ type: "changed", payload: code });
  };
  return (
    <main className="examples">
      <h2 className="examples__header">Example of programs</h2>
      <ul className="examples__list">
        <li className="examples__item">
          <h3 className="examples__name">Fibonacci</h3>
          <p className="examples__desc">
            This program takes n and returns nth fibonacci number.
          </p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(fib);
              navigate("/");
            }}
          >
            try
          </button>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">Factorial</h3>
          <p className="examples__desc">Retorns factorial of given number.</p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(fact);
              navigate("/");
            }}
          >
            try
          </button>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">Power</h3>
          <p className="examples__desc">Take two numbers and returns a ^ b</p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(pow);
              navigate("/");
            }}
          >
            try
          </button>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">GCD</h3>
          <p className="examples__desc">
            Take two numbers and returns it's Gratest Common Divisor
          </p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(gcd);
              navigate("/");
            }}
          >
            try
          </button>
        </li>
      </ul>
    </main>
  );
}

export default Examples;
