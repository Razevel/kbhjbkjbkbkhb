import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Schedule/Schedule.html'
import './Schedule/Schedule.scss'
import Panel from './Panels/Plane'
import { convert, TimeIntervalType, ScheduleTableDayLessons, LessonType, ScheduleTable, Week } from './Schedule/JSONToSchedule'

type DayData = {
    dayData: string,
    dayName: Week
}

enum RowType {
    Header = 'header',
    Body = 'body',
    End = 'end'
}

@template
@Component({
    props: ['schedule', 'lessons', 'times', 'daysData'],
    components: {
        Panel
    }
})
default class Schedule extends Vue {
    
    protected _hoveredItem: {
        isHovered: boolean,
        rowType?: RowType,
        rowIndex?: number,
        cellIndex?: number
    } = {
        isHovered: false
    };
    
    protected _onDayNumberClick(day: DayData){
    }
    
    private rowClasses(index: number): object {
        let rowType = this.ScheduleData.rows[index].type;
        return {
            'controls-Schedule__grid-row__lesson': rowType === TimeIntervalType.Lesson,
            'controls-Schedule__grid-row__break': rowType === TimeIntervalType.Break,
            'controls-Schedule__grid-row__window': rowType === TimeIntervalType.Window
        }
    }
    
    private get ScheduleData(): ScheduleTable {
        return convert(this.$props.schedule, this.$props.lessons, this.$props.times, this.$props.daysData);
    }
    
    protected _onMouseOverRow(rowIndex: number, cellIndex:number, rowType: RowType): void {
        this.$data._hoveredItem.isHovered = true;
        this.$data._hoveredItem.rowType = rowType;
        this.$data._hoveredItem.rowIndex = rowIndex;
        this.$data._hoveredItem.cellIndex = cellIndex;
    }
    
    protected _onMouseOutRow(rowIndex: number, cellIndex:number, rowType: RowType): void {
        this.$data._hoveredItem = {
            isHovered: false
        };
    }
    
}

export {
    Schedule,
    ScheduleTable,
    RowType,
    Week,
    TimeIntervalType,
    LessonType
}