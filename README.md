# Password Strength Meter

## Descripción

Este proyecto consiste en un componente React llamado `PasswordStrengthMeter` que evalúa la fortaleza de una contraseña en tiempo real mientras el usuario escribe.

La fortaleza puede ser:

* `vacía`
* `débil`
* `media`
* `fuerte`
* `muy fuerte`

El proyecto fue desarrollado siguiendo el enfoque de **Test Driven Development (TDD)** utilizando Vitest y React Testing Library.

---

## Instalación

Instalar dependencias:

```bash
bun install
```

---

## Ejecutar el proyecto

Iniciar el servidor de desarrollo:

```bash
bun run dev
```

---

## Ejecutar los tests

Correr los tests con Vitest:

```bash
bun run test
```

---

## Tecnologías utilizadas

* React
* Vite
* Vitest
* React Testing Library
* jsdom

---

## Flujo TDD utilizado

El proyecto fue desarrollado siguiendo el flujo de Test Driven Development:

1. Configuración manual de Vite, Vitest y React Testing Library.
2. Escritura de todos los tests antes de implementar la funcionalidad.
3. Ejecución de tests fallando inicialmente.
4. Commit con los tests fallando.
5. Implementación de la lógica de fortaleza de contraseña.
6. Implementación del componente React.
7. Refactorización manteniendo todos los tests en verde.

---

## Arquitectura

El proyecto separa:

* La lógica pura de cálculo de fortaleza:

  * `src/utils/passwordStrength.js`

* El componente React:

  * `src/components/PasswordStrengthMeter.jsx`

También existen tests separados para cada parte:

* `passwordStrength.test.js`
* `PasswordStrengthMeter.test.jsx`

---

## Categorías de Fortaleza

* Contraseña vacía → `vacía`
* Menos de 8 caracteres → `débil`
* 8 o más caracteres sin números → `media`
* 8 o más caracteres con al menos un número → `fuerte`
* 8 o más caracteres con número y símbolo → `muy fuerte`
