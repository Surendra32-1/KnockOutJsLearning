function StudentDetailModel(id,firstName,lastName,email,address,gender,CurrentClass,CurrentSubjects){
  var self = this;
  self.Id=id;
  self.firstName = firstName;
  self.lastName = lastName;
  self.email = email;
  self.address = address;
  self.gender = gender;
  self.CurrentClass = CurrentClass;
  self.CurrentSubjects=ko.observableArray(CurrentSubjects);
}

function StudentRegisterVM() {
  var self = this;
  self.Id=ko.observable();
  self.firstName = ko.observable();
  self.lastName = ko.observable();
  self.email = ko.observable();
  self.address = ko.observable();
  self.gender = ko.observable("Male");
  self.CurrentClass = ko.observable();
  self.AvailableClass = ko.observableArray([
      { className: "1Semester" },
      { className: "2Semester" },     
     { className: "3Semester" },
     { className: "4Semester" },     
     { className: "5Semester" },     
     { className: "6Semester" },     
     { className: "7Semester" },   
     { className: "8Semester" }       
  ]);
  self.CurrentSubjects = ko.observableArray([]);
  self.AvailableSubjects = ko.observableArray([
      { subjectName: "English" },
      { subjectName: "Math" },
      { subjectName: "Account"}, 
      { subjectName: "Finance"}, 
      { subjectName: "Business"}, 
      { subjectName: "Occupation"}, 
      { subjectName: "Economics"}, 

  ]);
  self.agreeFlag = ko.observable(false);

 //Diplaying all students list on table
self.AllStudents=ko.observableArray([
  //new StudentDetailModel(self.Id,self.firstName(),self.lastName(),self.email(),self.address(),self.gender(), self.CurrentClass(), self.CurrentSubjects())
]);
//receive sdata and put in array when button click
  self.Save = function (prop) {
    //debugger
   // console.log(prop.CurrentSubjects);
    var newId = self.AllStudents().length + 1;
    var studentModel = new StudentDetailModel(newId, prop.firstName(), prop.lastName(), prop.email(),
    prop.address(), prop.gender(), prop.CurrentClass(),prop.CurrentSubjects());
    self.AllStudents.push(studentModel);
  
    // Clear the input fields after saving
    prop.firstName("");
    prop.lastName("");
    prop.email("");
    prop.address("");
    prop.gender("Male");
    prop.CurrentClass("");
    prop.CurrentSubjects(""); 


      // confrim the data saved in all students array
    console.log(self.AllStudents());
      
     
  };
  self.removeStudent=function(data){
    self.AllStudents.remove(data);
  }
  
}


























/*
<div><input type = "radio" name = "gender" value = "Male" 
         data-bind = "checked: checkGender" /> Male</div>
         
      <div><input type = "radio" name = "gender" value = "Female" 
         data-bind = "checked: checkGender" /> Female</div>
         
      <div><p>You have selected: <span 
         data-bind = "text:checkGender "></span></p></div>

      <script type = "text/javascript">
         function ViewModel () {
            checkGender =  ko.observable("Male")     // Initially male is selected
         };

         var vm = new ViewModel();
*/