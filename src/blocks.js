import createTimer from "./createTimer/index";

export default function Blocks({ selector }) {
    this.selector = selector;
    this.container = document.getElementById(this.selector);
};

Blocks.prototype.createTimer = createTimer;