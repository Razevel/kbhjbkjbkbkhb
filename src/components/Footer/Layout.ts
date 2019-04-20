import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Layout/Layout.html'
import './Layout/Layout.scss'

@template
@Component({
    props: {
        columnsCount: {
            type:Number,
            default: 3
        }
    }
})
export default class Layout extends Vue{
    
    
    private get ColumnsTemplate(): string {
        let widths = '';
        
        for(let i=0; i<this.$props.columnsCount; i++) {
            widths+='1fr ';
        }
        
        return `grid-template-columns: ${widths.trim()};`
    }
    
    private get TopRowStyles(): string {
        return `grid-column-start: 1; grid-column-end: ${this.$props.columnsCount+1};`
    }
    
    private get BottomRowStyles(): string {
        return `grid-column-start: 1; grid-column-end: ${this.$props.columnsCount+1};`
    }
}