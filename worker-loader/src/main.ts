import ExampleWorker = require('worker-loader?name=dist/[name].js!./worker');

class Main {
    static run() {
        const worker = new ExampleWorker();
        const message = window.prompt('What is your input?') || '';
        worker.onmessage = (ev: MessageEvent) => {
            window.alert(ev.data);
            worker.terminate();
        };
        worker.postMessage(message);
    }
}

Main.run();
