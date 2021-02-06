import createTimer from "./createTimer/index";

export default function Blocks({ selector, timeLimit, afterOpen = function(){}, afterClose = function(){}}) {
    this.selector = selector;
    this.container = document.getElementById(this.selector);
    this.timeLimit = timeLimit;
    this.afterOpen = afterOpen;
    this.afterClose = afterClose;
};

Blocks.prototype.createTimer = createTimer;