namespace Subjects {
  export class React extends Subject {
    public getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    public getAvailableTeacher(): string {
      const teacher = this.getTeacher();
      if (teacher.experienceTeachingReact) {
        return `Available Teacher: ${teacher.firstName}`;
      } else {
        return 'No available teacher';
      }
    }
  }
}