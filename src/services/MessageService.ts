import { MensagemChat, MensagemInterface } from "../interfaces/Message";
import { UsuarioInterface, UsuarioMensagem } from "../interfaces/User";

class MensagemService {

    public getResultadoMensagensChat(mensagens: MensagemInterface[], idUsuario: string): MensagemChat[] {

        return mensagens.map(mensagem => ({
            texto: mensagem.texto, 
            createdAt: mensagem.createdAt,
            isRemetente: mensagem.remetente == String(idUsuario)
        }));
    };

    public getResultadoMensagemUsuario(mensagens: MensagemInterface[], usuario: UsuarioInterface): UsuarioMensagem {
        let ultimaMensagem:string = mensagens[0].texto!; 
        let dataUltimaMensagem:Date = mensagens[0].createdAt!; 

        return {
            _id: usuario._id,
            nome: usuario.nome,
            avatar: usuario.avatar,
            ultimaMensagem: ultimaMensagem,
            dataUltimaMensagem: dataUltimaMensagem,
       };
    }

    public retornaMensagensOrdenadas(usuariosMensagem: UsuarioMensagem[]): UsuarioMensagem[] {

        return usuariosMensagem.sort((a, b) => {
            return (a.dataUltimaMensagem ? 0 : 1) - (b.dataUltimaMensagem ? 0 : 1) 
                || -(a.dataUltimaMensagem > b.dataUltimaMensagem)
                || +(a.dataUltimaMensagem < b.dataUltimaMensagem);
        });
    };
}

export default new MensagemService();