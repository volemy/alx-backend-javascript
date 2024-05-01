namespace Subjects {
  export class Java extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    public getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingJava) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}