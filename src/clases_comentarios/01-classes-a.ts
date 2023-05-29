(() => {
  type Gender = 'M' | 'F';

  //No aplicando responsabilidad unica

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public rol: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(name, gender, birthDate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      rol: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthDate: Date
    ) {
      super(
        email,
        rol,
        lastAccess,
        name,
        gender,
        birthDate
      );
    }
  }

  const userSettings = new UserSettings(
    'nose',
    'nose',
    'nose',
    'nose',
    new Date(),
    'nose',
    'M',
    new Date()
  );

  console.log({ userSettings });
})();
