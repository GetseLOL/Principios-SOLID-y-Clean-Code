// function sendEmail(){
//   //Verificar email

//   //Construir el cuerpo del mensaje

//   //enviar correo

//   // si sale bien

//   //true
// }

// function sendEmail(){
//   // Verificar si usuari existe

//   // Revisar contrase{a}

//   // Crear usuario en la base de datos

//   // si sale bien

//   return true
// }
//Parametros y argumentos

//Bien
// function sendEmail(to: string, subject: string, body: string) {}

// No muy bien
// function sendEmail(to: string, subject: string, body: string, cc: string) {}

interface Movie {
  title: string;
  description: string;
  rating: number;
  cast: string[];
}

// Ejercicio
(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBiographyById(id: string) {
    console.log({ id });
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }
})();

interface PayAmount {}

// Ejercicio 2
const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}): number => {
  if (isDead) return 1500;

  if (isSeparated) return 2500;

  return isRetired ? 3000 : 4000;
};

// Ejercicio 3
(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit(fruit: string): boolean {
    const fruits = ["manzana", "cereza", "ciruela"];
    return fruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores

  type fruitColor = "red" | "yellow" | "purple";

  function getFruitsByColor(color: fruitColor): string[] {
    const fruitsByColor = {
      red: ["manzana", "cereza", "ciruela"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColor).includes(color))
      throw new Error("Color no valido");

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";

    if (!isSecondStepWorking) return "Second step broken.";

    if (!isThirdStepWorking) return "Third step broken.";
    
    isFourthStepWorking ? "Working properly!" : "Fourth step broken.";
  }
})();
