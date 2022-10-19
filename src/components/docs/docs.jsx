import "./docs.css";

function Docs() {
  return (
    <main className="docs siteMain">
      <h2 className="siteHeader docs__header">Documentation</h2>
      <article className="docs__article">
        <h3 className="docs__articleHeader">Summary</h3>
        <p className="docs__articleText">
          Small Asm is a simple assembler interpreter, written in JavaScript. In
          fact, this is a frontend for my solution of{" "}
          <a
            className="docs__externalLink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.codewars.com/kata/58e61f3d8ff24f774400002c"
          >
            codewars
          </a>{" "}
          problem.
        </p>
        <p className="docs__articleText">
          There is no OS emulation, but it has some I/O tools. Syntax is very
          similar to Intel.The interpreter has instructions, labels, functions
          and jmp conditions. Comments and indentation are also available.
        </p>
        <p className="docs__articleText">
          It is possible to use any register name (without spaces and
          non-alphanumeric characters). In examples i use register names the
          same as{" "}
          <a
            href="https://en.wikipedia.org/wiki/Intel_8080#Registers"
            className="docs__externalLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intel 8080 cpu{" "}
          </a>{" "}
          (A, B, D, H, C, E, L). There is no register extension logic. One
          register can handle one integer number.
        </p>
        <h3 className="docs__articleHeader">Instructions</h3>
        <ul>
          <li>
            <code>mov x, y</code>
            <span>
              - copyes y (either an integer or the value of a register) into
              register x.
            </span>
          </li>
          <li>
            <code>inc x</code>
            <span>- increases the content of register x by one.</span>
          </li>
          <li>
            <code>dec x</code>
            <span>- decreases the content of register x by one.</span>
          </li>
          <li>
            <code>add x, y</code>
            <span>
              - adds the content of the register x with y (either an integer or
              the value of a register) and stores the result in x (i.e.
              register[x] += y).
            </span>
          </li>
          <li>
            <code>sub x, y</code>
            <span>
              - subtracts y (either an integer or the value of a register) from
              the register x and stores the result in x (i.e. register[x] -= y).
            </span>
          </li>
          <li>
            <code>mul x, y</code>
            <span>- same as multiply (i.e. register[x] *= y).</span>
          </li>

          <li>
            <code>cmp x, y</code>
            <span>
              - compares x (either an integer or the value of a register) and y
              (either an integer or the value of a register). The result is used
              in the conditional jumps (jne, je, jge, jg, jle and jl)
            </span>
          </li>

          <li>
            <code>msg 'Some string value', x</code>
            <span>
              - this instruction stores the output of the program. It may
              contain text strings (delimited by single quotes) and registers.
              The number of arguments isn't limited and will vary, depending on
              the program.
            </span>
          </li>
          <li>
            <code>end</code>
            <span>
              - indicates that the program ends correctly, so the stored output
              is returned (if the program terminates without this instruction it
              will return error code).
            </span>
          </li>
          <li>
            <code>; comment</code>
            <span>
              - all content after <code>;</code>will be ignored.
            </span>
          </li>
        </ul>
        <h3 className="docs__articleHeader">Control flow</h3>
        <ul>
          <li>
            <code>label:</code>
            <span>
              - defines a label position (<code>label = identifier + ":"</code>,
              an identifier being a string that does not match any other
              command). Jump commands and <code>call</code>are aimed to these
              labels positions in the program.
            </span>
          </li>
          <li>
            <code>jmp lbl</code>
            <span>
              - jumps to the label <code>lbl</code>.
            </span>
          </li>
          <li>
            <code>jne lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if the values of the previous{" "}
              <code>cmp</code>command were not equal.
            </span>
          </li>
          <li>
            <code>je lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if the values of the previous{" "}
              <code>cmp</code>command were equal.
            </span>
          </li>
          <li>
            <code>jge lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if x was greater or equal
              than y in the previous <code>cmp</code>command.
            </span>
          </li>
          <li>
            <code>jg lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if x was greater than y in
              the previous <code>cmp</code>command.
            </span>
          </li>
          <li>
            <code>jle lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if x was less or equal than y
              in the previous <code>cmp</code>command.
            </span>
          </li>
          <li>
            <code>jl lbl</code>
            <span>
              - jumps to the label <code>lbl</code>if x was less than y in the
              previous <code>cmp</code>command.
            </span>
          </li>
          <li>
            <code>call lbl</code>
            <span>
              - call to the subroutine identified by <code>lbl</code>. When a{" "}
              <code>ret</code>is found in a subroutine, the instruction pointer
              will be retuthis instructionrned to the instruction next to this{" "}
              <code>call</code>
              command.
            </span>
          </li>
          <li>
            <code>ret</code>
            <span>
              - when a <code>ret</code>is found in a subroutine, the instruction
              pointer will be returned to the instruction that called the
              current function.
            </span>
          </li>
        </ul>
        <h3 className="docs__articleHeader"></h3>
        <p className="docs__articleText"></p>
        <h3 className="docs__articleHeader"></h3>
        <p className="docs__articleText"></p>
      </article>
    </main>
  );
}

export default Docs;
