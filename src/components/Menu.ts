import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Menu/Menu.html'
import './Menu/Menu.scss'

interface MenuItem {
    caption: string;
    to: string;
    group?: string;
}


@template
@Component({
    props: {
        items: Array as () => Array<MenuItem>,
        isWithGroups: Boolean,
        caption: String
    }
})
export default class Menu extends Vue{
    
    private get _items(): Array<MenuItem> {
        return this.$props.items;
    }
    
    constructor(){
        super();
    }
}