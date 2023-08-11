const messages = [
  "Aquí es donde todo comienza...",
  "Compromiso comprometido",
  "El control de versiones es horrible",
  "¡CONFIAR TODOS LOS ARCHIVOS!",
  "Lo mismo que hacemos todas las noches, Pinky: ¡tratar de conquistar el mundo!",
  "Bloquear S-foils en posición de ataque",
  "Este compromiso es una mentira",
  "¡Te lo explicaré cuando seas mayor!",
  "Aquí hay dragones",
  "Reinventando la rueda. Otra vez.",
  "Este no es el mensaje de confirmación que está buscando",
  "¡Batman! (este compromiso no tiene padres)",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };