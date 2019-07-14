import ExampleWorker = require('worker-loader?name=dist/[name].js!./example.worker');

class Main {
    static run() {
        const exampleWorker = new ExampleWorker();
        const message = window.prompt('What is your input?') || '';
        exampleWorker.onmessage = (ev: MessageEvent) => {
            window.alert(ev.data);
            exampleWorker.terminate();
        };
        exampleWorker.postMessage(message);
    }
}

Main.run();
