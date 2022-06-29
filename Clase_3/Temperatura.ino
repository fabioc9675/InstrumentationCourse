/*
  En este Script de ejemplo se desarrolla un sistema de conversion 
  Analogico a digital de un sensor de temperatura, se presenta el modulo
  de conversion analogica, el muestreo de los datos cada segundo y el encendido
  y apagado de un LED

  Script desarrollado para el curso de Ensamble de dispositivos medicos
  Programa de Tecnologia Biomedica
  Universidad de Antioquia
*/

// Libreria para controlar el tiempo de muestreo, debe instalarla en el ARDUINO
#include <TimerOne.h>

// Inicializacion de las variables del programa
int ledState = LOW;                  // estado del LED
volatile unsigned long ADCcount = 0; // contador para realizar la conversion (debe contar hasta 1000 para convertir cada segundo)
int flADC = 0;                       // bandera que indica en que momento se debe hacer una conversion
const int led = LED_BUILTIN;         // Definicion del pin del LED, (LED_BUILTIN hace referencia al pin 13 del ARDUINO)

unsigned int adc0 = 0; // variable para la conversion ADC por el canal A0
unsigned int adc1 = 0; // variable para la conversion ADC por el canal A1

float temp0 = 0; // Variable para convertir de ADC0 a temperatura
float temp1 = 0; // Variable para convertir de ADC1 a temperatura

// Funcion para la inicializacion de los perifericos y funciones del microcontrolador
void setup()
{

  // Inicializacion de un pin como salida digital, replicar este codigo para la lampara y el motor
  pinMode(LED_BUILTIN, OUTPUT);

  // Inicializacion de la funcion de tiempo,
  Timer1.initialize(1000);
  Timer1.attachInterrupt(timerFunction); // ejecuta la funcion timerFunction cada 1ms

  // Inicializa la comunicacion serial
  Serial.begin(115200);

  // Inprime un mensaje para saber que el micro esta funcionando
  Serial.println("Hola Mundo");
}

// Funcion para el control del tiempo, se ejecuta cada 1 ms
void timerFunction(void)
{

  ADCcount++; // aunemta el contador cada que entra a la funcion
  if (ADCcount == 1000)
  {               // si el contador llega a 1000, es decir 1 segundo
    flADC = 1;    // habilita la bandera para conversion analogico a digital
    ADCcount = 0; // reinicia el valor del contador

    // este bloque de codigo pone a titilar el LED cada segundo
    if (ledState == LOW)
    {
      ledState = HIGH;
    }
    else
    {
      ledState = LOW;
    }
    digitalWrite(led, ledState);
  }
}

// Funcion principal se repite infinitas veces
void loop()
{

  if (flADC == 1) // si se activo la bandera de conversion
  {
    flADC = 0; // deshabilita la bandera de conversion, para que quede lista para activarse de nuevo

    // realiza la conversion analogico digital
    adc0 = analogRead(A0);
    adc1 = analogRead(A1);

    // Implementa la ecuacion de conversion entre ADC y valor de temperatura
    temp0 = (150.0 / 306.0) * adc0;
    temp1 = (25.0 / 1024.0) * adc1 + 15.0;

    // imprime por serial los valores medidos de temperatura
    Serial.print("ADC0 = ");
    Serial.print(adc0);
    Serial.print(", ADC1 = ");
    Serial.print(adc1);
    Serial.print(", TEM0 = ");
    Serial.print(temp0);
    Serial.print(", TEM1 = ");
    Serial.println(temp1);
  }
}
