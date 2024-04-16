/** Modifica la línea correspondiente para crear un string que use todas las variables */

/** Mi gato se llama Michi, tiene 3 años y pesa 4.5 kilos. Es de color blanco y negro y tiene una personalidad juguetón y curioso. 
Le encanta comer atún y tiene 5 juguetes diferentes. Necesita dormir al menos 16 horas al día. 
Ahora mismo está jugando con su pelota. ¡Es un gato muy feliz!
*/

let nombreGato = "Michi";
let edadGato = 3;
let pesoGato = "4.5 kg";
let colorGato = "blanco y negro";
let personalidadGato = "juguetón y curioso";
let comidaFavorita = "atún";
let numJuguetes = 5;
let numHorasSueño = 16;
let jugandoAhora = "pelota";

let historiaGato = "Mi gato se llama " + nombreGato + ", tiene " + edadGato + " años y pesa " + pesoGato + ". Es de color " + colorGato + " y es muy " + personalidadGato + ". Come un chingo de " + comidaFavorita + ". Sólo le he comprado " + numJuguetes + " juguetes" + ", pero ni siquiera los usa porque duerme " + numHorasSueño + "horas... Yo sé! Muchísimo!"; // modificar solamente  esta línea
console.log(historiaGato);
