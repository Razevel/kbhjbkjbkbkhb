import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Schedule/Schedule.html'
import './Schedule/Schedule.scss'
import {
    convert, InSchedule, OutSchedule, InTimes, InTime, TimeIntervalType,
    ScheduleForRender
} from './Schedule/JSONToSchedule';

@template
@Component({
    props: ['schedule', 'lessons', 'times', 'caption', 'captionPosition']
})
default

class Schedule extends Vue {
    
    private get captionClasses() {
        return {
            'controls-Schedule__caption_center': this.$props.captionPosition === 'center',
            'controls-Schedule__caption_left': this.$props.captionPosition === 'left',
            'controls-Schedule__caption_right': this.$props.captionPosition === 'right'
        }
    }
    
    private rowClasses(index: number): object {
        let rowType = this.ScheduleData.rows[index].type;
        return {
            'controls-Schedule__grid-row__lesson': rowType === TimeIntervalType.Lesson,
            'controls-Schedule__grid-row__break': rowType === TimeIntervalType.Break,
            'controls-Schedule__grid-row__window': rowType === TimeIntervalType.Window
        }
    }
    
    private get ScheduleData(): ScheduleForRender {
        return convert(this.$props.schedule, this.$props.lessons, this.$props.times);
    }
    
}

export {
    Schedule,
    InTimes,
    InTime,
    TimeIntervalType
}