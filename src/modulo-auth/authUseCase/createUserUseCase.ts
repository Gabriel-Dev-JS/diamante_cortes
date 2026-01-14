import user from "../../mockdata/data";

export interface PropsBody{
  email: string;
  senha: string;
  nome: string
}

class CreateUserUseCase {
  cadastrarUsuario(data:PropsBody) {
    const [usuario] = user.filter(val => val.email == data?.email || val.senha == data?.senha)

    if(usuario?.email || usuario?.senha){
      throw new Error()
    }

    const userIds = user.map(user => user)
    const idUsers = userIds[userIds.length - 1]

    const users = user.push(
        {
        "id":  Number(idUsers?.id) + 1,
        "nome": data?.nome,
        "email": data?.email,
        "senha": data?.senha
        }
    )

    return users
  }
}

// export default new CreateUserUseCase;
export { CreateUserUseCase };
