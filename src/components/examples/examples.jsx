import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./examples.css";
import { fib, fact, pow, gcd } from "./programs";

function Examples() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [shown, setShown] = useState({
    fib: false,
    fact: false,
    pow: false,
    gcd: false,
  });

  const toggleShown = (el) => {
    const newShown = { ...shown };
    newShown[el] = !newShown[el];
    setShown(newShown);
  };

  const changeCode = (code) => {
    dispatch({ type: "changed", payload: code });
  };
  return (
    <main className="examples siteMain">
      <h2 className="examples__header siteHeader">Example of programs</h2>
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
          <button
            className={
              shown.fib
                ? "examples__expandBtn examples__expandBtn--hide"
                : "examples__expandBtn"
            }
            onClick={() => {
              toggleShown("fib");
            }}
          >
            expand
          </button>
          <pre
            className={
              shown.fib
                ? "examples__code examples__code--shown"
                : "examples__code"
            }
          >
            {fib}
          </pre>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">Factorial</h3>
          <p className="examples__desc">Returns factorial of given number.</p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(fact);
              navigate("/");
            }}
          >
            try
          </button>
          <button
            className={
              shown.fact
                ? "examples__expandBtn examples__expandBtn--hide"
                : "examples__expandBtn"
            }
            onClick={() => {
              toggleShown("fact");
            }}
          >
            expand
          </button>
          <pre
            className={
              shown.fact
                ? "examples__code examples__code--shown"
                : "examples__code"
            }
          >
            {fact}
          </pre>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">Power</h3>
          <p className="examples__desc">Takes two numbers and returns a ^ b</p>
          <button
            className="examples__runBtn"
            onClick={() => {
              changeCode(pow);
              navigate("/");
            }}
          >
            try
          </button>
          <button
            className={
              shown.pow
                ? "examples__expandBtn examples__expandBtn--hide"
                : "examples__expandBtn"
            }
            onClick={() => {
              toggleShown("pow");
            }}
          >
            expand
          </button>
          <pre
            className={
              shown.pow
                ? "examples__code examples__code--shown"
                : "examples__code"
            }
          >
            {pow}
          </pre>
        </li>
        <li className="examples__item">
          <h3 className="examples__name">GCD</h3>
          <p className="examples__desc">
            Takes two numbers and returns it's Gratest Common Divisor
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
          <button
            className={
              shown.gcd
                ? "examples__expandBtn examples__expandBtn--hide"
                : "examples__expandBtn"
            }
            onClick={() => {
              toggleShown("gcd");
            }}
          >
            expand
          </button>
          <pre
            className={
              shown.gcd
                ? "examples__code examples__code--shown"
                : "examples__code"
            }
          >
            {gcd}
          </pre>
        </li>
      </ul>
    </main>
  );
}

export default Examples;
