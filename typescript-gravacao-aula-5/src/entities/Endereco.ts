import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  cidade: string;
  @Column()
  estado: string;

  constructor(cidade: string, estado: string) {
    this.cidade = cidade;
    this.estado = estado;
  }
}
