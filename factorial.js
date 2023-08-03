/* github: MartinPSDev
   Twitter: @Martin_dev_PS

   Este es el codigo para realizar la funcion factorial de un número en forma recursiva, 
   se puede hacer mucho mas corto pero lo hice de esta manera para entenderlo 
   paso por paso y de forma didactica  todo su funcionamiento.
*/
function nFactorial(n) {
    let resultado = 0;
    if (n=== 0 ) {
        console.log("\nLlegamos al caso base ", n, "\n");
        resultado = 1;
      } else {
        console.log("todavia no llegamos al caso base " + n);
        let f = nFactorial(n-1);
        console.log(f);
        resultado = n*f;
        
        console.log("Estamos saliendo de la recursion "+n+" "+f+" "+resultado)+"\n";}
        
    return resultado;
      
}
//A continuacion pueden ejecutar la función pasandole un numero como esté en el ejemplo debajo o bien ejecutarlo directamente con node.
//console.log(nFactorial(4));
