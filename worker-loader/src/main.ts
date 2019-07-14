import MyWorker = require("worker-loader?name=dist/[name].js!./worker");

abstract class Printer {
    abstract print(str: string): void;
}

class AlertPrinter {
    print(str: string) {
        window.alert(str);
    }
}

abstract class Reader {
    abstract read(): string;
}

class PromptReader {
    read(): string {
        return window.prompt("What is your input?") || "";
    }
}

class IOManager {
    constructor(private reader: Reader, private printer: Printer) {
    }

    performIO() {
        let worker = new MyWorker();
        let message = this.reader.read();
        worker.onmessage = (ev: MessageEvent) => {
            this.printer.print(ev.data);
            worker.terminate();
        };
        worker.postMessage(message);
    }
}

const magicIO = new IOManager(new PromptReader(), new AlertPrinter());
export = magicIO;
