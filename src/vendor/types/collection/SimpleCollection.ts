import { UniObject } from "@/vendor/types/Object";
import Throw = Chai.Throw;

const SimpleCollectionSymbol = Symbol('[Types/Collection:Base]');

interface ICollection {
    [SimpleCollectionSymbol]: boolean;
}

type Config = {
    items?: Array<any>|{};
}

class SimpleCollection extends UniObject implements ICollection{
    [SimpleCollectionSymbol]: boolean = true;
    
    private _items: Array<any> = [];
    
    constructor({items}: Config = {}){
        super();
        
        if (this.isVerified() && items) {
            
            if (items instanceof Array) {
                this._items = items;
            } else if (items instanceof Object) {
                for (let key in items) {
                    /// @ts-ignore
                    this._items.push(items[key]);
                }
            }
            
        }
    }
    
    protected _checkForNative() {
        if (super._checkForNative() && !!(<SimpleCollection>this)[SimpleCollectionSymbol]) {
            return true;
        }
        throw {message: null, code: 42};
    }
}

export {
    SimpleCollectionSymbol,
    SimpleCollection,
    ICollection
}

