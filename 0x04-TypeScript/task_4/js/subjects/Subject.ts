namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
    experienceTeachingC?: number;
    experienceTeachingReact?: number;
    experienceTeachingJava?: number;
  }

  export class Subject {
    private teacher: Teacher;

    constructor(teacher: Teacher) {
      this.teacher = teacher;
    }

    public getTeacher(): Teacher {
      return this.teacher;
    }

    public setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}