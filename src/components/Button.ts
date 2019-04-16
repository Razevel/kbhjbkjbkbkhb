import { Component, Prop, Vue } from 'vue-property-decorator';
import template from './Button/Button.html'
import './Button/Button.scss'

enum ButtonTagEnum {
    Input = 'input',
    Button = 'button'
}


@template
@Component({})
export default class Button extends Vue {
    
    @Prop()
    public tag!: ButtonTagEnum;
    
    @Prop()
    public fontSize!: string;
    
    @Prop()
    public caption!: string;
    
    private get _caption(): string {
        return this.caption || '';
    }
    
    constructor(){
        super();
    }
}