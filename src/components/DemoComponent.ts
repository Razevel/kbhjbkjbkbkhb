import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from '@/components/DemoComponent/DemoComponent.html';
import './DemoComponent/DemoComponent.scss';


@WithRender
@Component
export default class DemoComponent extends Vue {
    @Prop()
    public msg!: string;
    defaultMessage: string = 'I am using TypeScript classes with Vue!'
}

