export class DetallePedido{
    constructor(idPedido:number, idProducto:number, cantidad:number){
        this.idPedido=idPedido,
        this.idProducto=idProducto,
        this.cantidad=cantidad

    }
    idPedido:number=0;
    idProducto:number=0;
    cantidad:number=1;
    
    
}