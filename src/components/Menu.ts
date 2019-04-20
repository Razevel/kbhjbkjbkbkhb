import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Menu/Menu.html'
import './Menu/Menu.scss'
import Panel from './Panels/Plane'
import stringify = Mocha.utils.stringify;


interface MenuItem {
    caption: string;
    to: string;
    group?: string;
}

enum MarkerPosition {
    Left = 'left',
    Right = 'right'
}

@template
@Component({
    props: {
        items: Array as () => Array<MenuItem>,
        isWithGroups: Boolean,
        caption: String,
        marker: {
            type: Boolean,
            default: true
        },
        markerPosition: {
            type: String,
            default: 'right'
        }
    },
    components: {
        Panel
    }
})
export default class Menu extends Vue{
    
    private get _items(): Array<MenuItem> {
        return this.$props.items;
    }
    private get classList(): { [key:string]:boolean } {
        return {
            'controls-Menu__list_marker_disabled': !this.$props.marker,
            'controls-Menu__list_marker_left': this.$props.markerPosition === MarkerPosition.Left,
            'controls-Menu__list_marker_right': this.$props.markerPosition === MarkerPosition.Right
        }
    }
}