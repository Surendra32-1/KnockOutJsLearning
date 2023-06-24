// In main.js


//Model
function StudentModel(Id,Name,Address,City,editBox,deleteBox,addBox){
    var self = this;
   
    self.Id=ko.observable(Id);
    self.Name=ko.observable(Name);
    self.Address=ko.observable(Address);
    self.City=ko.observable(City);
    self.deleteBox=ko.observable(deleteBox);
    self.addBox=ko.observable(addBox);
    self.editBox=ko.observable(editBox);

   
}

//View Model

 function StudentControllerVM(){
    var self = this;
   

//Diplaying all students list on table
self.AllStudents=ko.observableArray([
  
]);

   //Add or create
//self.newId=ko.observable("");
self.newName=ko.observable("");
self.newAddress=ko.observable("");
self.newCity=ko.observable("");

    //when save button clicked
    self.Save = function(prop) {
       // alert(prop.newName());
      
        var newId = self.AllStudents().length + 1;
        var studentModel = new StudentModel(newId, prop.newName(), prop.newAddress(), prop.newCity());
        self.AllStudents.push(studentModel);
      
        // Clear the input fields after saving
        prop.newName("");
        prop.newAddress("");
        prop.newCity("");
      }
      

 //EDIT OR UPDATE
 //making edit form properties for collecting  data observable
 self.editId = ko.observable();
  self.editName = ko.observable();
  self.editAddress = ko.observable();
  self.editCity = ko.observable();

self.editStudent = function(student) {
   // alert(student.Id())
 // Accessing the data of the clicked row
 
 var studentId = student.Id();
 var studentName = student.Name();
 var studentAddress = student.Address();
 var studentCity = student.City();
 

 // Assign the data to observable properties for editing  in form
 self.editId(studentId);
 self.editName(studentName);
 self.editAddress(studentAddress);
 self.editCity(studentCity);
 self.showEdit();
};
//button click to update
self.updateSubmit = function() {
debugger
   var stu={
        Id:self.editId(),
        Name:self.editName(),
        Address:self.editAddress(),
        City:self.editCity()
   }
  
    var studentToUpdate = ko.utils.arrayFirst(self.AllStudents(), function(abc) {

          return abc.Id()===stu.Id;
    
    });
    
    if (studentToUpdate) {
      studentToUpdate.Id(stu.Id)
      studentToUpdate.Name(stu.Name);
      studentToUpdate.Address(stu.Address);
      studentToUpdate.City(stu.City);
    }
  //clear form 
    self.editId(null);
    self.editName("");
    self.editAddress("");
    self.editCity("");
  };

//hidden box 
self.addBox=ko.observable(true);
self.editBox=ko.observable(true);
self.deleteBox=ko.observable(true);

//show create
self.showCreate=function(){
    self.addBox(false);
    self.editBox(true);
     self.deleteBox(true);
}
//show confirm delete
self.showDelete=function(){
    self.addBox(true);
    self.editBox(true);
     self.deleteBox(false);
}
//show edit
self.showEdit=function(){
    self.addBox(true);
    self.editBox(false);
     self.deleteBox(true);
}
  //Delete
  //making delete form properties for collecting  data observable
 self.deleteId = ko.observable();
 self.deleteName = ko.observable();
 self.deleteAddress = ko.observable();
 self.deleteCity = ko.observable();
//confirmation row button  clicked
self.deleteStudent = function(student) {
   //alert(student.Id())
// Accessing the data of the clicked row
var studentId = student.Id();
var studentName = student.Name();
var studentAddress = student.Address();
var studentCity = student.City();


// Assign the data to observable properties for deleting  in form
self.deleteId(studentId);
self.deleteName(studentName);
self.deleteAddress(studentAddress);
self.deleteCity(studentCity);
self.showDelete();
};
//Confirmed Delete button click
self.deleteSubmit = function() {
  debugger
  var stu={
    Id:self.deleteId(),
    Name:self.deleteName(),
    Address:self.deleteAddress(),
    City:self.deleteCity()
}
  
    var studentDelete = ko.utils.arrayFirst(self.AllStudents(), function(student) {
        console.log(student.Id)
      return student.Id() === stu.Id;
    });
  
    if (studentDelete) {
      self.AllStudents.remove(studentDelete);
    }
  
    self.deleteId(null);
    self.deleteName("");
    self.deleteAddress("");
    self.deleteCity("");
    self.showCreate();
  };
  
}








 
 