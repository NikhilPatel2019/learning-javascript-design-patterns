const myModule = {
    myConfig: {
        useCaching: true,
        language: "en"
    },

    saySomething() {
        console.log("Where is Paul Irish debugging today?");
    },
    reportMyConfig() {
        console.log(`Caching is: ${this.myConfig.useCaching ? "enabled" : "disabled"}`);
    },
    updateMyConfig(newConfig) {
        if (typeof newConfig === "object") {
            this.myConfig = newConfig;
            console.log(this.myConfig.language);
        }
    },
}

myModule.saySomething();
myModule.reportMyConfig();
myModule.updateMyConfig({
    useCaching: false,
    language: "fr"
});