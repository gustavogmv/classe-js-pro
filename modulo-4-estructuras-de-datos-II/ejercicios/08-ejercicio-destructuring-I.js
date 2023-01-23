/**
 * Desestructura el objeto { uno: 1, dos: 2 } en dos variables: uno y dos.
 */

const obj = {uno: 1, dos: 2};
{
    const {dos, uno} = obj

    console.log(uno); // 1
    console.log(dos); // 2
}

{
    const {dos: uno, uno: dos} = obj

    console.log(uno); // 2
    console.log(dos); // 1
}
