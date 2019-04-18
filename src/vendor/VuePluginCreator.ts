import Vue from "vue";
import { PluginFunction, PluginObject } from "vue";


class CustomPluginObject<T> implements PluginObject<T> {
    install: PluginFunction<T>;
    constructor(func: PluginFunction<T>){
        this.install = func;
    }
}

export default class VuePluginCreator {
    
    public static createPluginObject(func: Function, funcName?:string) {
        return new CustomPluginObject<undefined>(this.createPluginFunction(func, funcName));
    }
    
    public static createPluginFunction(func: Function, funcName?:string):PluginFunction<undefined> {
        return function (_vue: typeof Vue):void {
            _vue.prototype[`$${funcName||func.name}`] = func;
        };
    }
}