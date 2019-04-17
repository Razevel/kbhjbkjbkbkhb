import Vue from "vue";
import { PluginFunction, PluginObject } from "vue";

function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}




export {
    capitalizeFirstLetter as ucFirst,
}





//<editor-fold desc="Vue plugin registration" default="collapsed">
export const TFPluginFunction: PluginFunction<void> = (_vue: typeof Vue) => {
    _vue.prototype.$ucFirst = capitalizeFirstLetter;
};

class TFPluginObject implements PluginObject<void> {
    install: PluginFunction<void> = TFPluginFunction;
}

const TFPluginInstance = new TFPluginObject();
export {TFPluginInstance as TFPluginObject};

//</editor-fold>