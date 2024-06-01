export class Car {
    _id: string
    placa: string;
    chassi: string;
    renavam: string;
    modelo: string;
    marca: string;
    ano: number;

    constructor(_id: string, placa: string, chassi: string, renavam: string, modelo: string, marca: string, ano: number) {
        this._id = _id;
        this.placa = placa;
        this.chassi = chassi;
        this.renavam = renavam;
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
    }

    
}
