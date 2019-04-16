import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Schedule/Schedule.html'
import './Schedule/Schedule.scss'

type ScheduleData = {}

@template
@Component({
    props: ['schedule', 'lessons', 'times', 'caption', 'captionPosition']
})
export default class Schedule extends Vue {
    
    @Prop()
    public captionPosition!: string;
    
    constructor() {
        super();
    }
    
    private get captionClasses() {
        return {
            'controls-Schedule__caption_center': this.captionPosition === 'center',
            'controls-Schedule__caption_left': this.captionPosition === 'left',
            'controls-Schedule__caption_right': this.captionPosition === 'right'
        }
    }
    
    
}