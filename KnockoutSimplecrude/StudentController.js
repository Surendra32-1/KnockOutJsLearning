// In main.js


//Model
function StudentModel(Id,Name,Address,City){
    var self = this;
   
    self.Id=ko.observable(Id);
    self.Name=ko.observable(Name);
    self.Address=ko.observable(Address);
    self.City=ko.observable(City);

   
}

//View Model

 function StudentControllerVM(){
    var self = this;
   

//Diplaying all students list on table
self.AllStudents=ko.observableArray([
    new StudentModel(1, "Rakesh", "Butwal", "Tilottama"),
    new StudentModel(2, "Jay", "Suryapura", "Lumbini"),
    new StudentModel(3, "Bamsi ", "Kanachanpur", "Kanchanpur")
    //new StudentModel()
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

};
//button click to update
self.updateSubmit = function() {
 alert(self.editId());
debugger
    var studentId = self.editId();
    // var studentName = self.editName();
    // var studentAddress = self.editAddress();
    // var studentCity = self.editCity();
    var studentEdit=new StudentModel
    {
        Id=self.editId()
        Name=self.editName()
        Address=self.editAddress()
        City=self.editCity()

    
    };
  
    var studentToUpdate = ko.utils.arrayFirst(self.AllStudents(), function(student) {
       
        for(i=0; i<student.length; i++){
          if(student.Id()===studentId){
             self.AllStudents.remove(student);
              self.AllStudents.push(studentEdit);
          }
        }
    
    });
    // if(studentToUpdate){
    //     self.AllStudents.remove(student);
    //     self.AllStudents.push(studentEdit);
    // }
  
  
    // if (studentToUpdate) {
    //   studentToUpdate.Id(studentId)
    //   studentToUpdate.Name(studentName);
    //   studentToUpdate.Address(studentAddress);
    //   studentToUpdate.City(studentCity);
    // }
  //clear form 
    self.editId(null);
    self.editName("");
    self.editAddress("");
    self.editCity("");
  };

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

};
//Confirmed Delete button click
self.deleteSubmit = function() {
  debugger
    var studentId = self.deleteId();
  
    var studentToDelete = ko.utils.arrayFirst(self.AllStudents(), function(student) {
        console.log(student.Id)
      return student.Id === studentId;
    });
  
    if (studentToDelete) {
      self.AllStudents.remove(studentToDelete);
    }
  
    self.deleteId(null);
    self.deleteName("");
    self.deleteAddress("");
    self.deleteCity("");
  };
  
}








 
 