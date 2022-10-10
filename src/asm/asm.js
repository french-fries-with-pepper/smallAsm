function assemblerInterpreter(program) {
  /* Object with methods that parse msg command*/
  const msgParser = {
    removeComments: (line) => {
      const PREFIX = "msg";
      const PREFIXSIZE = PREFIX.length;
      const argsStr = line.slice(PREFIXSIZE).trim();
      const argsArr = [];
      let currentArg = "";
      let isRegister = true;

      for (let i = 0; i < argsStr.length; i++) {
        if (!isRegister) {
          currentArg += argsStr.charAt(i);
        }
        if (argsStr.charAt(i) === "'") {
          if (isRegister) {
            currentArg += argsStr.charAt(i);
            isRegister = false;
          } else {
            isRegister = true;
            argsArr.push(currentArg);
            currentArg = "";
          }
          continue;
        }

        if (isRegister) {
          if (argsStr.charAt(i) === ";") break;

          if (argsStr.charAt(i) === " ") continue;
          if (argsStr.charAt(i) === ",") {
            argsArr.push(currentArg);
            currentArg = "";
          } else {
            currentArg += argsStr.charAt(i);
          }
        }
      }

      if (currentArg !== "") {
        argsArr.push(currentArg);
      }
      return `${PREFIX} ${argsArr.join(", ")}`;
    },
    parseMsg: (line) => {
      const PREFIX = "msg";
      const PREFIXSIZE = PREFIX.length;
      const argsStr = line.slice(PREFIXSIZE).trim();
      const argsArr = [];
      let currentArg = "";
      let isRegister = true;

      for (let i = 0; i < argsStr.length; i++) {
        if (argsStr.charAt(i) === "'") {
          if (isRegister) {
            if (currentArg !== "") argsArr.push(currentArg);
            currentArg += "'";
            isRegister = false;
          } else {
            currentArg += "'";
            argsArr.push(currentArg);
            currentArg = "";
            isRegister = true;
          }
          continue;
        }
        if (!isRegister) {
          currentArg += argsStr.charAt(i);
          continue;
        }

        if (argsStr.charAt(i) === ",") {
          if (currentArg !== "") argsArr.push(currentArg);
          currentArg = "";
          continue;
        }
        if (argsStr.charAt(i) === " ") continue;

        currentArg += argsStr.charAt(i);
      }
      if (currentArg !== "") argsArr.push(currentArg);
      return {
        command: PREFIX,
        args: argsArr,
      };
    },
  };

  /* CPU object */
  const cpu = {
    output: [],
    currentPointer: [0],
    stack: [],
    registers: {},
    labels: {},
    cmpFlag: 0b00,
    nextTick() {
      this.currentPointer[this.currentPointer.length - 1]++;
    },
    mov(reg, val) {
      const n = parseInt(val, 10);
      if (isNaN(n)) {
        this.registers[reg] = this.registers[val];
      } else {
        this.registers[reg] = n;
      }
      this.nextTick();
    },
    inc(reg) {
      this.registers[reg]++;
      this.nextTick();
    },
    dec(reg) {
      this.registers[reg]--;
      this.nextTick();
    },
    jnz(reg, pos) {
      if (this.registers[reg] !== 0) {
        this.currentPointer[this.currentPointer.length - 1] += parseInt(
          pos,
          10
        );
      } else {
        this.nextTick();
      }
    },
    add(reg, val) {
      const n = parseInt(val, 10);
      if (isNaN(n)) {
        this.registers[reg] += this.registers[val];
      } else {
        this.registers[reg] += n;
      }
      this.nextTick();
    },
    sub(reg, val) {
      const n = parseInt(val, 10);
      if (isNaN(n)) {
        this.registers[reg] -= this.registers[val];
      } else {
        this.registers[reg] -= n;
      }
      this.nextTick();
    },
    mul(reg, val) {
      const n = parseInt(val, 10);
      if (isNaN(n)) {
        this.registers[reg] *= this.registers[val];
      } else {
        this.registers[reg] *= n;
      }
      this.nextTick();
    },
    div(reg, val) {
      let n = parseInt(val, 10);
      if (isNaN(n)) n = this.registers[val];
      this.registers[reg] =
        (this.registers[reg] - (this.registers[reg] % n)) / n;
      this.nextTick();
    },
    cmp(reg, val) {
      this.cmpFlag = 0b00;
      let n = parseInt(val, 10);
      if (isNaN(n)) n = this.registers[val];
      if (this.registers[reg] === n) this.cmpFlag |= 0b10;
      if (this.registers[reg] > n) this.cmpFlag |= 0b01;
      this.nextTick();
    },
    jmp(label) {
      this.currentPointer[this.currentPointer.length - 1] = this.labels[label];
    },

    jne(label) {
      if (!(this.cmpFlag & 0b10)) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },
    je(label) {
      if (this.cmpFlag & 0b10) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },
    jge(label) {
      if (this.cmpFlag & 0b11) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },

    jg(label) {
      if (this.cmpFlag === 0b01) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },

    jle(label) {
      if (this.cmpFlag === 0b10 || this.cmpFlag === 0b00) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },
    jl(label) {
      if (this.cmpFlag === 0b00) {
        this.currentPointer[this.currentPointer.length - 1] =
          this.labels[label];
      } else {
        this.nextTick();
      }
    },
    msg(...args) {
      const res = args.map((arg) => {
        if (arg.startsWith("'")) return arg.slice(1, -1);
        else return `${this.registers[arg]}`;
      });
      this.nextTick();
      //console.log(res.join(""));
      this.output.push(res.join(""));
    },
    call(label) {
      this.nextTick();
      this.currentPointer.push(this.labels[label]);
    },
  };

  /*
   * Parser object
   * wich parse input
   * to
   * {
   *   command: string | null,
   *   args: [string] | null,
   * }
   */
  const parser = (text) => {
    const removeComments = (line) => {
      if (line === "") return "";
      if (line.startsWith(";")) return "";
      if (line.startsWith("msg")) return msgParser.removeComments(line);
      const startComment = line.indexOf(";");
      if (startComment === -1) return line;
      return line.slice(0, startComment).trim();
    };
    const lines = text.split("\n").map((line) => removeComments(line.trim()));
    //console.log(lines);
    const commandsArr = lines.map((line) => {
      if (line.startsWith("msg")) return msgParser.parseMsg(line);
      if (line === "") return { command: null, args: null };
      const splitedStr = line.split(" ");
      if (splitedStr.length === 1)
        return { command: splitedStr[0], args: null };
      const command = splitedStr.shift();
      const args = splitedStr
        .join("")
        .split(",")
        .map((c) => c.trim());
      return { command, args };
    });
    commandsArr.forEach((c, idx) => {
      if (c.command && c.command.endsWith(":"))
        cpu.labels[c.command.slice(0, -1).trim()] = idx + 1;
    });
    //console.log(cpu.labels);
    //console.log(commandsArr);
    return commandsArr;
  };

  cpu.stack = parser(program);
  //console.log(cpu.labels);
  const interpreter = () => {
    while (true) {
      const instrucionIdx = cpu.currentPointer[cpu.currentPointer.length - 1];
      //console.log(instrucionIdx);
      if (instrucionIdx >= cpu.stack.length) return -1;
      const instruction = cpu.stack[instrucionIdx].command;
      const args = cpu.stack[instrucionIdx].args;

      if (instruction === "end") return 0;
      if (instruction === "ret") {
        cpu.currentPointer.pop();
        continue;
      }

      if (!instruction) {
        cpu.nextTick();
        continue;
      }

      /* console.log(
          `run command ${instruction} with args ${args} line ${cpu.currentPointer}`
        ); */
      //console.log(instruction);
      if (instruction.endsWith(":")) {
        cpu.nextTick();
      } else cpu[instruction](...args);
    }
  };
  const isCorrectFinish = interpreter();
  if (isCorrectFinish === 0) return cpu.output.join("\n");
  else return -1;
}

export default assemblerInterpreter;
