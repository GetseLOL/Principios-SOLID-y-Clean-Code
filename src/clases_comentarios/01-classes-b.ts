(() => {
  type Gender = 'M' | 'F';

  // Objeto como propiedades

  interface PersonProps {
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthDate: Date;

    constructor({ name, gender, birthDate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthDate = birthDate;
    }
  }

  interface UserProps {
    email: string;
    rol: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class User extends Person {
    public email: string;
    public rol: string;
    public lastAccess: Date;

    constructor({
      email,
      rol,
      lastAccess,
      name,
      gender,
      birthDate
    }: UserProps) {
      super({ name, gender, birthDate });

      this.email = email;
      this.rol = rol;
      this.lastAccess = lastAccess;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    rol: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthDate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      rol,
      lastAccess,
      name,
      gender,
      birthDate
    }: UserSettingsProps) {
      super({
        email,
        rol,
        lastAccess,
        name,
        gender,
        birthDate
      });

      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: 'nose',
    lastOpenFolder: 'nose',
    email: 'nose',
    rol: 'nose',
    lastAccess: new Date(),
    name: 'nose',
    gender: 'M',
    birthDate: new Date()
  });

  console.log({ userSettings });
})();
