/* 
  1. Arrays
  2. Booleanos
  3. Números
  4. Funciones
  5. Ejercicio
*/

// 1. Arrays
// Malo
const fruit = ["Apple", "Orange", "Banana", "Pineapple", "Mango"];

// Regular
const fruitsList = ["Apple", "Orange", "Banana", "Pineapple", "Mango"];

// Bueno
// const fruits = ['Apple', 'Orange', 'Banana', 'Pineapple', 'Mango'];

// Mejor
const fruitNames = ["Apple", "Orange", "Banana", "Pineapple", "Mango"];

// 2. Booleanos
// Malo
const write = true;
const read = false;
const noEmpty = false;

// Mejor
const canWrite = true;
const canRead = false;
const isNotEmpty = false;
const hasValue = false;

// 3. Números

// Malo
const fruits = 5;
const cars = 10;

// Mejor
const maxFruits = 5;
const minFruits = 10;
const totalFruits = 5;
const totalOfCars = 10;

// 4. Funciones

// Malo
function createUserIfNotExist() {}
function updateUserIfNotEmpty() {}
function sendEmailFieldsValid() {}

// Mejor
function createUser(){};
function updateUser(){};
// function sendEmail(){};

// 5. Ejercicio
(() => {
  // arreglo de temperaturas celsius
  const temperatureCelsius  = [33.6, 12.34];

  // Dirección ip del servidor
  const serverIp = "123.123.123.123";

  // Listado de usuarios
  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  // Listado de emails de los usuarios
  const userEmails = users.map((user) => user.email);

  // Variables booleanas de un video juego
  const canJump = false;
  const canRun = true;
  // const noTieneItems = true;
  const hasItems = true; 
  const isLoading = false;

  // Otros ejercicios
  // tiempo inicial
  const startTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - startTime;

  // Funciones
  // Obtiene los libros
  function getBook() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(u: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getAreaCuadrado(s: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printWork() {
    throw new Error("Function not implemented.");
  }
})();




