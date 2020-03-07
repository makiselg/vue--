export default {
    namespaced:true,
    state:{
        getlist:[
            [
                {
                    id:"1",
                    name:"name",
                    tel:"13000000000",
                    address:"xxx-xxx-xxx-xxx",
                }
            ]
        ],
        num:"1",
        modnum:null,
        flag:false
    },
    mutations:{
        add(state,obj){
            state.getlist[0].push(obj);
        },
        addNum(state,i){
            state.num=i;
        },
        modAdd(state,i){
            state.modnum=i;
            state.flag=true;
        },
        mod(state,obj){
            state.getlist[0][state.modnum].name = obj.name;
            state.getlist[0][state.modnum].tel = obj.tel;
            state.getlist[0][state.modnum].address = obj.address;
            state.getlist[0][state.modnum].id = obj.id;
            state.flag= false;
        },
        flag(state){
            state.flag=false;
        }
    },
    actions:{},
    modules:{}
}