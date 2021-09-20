"use strict";

// Import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// The application layer uses student classes
const student = require("../student.js");

// Connect to the database.
var db = new sqlite3.Database("data/students.db", function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("You are connected");
});



/////////////////////////////////////////////////////////////////////////////////////////

// Export getModules function
exports.getEALStudents = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM EAL_Student`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var ealstudents = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var ealStud = new student.EALStudent(row.Student_ID, row.First_name, row.Surname, row.DOB, row.Email , row.Year_group, row.Language_ID, row.Photo);
            // Add module to array
            ealstudents.push(ealStud);
        }
        // Execute callback function
        callback(ealstudents);
    });
};


// Export getModules function
exports.getEALStudent = function(Student_ID, callback) {
    // Create SQL statement
    var sql = `SELECT * FROM EAL_Student where student_id = ${Student_ID}`;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var ealstudent = new student.EALStudent(row.Student_ID, row.First_name, row.Surname, row.DOBDate, row.Email , row.Year_group, row.Language_ID,row.Photo);
            // Add module to array
         
        // Execute callback function
        callback(ealstudent);
    });
};

exports.getY7EALStudents = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM EAL_Student where year_group = "Year 7" `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var y7ealstudents = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var ealStud = new student.Y7EALStudent(row.Student_ID, row.First_name, row.Surname, row.DOB, row.Email , row.Year_group, row.Language_ID, row.Photo);
            // Add module to array
            y7ealstudents.push(ealStud);
        }
        // Execute callback function
        callback(y7ealstudents);
    });
};

exports.getY7EALStudent = function(Student_ID, callback) {
    // Create SQL statement
    var sql = `SELECT * FROM EAL_Student where  year_group = "Year 7" and student_id = ${Student_ID}`;
    // Execute query. Return all
    db.get(sql, function(err, row) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var y7ealstudent = new student.Y7EALStudent(row.Student_ID, row.First_name, row.Surname, row.DOBDate, row.Email , row.Year_group, row.Language_ID,row.Photo);
            // Add module to array
         
        // Execute callback function
        callback(y7ealstudent);
    });
};





  exports.addEALStudent = function(ealstudent, callback) {

    var sql = `SELECT MAX(Student_ID) AS StudentId FROM Eal_Student` ;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        };

        var studentNumber = rows[0].StudentId + 1;

    // Create SQL insert statement
    var sql = `INSERT INTO Eal_Student VALUES ('${studentNumber}','${ealstudent.First_name}','${ealstudent.Surname}','${ealstudent.DOB}', '${ealstudent.Email}', '${ealstudent.Year_group}', '${ealstudent.Language_ID }','${ealstudent.Photo}')`;
    db.exec(sql, function(err) {
      // Once completed, execute callback function
      callback();
    });
});
  };

//////////////////////////////////////////////////////////////////////////////////////////////////
exports.getTeachers = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM Teacher`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var teachers = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var teach = new student.Teacher(row.Teacher_ID, row.Title, row.First_name, row.Surname, row.Email , row.Subject_ID);
            // Add module to array
           teachers.push(teach);
        }
        // Execute callback function
        callback(teachers);
    });
};


exports.getLessons = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM Lesson`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var lessons = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var less = new student.Lesson(row.Lesson_ID, row.Title, row.Date, row.Period, row.Teacher_ID , row.Topic_ID, row.Class_Group_ID );
            // Add module to array
           lessons.push(less);
        }
        // Execute callback function
        callback(lessons);
    });
};



exports.getLessonTopics = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson.topic_id, topic.topic_name 
    from lesson, topic 
    where topic.topic_id = lesson.topic_id;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var lessontopics = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var lesstop = new student.LessonTopic(row.Lesson_ID, row.Title, row.Topic_ID, row.Topic_name);
            // Add module to array
            lessontopics.push(lesstop);
        }
        // Execute callback function
        callback(lessontopics);
    });
};



exports.getLessonKeywords = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.Word 
    from lesson, lesson_keyword, keyword  
    where lesson_keyword.lesson_id = lesson.lesson_id and 
    lesson_keyword.keyword_id = keyword.keyword_id ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var lessonkeywords = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var lesskey = new student.LessonKeyword(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word);
            // Add module to array
            lessonkeywords.push(lesskey);
        }
        // Execute callback function
        callback(lessonkeywords);
    });
};


