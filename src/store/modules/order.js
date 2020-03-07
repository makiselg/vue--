export default {
    namespaced:true,
    state:{
        list:[]
    },
    mutations:{
        addSite(state,obj){
            state.list.push(obj);
            // console.log(state.site)
        }
    },
    actions:{},
    modules:{}
}