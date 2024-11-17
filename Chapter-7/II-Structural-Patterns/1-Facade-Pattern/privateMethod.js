const _private = {
    i: 5,
    get() {
        console.log(`current Value: ${this.i}`);
    },
    set(val) {
        this.i = val;
    },
    run() {
        console.log('running');
    },
    jump() {
        console.log('jumping');
    }
}

export default _private;