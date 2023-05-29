(() => {
  type Gender = 'M' | 'F';

  // Aplicando principio de responsabilidad única
  // Priorizar composición frente herencia, es decir evitar exten

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
    lastAccess: Date;
    rol: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public rol: string;

    constructor({ email, rol, lastAccess }: UserProps) {
      this.email = email;
      this.rol = rol;
      this.lastAccess = lastAccess;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      lastOpenFolder,
      workingDirectory
    }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    birthDate: Date;
    email: string;
    gender: Gender;
    lastAccess: Date;
    lastOpenFolder: string;
    name: string;
    rol: string;
    workingDirectory: string;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      birthDate,
      email,
      gender,
      lastAccess,
      lastOpenFolder,
      name,
      rol,
      workingDirectory
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthDate });
      this.user = new User({ email, rol, lastAccess });
      this.settings = new Settings({
        lastOpenFolder,
        workingDirectory
      });
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
