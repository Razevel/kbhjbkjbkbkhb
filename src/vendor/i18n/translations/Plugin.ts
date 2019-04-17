import { lc } from "./lc";
import Vue from "vue";
import { PluginFunction, PluginObject } from "vue";

const LocalPluginFunction: PluginFunction<void> = (_vue: typeof Vue) => {
    _vue.prototype.$lc = lc;
};

class LocalPluginObject implements PluginObject<void> {
    install: PluginFunction<void> = LocalPluginFunction;
}

const LocalPluginInstance = new LocalPluginObject();


export {
    LocalPluginInstance as LocalPluginObject,
    LocalPluginFunction
}
