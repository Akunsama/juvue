// 配置vuex文件

const module = {
	state: {
		todoDetail: {},
		todoList:[],
		resolveList:[],
		cancelList:[]
		
	},
	mutations: {
		SET_TODODETAIL: (state, todoDetail) => {
			state.todoDetail = todoDetail;
			sessionStorage.setItem('todoDetail', todoDetail);
		},
		SET_TODOLIST: (state, todoList) => {
			if(localStorage.getItem("todoList")){
				state.todoList = [todoList,...JSON.parse(localStorage.getItem("todoList"))]
			}else{
				state.todoList=[todoList]
			}
			localStorage.setItem('todoList', JSON.stringify(state.todoList));
		},
	},
	actions: {
//	    flashData({ commit, state },key){
//	        var sessiionData = window.sessionStorage.getItem(key);
//	        if(sessiionData && sessiionData!=='{}'){
//	            switch(key){
//	                case 'todoList':
//	                    commit('SET_TODOLIST',JSON.parse(sessiionData));
//	                    break;
//	            }
//	        }
//	    }
	}
};

export default module;
