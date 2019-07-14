const context: Worker = self as any;

context.onmessage = (ev) => {
    context.postMessage(String(ev.data).split('').reverse().join(''));
};
