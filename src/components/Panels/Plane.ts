import { Component, Prop, Vue } from 'vue-property-decorator';
import Base from './Base'
import template from './Plane/Plane.html'
import './Plane/Plane.scss'


@template
@Component({
    props: {
        caption: String,
        captionPosition: String
    }
})
export default class PlanePanel extends Base {
    
    constructor() {
        super();
    }
    
    protected get captionClasses() {
        return {
            'controls-PlainPanel__caption_center': this.$props.captionPosition === 'center',
            'controls-PlainPanel__caption_left': this.$props.captionPosition === 'left',
            'controls-PlainPanel__caption_right': this.$props.captionPosition === 'right'
        }
    }
    
}