// JavaScript Document

//add your object here
const jess = {
  name: ['Jessica','Gilfillan'],
  age:34,
  interests: ['coffee', 'code', 'cats'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1]  + ' is ' + this.age + ' years old. They like ' + this.interests[0] + ', ' + this.interests[1] +  ' and ' + this.interests[2] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + this.age + '.');
  }
}

//stella
const student {
  name: {
    first: 'Stella',
    last: 'Gray'
  },
  program: 'Computer Science',
  home: 'Field, ON',
  interests: ['reading', 'watching tv/movies'],
  greeting: function () {
    alert('Hi, I am' + student.name.first + ' ' + student.name.last)
  },
  bio: function () {
    alert(student.name.first + ' ' + student.name.last + ' is in the ' + student.program + ' program, she calls' + student.home + ' home. Her intersts are' + student.interests[0] + ' and ' + student.intersts[1] + '.');
  }
};


//add pet peeve
student.petPeeve = "I don't know";


//delete last name
delete student.name.last;

let buttonStella = document.getElementById('stella');
button.addEventListener('click', function(){
student.bio});

//end stella

// gillian:
let gillian = {
  name: {
    first: 'Gillian',
    last: 'Thorne'
  },
  program: 'Computer Science',
  home: 'Barrie',
  interests: ['Taylor Swift', 'koalas', 'sleeping'];
  greeting: function() {
    alert('Hi, I am ' + gillian.name.first);
  },
  about: function() {
    alert(gillian.name.first + ' is studying ' + gillian.program ' and lives at home in ' + gillian.home  + '. She likes ' + gillian.interests[0] + ', ' + gillian.interests[1] + ' and ' gillian.interests[2] + '.');
  }
}

gillian.petPeeve = 'loud noises';
delete gillian.name.last;

let gillianButton = document.getElementById('gillian');
gillianButton.addEventListener('click', function() {
  gillian.bio()
});
// end gillian

//add event listener function or event handler property here

let button = document.getElementById('jess');
let button1 = document.getElementById('shadow');
//button.addEventListener('click', jess.greeting);

button.addEventListener('click', function(){
  jess.bio(); 
})


//--------------------------------------------------------------------------------------------------
//Braden Coates
const braden = {
  name: {
    first: "Braden",
    last: "Coates"
  },
  program: "Computer Science",
  home: "Hamilton",
  interests: ["Video games", "Board games", "Programming", "Reading", "Camping"],
  iAm: () => {
    alert(`Hi, I am ${braden.name.first}`);
  },
  info: () => {
    alert(`My name is ${braden.name.first} ${braden.name.last}, I am from ${braden.home} and am taking ${braden.program}. My interests are ${braden.interests[2]} and ${braden.interests[4]}. My biggest pet peeve is ${braden.peeve}.`);
  }
}

braden.peeve = "my code not compiling"

delete braden.name.last;

let buttonBraden = document.getElementById("braden");
buttonBraden.addEventListener('click', () => {
  braden.info();
});

//--------------------------------------------------------------------------------------------------

//nik
let nikBrennan = {
      name: ["Nik", "Brennan"],
      program: "Computer Science",
      home: "Barrie",
      interests: ["Video games", "Streaming", "Playing with my doggos"],
      myName: function(){
            alert("Hi, I am " + name[0]);
      },
      info: function(){
            alert("Hi, I am " + this.name[0] + " " + this.name[1] +". My interests consist of " + this.interests + ". I live in " + this.home);
      }
};

nikBrennan.petPeeve = "Zach Green";
delete nikBrennan.name.last;

let buttonNik = document.getElementById("nik");
buttonNik.addEventListener('click', function(){
      nikBrennan.info(); 
})
//Ryan Vickers bio
let Ryan = {
    name: {
        first: 'Ryan',
        last: 'Vickers'
    },
    program: 'Lakehead/ Georgian Computer Science',
    home: 'Meaford',
    interests: 'video games',
    hello: function () {
        alert('Hi' + Ryan.name.first)
    },
    bio: function () {
        alert(Ryan.name.first + '' + Ryan.name.last + '' + Ryan.program + '' + Ryan.home + '' + Ryan.interests + '.')
    }
}
Ryan.petpeeve = 'bruh';
delete Ryan.name.last;

let buttonRyan=doccument.getElementById("ryanVickers");
buttonRyan.addEventListener('click',function(){
  Ryan.Bio();
}
