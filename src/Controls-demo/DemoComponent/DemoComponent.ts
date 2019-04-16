import { Component, Vue } from 'vue-property-decorator';
import WithRender from './DemoComponent.html';
import DemoComponent from '@/components/DemoComponent.ts'

@WithRender
@Component({
    components: {
        'demo': DemoComponent
    }
})
export default class extends Vue {
}
