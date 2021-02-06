import createTimer from "./createTimer/index";

export default function Blocks({ selector, timeLimit}) {
    this.selector = selector;
    this.container = document.getElementById(this.selector);
    this.timeLimit = timeLimit;
};

Blocks.prototype.createTimer = createTimer;