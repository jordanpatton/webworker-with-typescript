declare module '*.worker.ts' {
    class WebpackWorker extends Worker {
        constructor();
    }

    export = WebpackWorker;
}
