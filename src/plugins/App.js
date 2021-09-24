import globalCom1 from '../globalCom/globalCom1.vue'
const AppCom = {
    install(App){
        App.component('globalCom1',globalCom1)
    }
}
export default AppCom;