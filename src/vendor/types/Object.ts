import { SimpleCollection, SimpleCollectionSymbol } from "@/vendor/types/collection/SimpleCollection";

const objectSymbol = Symbol('[types/Object]');

interface IUniInstance {
    [objectSymbol]: boolean;
}

class _Object implements IUniInstance {
    [objectSymbol]: boolean = true;
    
    constructor() {}
    
    /**
     * API | Проверить, является ли инстанс представителем хоябы какой то нашей сущности
     * */
    public static isUniObject(object: any) {
        return checkForNative(object);
    }
    
    /**
     * API | Проверить, является ли сущность реально созданой в нашем море
     * или по дороге ее подменили. Проверяется полная иерархия.
     * */
    public isVerified():boolean {
        return this._checkForNative();
    }
    
    
    /**
     * Метод для переопределения в наследниках.
     * Проверить, является ли инстанс представителем хоябы какой то нашей сущности.
     * При переопределении нужно вызывать базовую логику, тогда проверяемый инстанс
     * для проождения проверки должен реализовывать всё тоже самое.
     * */
    protected _checkForNative(): boolean {
        return checkForNative(this);
    }
    
    protected destroy() {
    
    }
}

function checkForNative(object: object): boolean {
    if (!!(<_Object>object)[objectSymbol]) {
        return true;
    }
    throw {message: null, code: 42};
}

export {
    _Object as UniObject,
    objectSymbol as UniObjectSymbol,
    IUniInstance
}