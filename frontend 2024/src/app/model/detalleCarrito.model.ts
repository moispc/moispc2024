export class Carrito{
    constructor(producto:string, idProducto:number, precio:number, cantidad:number, imageURL:string){
        this.producto=producto,
        this.id_producto=idProducto,
        this.precio=precio,
        this.cantidad=cantidad,
        this.imageURL=imageURL
    }
    producto:string="0";
    id_producto:number=0;
    precio:number=0;
    cantidad:number=1;
    imageURL:string="0"
}