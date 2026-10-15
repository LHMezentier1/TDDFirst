import Usuario from '../js/usuario'

const usuarios = [new Usuario(1, "sabour energetico", new Date('2000/10/01'), "132274784"), new Usuario(2, "sixseven", new Date("1999/05/10"), "432525626")]

test("When adding a user, pos 0 on the array should be the user itself", () =>{
    const us = new Usuario(3, "sixorseven", new Date("2001/02/13"), "424234424")
    const res = us.add(usuarios)
    console.log(res)
    expect(res[0]).toEqual(us);
})
