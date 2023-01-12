import { registerDecorator, ValidationOptions, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService) {}

    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }
}

export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsNomeDeUsuarioUnicoConstraint,
        });
    };
}
  