"use strict";

const sqlite3 = require("sqlite3").verbose();

// The application layer uses student classes
const student = require("../student.js");

// The application layer talks to the data layer
const data = require("../data/data.js");


// Import express library.
const express = require("express");
var app = express();
app.use(express.static("static"));
app.use(express.json());
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
// Create express application



// Add static files location


let db = new sqlite3.Database("data/students.db", function(err) {
  // If an error, print it out.
  if (err) {
      return console.error(err.message);
  }
  console.log("to the LetsTranslate app database system");
});



///////////////////Student Login/////////////////////////////////////////////////////////

app.get("/",function(req,res){
  //Respond with file transfer to the student login path
  res.sendFile(__dirname + "/studentlogin.html");
})
//POST method route
app.post("/", encoder, function(req,res){
  var email = req.body.email;
  var password = req.body.password;
//Check the entire Login Table
db.all("select * from Student_Login where Email = ? and Password = ?", [email, password], function(error,results,fields){
 //conditional statement- if there are results then re to direct to the Student Subject Choice page.
  if (results.length > 0) {
    res.redirect("/StuSubChoiceComp.html");
  //Otherwise stay on the student Login page
} else {
    res.redirect("/studentlogin.html");
}
res.end();
})
})

//////////////////////////Teacher Login////////////////////////////////////////////////

app.get("/teacherlogin",function(req,res){
  //Respond with file transfer to the student login path
  res.sendFile(__dirname + "/teacherlogin.html");
})
//POST method route
app.post("/teacherlogin", encoder, function(req,res){
  var email = req.body.email;
  var password = req.body.password;
//Check the entire Login Table
db.all("select * from Teacher_Login where Email = ? and Password = ?", [email, password], function(error,results,fields){
 //conditional statement- if there are results then re to direct to the Student Subject Choice page.
  if (results.length > 0) {
    res.redirect("/TeacherArea.html");
  //Otherwise stay on the student Login page
} else {
    res.redirect("/teacherlogin.html");
}
res.end();
})
})


app.get("/",function(req,res){
  //Respond with file transfer to the student login path
  res.sendFile(__dirname + "/studentlogin.html");
})
//POST method route
app.post("/", encoder, function(req,res){
  var email = req.body.email;
  var password = req.body.password;
//Check the entire Login Table
db.all("select * from Student_Login where Email = ? and Password = ?", [email, password], function(error,results,fields){
 //conditional statement- if there are results then re to direct to the Student Subject Choice page.
  if (results.length > 0) {
    res.redirect("/admin2.html");
  //Otherwise stay on the student Login page
} else {
    res.redirect("/studentlogin.html");
}
res.end();
})
})






/////////////////////////////////////////////////////////////////////////////////////////////////


app.get("/ealstudents/:Student_ID", function(req, res) {
    // Call getModules on data
    data.getEALStudent(req.params.Student_ID,function(ealstudent) {
        res.json(ealstudent);
    });
});


app.get("/ealstudents", function(req, res) {
    // Call getModules on data
    data.getEALStudents(function(ealstudents) {
        res.json(ealstudents);
    });
});

app.get("/y7ealstudents", function(req, res) {
  // Call getModules on data
  data.getY7EALStudents(function(y7ealstudents) {
      res.json(y7ealstudents);
  });
});

app.get("/y7ealstudents/:Student_ID", function(req, res) {
  // Call getModules on data
  data.getY7EALStudent(req.params.Student_ID,function(y7ealstudent) {
      res.json(y7ealstudent);
  });
});


app.delete("/ealstudents/:Student_ID", function(req, res) {
    // Call getSingalongs on data
    data.deleteEALStudent(req.params.Student_ID,function() {
      res.send("OK");
    });
  });

  app.post("/ealstudents", function(req, res) {
    // Call getSingalongs on data
    data.addEALStudent(req.body,function() {
      res.send("OK");
    });
  });


  //////////////////////////////////////////////////////////////////////////////
app.get("/teachers", function(req, res) {
    // Call getModules on data
    data.getTeachers(function(teachers) {
        res.json(teachers);
    });
});
app.get("/lessons", function(req, res) {
    // Call getModules on data
    data.getLessons(function(lessons) {
        res.json(lessons);
    });
});



app.get("/allkeywords", function(req, res) {
    // Call getModules on data
    data.getAllKeywords(function(allkeywords) {
        res.json(allkeywords);
    });
});

app.get("/lessontopics", function(req, res) {
    // Call getModules on data
    data.getLessonTopics(function(lessontopics) {
        res.json(lessontopics);
    });
});

