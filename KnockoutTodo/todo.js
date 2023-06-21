
function TodoModel(Id, Title, Description, SelectedPriority,IsComplete) {
    var self = this;
    self.Id = ko.observable(Id);
    self.Title = ko.observable(Title);
    self.Description = ko.observable(Description);
    self.SelectedPriority = ko.observable(SelectedPriority);
    self.IsComplete = ko.observable(IsComplete);
}

function TodoVM() {
    var self = this;
    self.Id = ko.observable();
    self.Title = ko.observable();
    self.Description = ko.observable();
    self.Priority = ko.observableArray(["High", "Medium", "Low"]);
    self.SelectedPriority = ko.observable();

    self.allTask = ko.observableArray([]);

    //for disabling Update form making variable 
    self.ShowEdit = ko.observable(false);

    // Clear the input fields after adding the task
    self.clearFields = function () {
        self.Title('');
        self.Description('');
        self.ShowEdit(false);
    }

    //   adding   the task
    self.AddTask = function (task) {
        // console.log(task.Title())
        var newId = self.allTask().length + 1;
        //alert(newId)
        var currentTask = new TodoModel(newId, task.Title(), task.Description(), task.SelectedPriority());
        self.allTask.push(currentTask);

        self.clearFields()
    }

    //Task complete
    self.IsComplete=ko.observable(true);
    
  

    //   updating button clicked
    self.updateTask = function (formSubmitEvent) {
        var task = {
            Id: self.Id(),
            Title: self.Title(),
            Description: self.Description(),
            SelectedPriority: self.SelectedPriority()
        };

        var objectData = ko.utils.arrayFirst(self.allTask(), function (todo) {
            return todo.Id() === task.Id
        })

        //alert(typeof self.allTask());

        //updating
        if (objectData) {
            objectData.Title(task.Title);
            objectData.Description(task.Description);
            objectData.SelectedPriority(task.SelectedPriority);
        }

        self.clearFields()
    };
    //Deleting existing task from list
    self.removeTask = function (prop) {
        self.allTask.remove(prop);
    }


    //Edit button click
    self.editTask = function (editData) {
        //debugger
        self.ShowEdit(true);
        self.Id(editData.Id());
        self.Title(editData.Title());
        self.Description(editData.Description());
        self.SelectedPriority(editData.Description());
    }

}