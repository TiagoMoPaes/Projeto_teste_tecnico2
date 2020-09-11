import { EscolaridadeEnum } from './escolaridade.enum';

export interface Usuario {
    id?: number;
    nome: string;
    sobrenome: string;
    email: string;
    dataNascimento: Date;
    escolaridade: EscolaridadeEnum;
}
