import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Schedule/Schedule.html'
import './Schedule/Schedule.scss'
import {convert,InSchedule,OutSchedule, InTimes, InTime, TimeIntervalType} from './Schedule/JSONToSchedule';

@template
@Component({
    props: ['schedule', 'lessons', 'times', 'caption', 'captionPosition']
})
default class Schedule extends Vue {
    
    constructor() {
        super();
    }
    
    beforeMount(){
        var a = convert(this.$props.schedule, this.$props.lessons, this.$props.times);
    }
    
    private get captionClasses() {
        return {
            'controls-Schedule__caption_center': this.$props.captionPosition === 'center',
            'controls-Schedule__caption_left': this.$props.captionPosition === 'left',
            'controls-Schedule__caption_right': this.$props.captionPosition === 'right'
        }
    }
    
    private get ScheduleData():OutSchedule{
        return convert(this.$props.schedule, this.$props.lessons, this.$props.times);
    }
    
}

export {
    Schedule,
    InTimes,
    InTime,
    TimeIntervalType
}