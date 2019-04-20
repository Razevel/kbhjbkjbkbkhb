import { Component, Prop, Vue } from 'vue-property-decorator';
import Layout from './Footer/Layout'
import template from './Footer/Footer.html'
import './Footer/Footer.scss'

@template
@Component({
    components: {
        Layout
    }
})
export default class Footer extends Vue{

}