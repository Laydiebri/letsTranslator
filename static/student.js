"use strict";

class Student {
  // Student ID
  id;
  // Student first name
  first_name;
  // Student last name
  last_name;
  // Student programme
  programme;
  // Student modules and grades
  modules = [];

  constructor(id, first_name, last_name, programme) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.programme = programme;
  }
}

class Programme  {
  // Programme code
  code;
  // Programme name
  name;
  // Programme modules
  modules = [];

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

class Module  {
  // Module code
  code;
  // Module name
  name;

  constructor(code, name) {
    this.code = code;
    this.name = name;
  }
}

///////////////////////////////////////////////


class EALStudent  {
  // Module code
  Student_ID;
  // Module name
  First_name;
  Surname ;
  DOB;
  Email ;
  Year_group ;
  Language_ID ;
  Photo;


  constructor( Student_ID, First_name, Surname, DOB, Email , Year_group, Language_ID, Photo){
    
    this.Student_ID = Student_ID;
    this.First_name = First_name;
    this.Surname =   Surname;
    this.DOB = DOB;
    this.Email = Email;
    this.Year_group = Year_group;
    this.Language_ID = Language_ID;
    this.Photo = Photo;
  }
}

class Y7EALStudent  {
  // Module code
  Student_ID;
  // Module name
  First_name;
  Surname ;
  DOB;
  Email ;
  Year_group ;
  Language_ID ;
  Photo;


  constructor( Student_ID, First_name, Surname, DOB, Email , Year_group, Language_ID, Photo){
    
    this.Student_ID = Student_ID;
    this.First_name = First_name;
    this.Surname =   Surname;
    this.DOB = DOB;
    this.Email = Email;
    this.Year_group = Year_group;
    this.Language_ID = Language_ID;
    this.Photo = Photo;
  }
}


class Teacher  {
  // Module code
  Teacher_ID;
  Title;
  // Module name
  First_name;
  Surname ;
  
  Email ;

  subject_ID ;


  constructor( Teacher_ID, Title, First_name, Surname, Email, subject_ID){
    
    this.Teacher_ID = Teacher_ID;
    this.Title = Title;
    this.First_name = First_name;
    this.Surname =   Surname;
    this.Email = Email;
    this.subject_ID = subject_ID;
  }
}

class Lesson  {
  // Module code
  Lesson_ID;
  Teacher_ID;
  Title;
  // Module name
  Date;
  Period ;
  Teacher_ID;
  Topic_ID ;

  Class_Group_ID;


  constructor( Lesson_ID, Title, Date, Period,Teacher_ID ,Topic_ID, Class_Group_ID){
    
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Date = Date;
    this.Period = Period;
    this.Teacher_ID = Teacher_ID;
    this.Topic_ID = Topic_ID;
    this.Class_Group_ID = Class_Group_ID;
  }
}


class AllKeyword{
  // Module code
  Keyword_ID;
  Word;
  // Module name
  Language_name;
  Translation_word ;
;


  constructor( Keyword_ID, Word, Language_name, Translation_word ){
    
    this.Keyword_ID = Keyword_ID;
    this.Word = Word;
    this.Language_name = Language_name;
    this.Translation_word = Translation_word;
  }
}

class LessonTopic  {
  // Module code
  Lesson_ID;
  Title;
  // Module name
  Topic_ID;
  Topic_name ;


  constructor( Lesson_ID, Title, Topic_ID, Topic_name){
    
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Topic_ID= Topic_ID;
    this.Topic_name = Topic_name;
        
  }
}


class KeywordTranslation  {
  
  Lesson_ID;
  Title;
  Keyword_ID;
  Word ;
  Language_ID;
  Translation_word;


  constructor( Lesson_ID, Title, Keyword_ID, Word, Language_ID, Translation_word){
    
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Keyword_ID= Keyword_ID;
    this.Word = Word;
    this.Language_ID = Language_ID;
    this.Translation_word = Translation_word;
        
  }
}

class EsIntroToGames {
  // Module code
  Lesson_ID;
  Title;
  // Module name
  Keyword_ID;
  Word ;
  Language_ID;
  Translation_word;


  constructor( Lesson_ID, Title, Keyword_ID, Word, Language_ID, Translation_word){
    
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Keyword_ID= Keyword_ID;
    this.Word = Word;
    this.Language_ID = Language_ID;
    this.Translation_word = Translation_word;     
  }
}

class ItCrytography {
  // Module code
  Lesson_ID;
  Title;
  // Module name
  Keyword_ID;
  Word ;
  
  Translation_word;
  Language_name;


  constructor( Lesson_ID, Title, Keyword_ID, Word, Translation_word, Language_name){
    
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Keyword_ID= Keyword_ID;
    this.Word = Word;
    this.Translation_word = Translation_word;
    this.Language_name = Language_name;
        
  }
}

class LessonKeywords {
 
  Lesson_ID;
  Title;
 
  Keyword_ID;
  Word ;
  Language_name;
  Translation_word;
 
  constructor( Lesson_ID, Title, Keyword_ID, Word,Language_name,Translation_word){
   
    this.Lesson_ID = Lesson_ID;
    this.Title = Title;
    this.Keyword_ID= Keyword_ID;
    this.Word = Word;
    this.Language_name = Language_name;
    this.Translation_word = Translation_word;    
  }
}
