namespace Subjects {
  export class Cpp extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    public getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingC) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}