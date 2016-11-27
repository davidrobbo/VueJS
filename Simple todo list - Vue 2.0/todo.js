new Vue({
  
  el: "#todo",
  
  data: {
    newTask: "",
    taskList:[{text: "AA", checked: false}],
  },
  
  methods: {
    addTask: function(){
      var task = this.newTask.trim();
      if ( task ) {
        this.taskList.push({
          text: task,
          checked: false
        });
        this.newTask = "";
      }
    },
    removeTask: function(task){
      var index = this.taskList.indexOf(task);
      this.taskList.splice(index, 1);
    },
    clearList: function(){
      this.taskList = []
    },
    selectAll: function(){
      var targetValue = this.areAllSelected ? false : true;
      //we use a for loop to set the checked state of all items to the target value
      for (var i = 0; i < this.taskList.length; i++) {
        this.taskList[i].checked = targetValue;
      }
    },
  },
  
  computed: {
    areAllSelected: function(){
      return this.taskList.every(function(task) {
        return task.checked;
      }) && this.taskList.length > 0;      
    },
  }
  
  
});