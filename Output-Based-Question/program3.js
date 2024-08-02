/**
 * Create a Task Schedular that return the list of completed task.
 * input 
 *  --> 1. duration : Total duration given to complete task.
 * ---> 2. list of task(arry of object)
 * --> Example: 
 *         1.  40 mins
 *        2.  [{taskName: "task1", time:10}, 
 *              {taskName: "task2", time:20},
 *              {taskName: "task3", time:20}
 *          ]
 * output: return the list of task that completed within given time duration 40 mins
 * 
 * **/

var taskList = [
    {taskName: "task1", time:10}, 
    {taskName: "task2", time:20},
    {taskName: "task3", time:20}
]
 duration = 40;
var taskListCompleted = taskSchedular(taskList, duration);
console.log(taskListCompleted);

 function taskSchedular(taskList, duration){
    let executedTask = [];
    for(let task of taskList){
        let taskTime = task.time;
        if(taskTime <= duration){
            executedTask.push(task);
            duration = duration - taskTime;
        }
    }
    return executedTask;
 }