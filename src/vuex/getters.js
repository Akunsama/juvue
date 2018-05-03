const getters = {
	
	todoDetail: state => state.module.todoDetail,
	todoList: state => state.module.todoList.length!=0?state.module.todoList:JSON.parse(localStorage.getItem("todoList")),

};
export default getters