exports.getKeywordTranslations = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, 
    keyword_translation.language_id,translation.translation_word 
    from lesson, lesson_keyword, keyword, keyword_translation, translation 
    where keyword_translation.keyword_id = keyword.keyword_id 
    and keyword_translation.translation_id = translation.translation_id 
    and lesson_keyword.lesson_id =lesson.lesson_id 
    and keyword_translation.keyword_id = lesson_keyword.keyword_id ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var keywordtranslations = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran = new student.KeywordTranslation(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            keywordtranslations.push(keytran);
        }
        // Execute callback function
        callback(keywordtranslations);
    });
};


exports.getKeywordTranslations = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, 
    keyword_translation.language_id,translation.translation_word 
    from lesson, lesson_keyword, keyword, keyword_translation, translation 
    where keyword_translation.keyword_id = keyword.keyword_id 
    and keyword_translation.translation_id = translation.translation_id 
    and lesson_keyword.lesson_id =lesson.lesson_id 
    and keyword_translation.keyword_id = lesson_keyword.keyword_id ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var keywordtranslations = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran = new student.KeywordTranslation(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            keywordtranslations.push(keytran);
        }
        // Execute callback function
        callback(keywordtranslations);
    });
};



exports.getAllKeywords = function(callback) {
    // Create SQL statement
    var sql = ` 
    select keyword.keyword_id, keyword.word, language.language_name, translation.translation_word 
    from  keyword, keyword_translation, translation ,language 
    where keyword_translation.keyword_id = keyword.keyword_id  and 
    keyword_translation.translation_id = translation.translation_id and 
    keyword_translation.language_id = language.language_id;
    `;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var allkeywords = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var allkey = new student.AllKeyword(row.Keyword_ID, row.Word,  row.Language_name, row.Translation_word );
            // Add module to array
            allkeywords.push(allkey);
        }
        // Execute callback function
        callback(allkeywords);
    });
};

exports.getEsIntroToGames = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Introduction to Games Design" 
    and keyword_translation.language_id = "es" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esintrotogames = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.EsIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            esintrotogames.push(keytran1);
        }
        // Execute callback function
        callback(esintrotogames);
    });
};

exports.getEsVariablesandObjects = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Variables and Objects" 
    and keyword_translation.language_id = "es" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esvariablesandobjects = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.EsIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            esvariablesandobjects.push(keytran1);
        }
        // Execute callback function
        callback(esvariablesandobjects);
    });
};


exports.getEsOperators = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Operators" 
    and keyword_translation.language_id = "es" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esoperators= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.EsIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            esoperators.push(keytran1);
        }
        // Execute callback function
        callback(esoperators);
    });
};


exports.getEsIterationandSelections = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="	Iteration and Selection" 
    and keyword_translation.language_id = "es" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esiterationandselections = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.EsIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            esiterationandselections.push(keytran1);
        }
        // Execute callback function
        callback(esiterationandselections);
    });
};

/////////////////////////////////////////////////////////////////////////

exports.getItIterationandSelections = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="	Iteration and Selection" 
    and keyword_translation.language_id = "it" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esiterationandselections = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.ItIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            esiterationandselections.push(keytran1);
        }
        // Execute callback function
        callback(esiterationandselections);
    });
};

exports.getItIntroToGames = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Introduction to Games Design" 
    and keyword_translation.language_id = "it" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itintrotogames = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran2 = new student.ItIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            itintrotogames.push(keytran2);
        }
        // Execute callback function
        callback(itintrotogames);
    });
};

exports.getItVariablesandObjects = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Variables and Objects" 
    and keyword_translation.language_id = "it" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itvariablesandobjects = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.EsIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            itvariablesandobjects.push(keytran1);
        }
        // Execute callback function
        callback(itvariablesandobjects);
    });
};