app.get("/lessonkeywords", function(req, res) {
    // Call getModules on data
    data.getLessonKeywords(function(lessonkeywords) {
        res.json(lessonkeywords);
    });
});

//////////////////////////////////////////////////////////////////////




app.get("/keywordtranslations", function(req, res) {
    // Call getModules on data
    data.getKeywordTranslations(function(keywordtranslations) {
        res.json(keywordtranslations);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get("/esintrotogames", function(req, res) {
  // Call getModules on data
  data.getEsIntroToGames(function(esintrotogames) {
      res.json(esintrotogames);
  });
});

app.get("/esvariablesandobjects", function(req, res) {
  // Call getModules on data
  data.getEsVariablesandObjects(function(esvariablesandobjects) {
      res.json(esvariablesandobjects);
  });
});

app.get("/esoperators", function(req, res) {
  // Call getModules on data
  data.getEsOperators(function(esoperators) {
      res.json(esoperators);
  });
});
app.get("/esiterationandselections", function(req, res) {
  // Call getModules on data
  data.getEsIterationandSelections(function(esiterationandselections) {
      res.json(esiterationandselections);
  });
});

///////////////////////////////////////////////////////////////


app.get("/itintrotogames", function(req, res) {
  // Call getModules on data
  data.getItIntroToGames(function(itintrotogames) {
      res.json(itintrotogames);
  });
});



app.get("/itvariablesandobjects", function(req, res) {
  // Call getModules on data
  data.getItVariablesandObjects(function(itvariablesandobjects) {
      res.json(itvariablesandobjects);
  });
});

app.get("/itoperators", function(req, res) {
  // Call getModules on data
  data.getItOperators(function(itoperators) {
      res.json(itoperators);
  });
});

app.get("/ititerationandselections", function(req, res) {
  // Call getModules on data
  data.getItIterationandSelections(function(ititerationandselections) {
      res.json(ititerationandselections);
  });
});
app.get("/itcryptographys", function(req, res) {
  // Call getModules on data
  data.getItCryptography(function(itcryptographys) {
      res.json(itcryptographys);
  });
});

app.get("/itintrotogames", function(req, res) {
  // Call getModules on data
  data.getItIntroToGames(function(itintrotogames) {
      res.json(itintrotogames);
  });
});



app.get("/itvariablesandobjects", function(req, res) {
  // Call getModules on data
  data.getItVariablesandObjects(function(itvariablesandobjects) {
      res.json(itvariablesandobjects);
  });
});

app.get("/itoperators", function(req, res) {
  // Call getModules on data
  data.getItOperators(function(itoperators) {
      res.json(itoperators);
  });
});

app.get("/ititerationandselections", function(req, res) {
  // Call getModules on data
  data.getItIterationandSelections(function(ititerationandselections) {
      res.json(ititerationandselections);
  });
});


app.get("/itcryptographys", function(req, res) {
  // Call getModules on data
  data.getItCryptography(function(itcryptographys) {
      res.json(itcryptographys);
  });
});
app.get("/escryptographys", function(req, res) {
  // Call getModules on data
  data.getEsCryptography(function(escryptographys) {
      res.json(escryptographys);
  });
});


app.get("/itdatabases", function(req, res) {
  // Call getModules on data
  data.getItDatabase(function(itdatabases) {
      res.json(itdatabases);
  });
});

app.get("/esdatabases", function(req, res) {
  // Call getModules on data
  data.getItDatabase(function(esdatabases) {
      res.json(esdatabases);
  });
});

app.get("/esintrotopythons", function(req, res) {
  // Call getModules on data
  data.getEsIntroToPython(function(esintrotopythons) {
      res.json(esintrotopythons);
  });
});

app.get("/itintrotopythons", function(req, res) {
  // Call getModules on data
  data.getItIntroToPython(function(itintrotopythons) {
      res.json(itintrotopythons);
  });
});


app.get("/esifelseconditions", function(req, res) {
  // Call getModules on data
  data.getEsIfElseCondition(function(esifelseconditions) {
      res.json(esifelseconditions);
  });
});
app.get("/itifelseconditions", function(req, res) {
  // Call getModules on data
  data.getItIfElseCondition(function(itifelseconditions) {
      res.json(itifelseconditions);
  });
});


app.get("/itesafteyposters", function(req, res) {
  // Call getModules on data
  data.getItEsafteyPoster(function(itesafteyposters) {
      res.json(itesafteyposters);
  });
});

app.get("/esesafteyposters", function(req, res) {
  // Call getModules on data
  data.getEsEsafteyPoster(function(esesafteyposters) {
      res.json(esesafteyposters);
  });
});















// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});

