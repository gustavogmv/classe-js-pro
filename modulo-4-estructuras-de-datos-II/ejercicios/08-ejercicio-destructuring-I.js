/**
 * Desestructura el objeto { uno: 1, dos: 2 } en dos variables: uno y dos.
 */

const obj = {uno_: 1, dos_: 2};
{
    const {dos_, uno_} = obj

    console.log(uno_); // 1
    console.log(dos_); // 2
}

{
    const {dos_: uno, uno_: dos} = obj

    console.log(uno); // 2
    console.log(dos); // 1
}