exports.getItOperators = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.lesson_id, lesson.title,lesson_keyword.keyword_id, keyword.word, keyword_translation.language_id,translation.translation_word
    from lesson, lesson_keyword, keyword, keyword_translation, translation
    where keyword_translation.keyword_id = keyword.keyword_id
    and keyword_translation.translation_id = translation.translation_id
    and lesson_keyword.lesson_id =lesson.lesson_id
    and keyword_translation.keyword_id = lesson_keyword.keyword_id 
    and lesson.title ="Operators" 
    and keyword_translation.language_id = "it" ;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itoperators= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var keytran1 = new student.ItIntroToGames(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_ID, row.Translation_word );
            // Add module to array
            itoperators.push(keytran1);
        }
        // Execute callback function
        callback(itoperators);
    });
};
exports.getItCryptography = function(callback) {
    // Create SQL statement
    var sql = ` 
    select lesson.Lesson_ID, lesson.Title,  keyword.Keyword_ID, keyword.Word, 
    translation.Translation_word, language.Language_name 
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language 
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID 
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID 
    and translation.Translation_ID = keyword_translation.Translation_ID 
    and keyword.Keyword_ID = keyword_translation.Keyword_ID 
    and language.Language_ID = keyword_translation.Language_ID 
    and lesson.title = "Introduction to Cryptography" 
    and keyword_translation.language_id = "it";`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itcrytographys= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var itcrypt = new student.ItCrytography(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Translation_word, row.Language_name);
            // Add module to array
            itcrytographys.push(itcrypt);
        }
        // Execute callback function
        callback(itcrytographys);
    });
};

exports.getItDatabase = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, keyword.Keyword_ID, keyword.Word,
    language.Language_name, translation.Translation_word
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "Introduction to Databases"
    and keyword_translation.language_id = "it" group by translation.Translation_word;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itdatabases= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var itdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            itdatabases.push(itdata);
        }
        // Execute callback function
        callback(itdatabases);
    });
};


exports.getEsDatabase = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, keyword.Keyword_ID, keyword.Word,
    language.Language_name, translation.Translation_word
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "Introduction to Databases"
    and keyword_translation.language_id = "es" group by translation.Translation_word;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esdatabases= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var esdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            esdatabases.push(esdata);
        }
        // Execute callback function
        callback(esdatabases);
    });
};

exports.getItIntroToPython = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "Introduction to Python"
    and language.Language_ID = "it" group by keyword.Keyword_ID order by keyword.Keyword_ID;`
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itintrotopythons= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var esdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            itintrotopythons.push(esdata);
        }
        // Execute callback function
        callback(itintrotopythons);
    });
};

exports.getEsIntroToPython = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "Introduction to Python"
    and language.Language_ID = "es" group by keyword.Keyword_ID order by keyword.Keyword_ID;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esintrotopythons= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var esdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            esintrotopythons.push(esdata);
        }
        // Execute callback function
        callback(esintrotopythons);
    });
};


exports.getEsIfElseCondition = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "If Else Conditions"
    and language.Language_ID = "es" group by keyword.Keyword_ID order by keyword.Keyword_ID;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esifelseconditions= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var esdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            esifelseconditions.push(esdata);
        }
        // Execute callback function
        callback(esifelseconditions);
    });
};

exports.getItIfElseCondition = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "If Else Conditions"
    and language.Language_ID = "it" group by keyword.Keyword_ID order by keyword.Keyword_ID;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itifelseconditions= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var itdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            itifelseconditions.push(itdata);
        }
        // Execute callback function
        callback(itifelseconditions);
    });
};


exports.getEsEsafteyPoster = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "E-Safety Poster Design"
    and language.Language_ID = "es" group by keyword.Keyword_ID order by keyword.Keyword_ID;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var esesafteyposters= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var esdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            esesafteyposters.push(esdata);
        }
        // Execute callback function
        callback(esesafteyposters);
    });
};

exports.getItEsafteyPoster = function(callback) {
    // Create SQL statement
    var sql = `
    select lesson.Lesson_ID, lesson.Title, lesson.Topic_ID, keyword.Keyword_ID, keyword.Word,
    translation.Translation_word, language.Language_name
    FROM lesson, keyword, lesson_keyword, keyword_translation, translation, language
    where keyword.Keyword_ID=lesson_keyword.Keyword_ID
    and lesson.Lesson_ID = lesson_keyword.Lesson_ID
    and translation.Translation_ID = keyword_translation.Translation_ID
    and keyword.Keyword_ID = keyword_translation.Keyword_ID
    and language.Language_ID = keyword_translation.Language_ID
    and lesson.title = "E-Safety Poster Design"
    and language.Language_ID = "it" group by keyword.Keyword_ID order by keyword.Keyword_ID;`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var itesafteyposters= [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var itdata = new student.LessonKeywords(row.Lesson_ID, row.Title, row.Keyword_ID, row.Word, row.Language_name, row.Translation_word);
            // Add module to array
            itesafteyposters.push(itdata);
        }
        // Execute callback function
        callback(itesafteyposters);
    });
};




