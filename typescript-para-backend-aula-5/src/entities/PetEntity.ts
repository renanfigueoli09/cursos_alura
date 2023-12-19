import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../enum/EnumEspecie";
import AdotanteEntity from "./AdotanteEntity";
import EnumPorte from "../enum/EnumPorte";

@Entity()
export default class PetEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  nome: string;
  @Column()
  especie: EnumEspecie;
  @Column({ nullable: true })
  porte?: EnumPorte;
  @Column()
  dataDeNascimento: Date;
  @Column()
  adotado: boolean;
  @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
  adotante!: AdotanteEntity;
  constructor(
    nome: string,
    especie: EnumEspecie,
    dataDeNascimento: Date,
    adotado: boolean,
    porte?: EnumPorte
  ) {
    this.nome = nome;
    this.especie = especie;
    this.porte = porte;
    this.dataDeNascimento = dataDeNascimento;
    this.adotado = adotado;
  }
}
