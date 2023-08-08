

class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("El código ya está en uso.");
            return;
        }

        const newProduct = {
            id: this.nextId,
            title,
            description,
            price,
            thumbnail: `./img/${thumbnail}`,
            code,
            stock
        };

        this.products.push(newProduct);
        this.nextId++;
        console.log("Producto agregado correctamente.");
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);

        if (!product) {
            console.log(`Producto con ID ${productId} no encontrado.`);
        }

        return product;
    }
}

const pm = new ProductManager();

console.log(pm.getProducts());
pm.addProduct('desinfectante', 'Ayudin limpiadores de pisos', 200, 'desinfectante.png', 'P001', 15);
pm.addProduct('jabon de ropa', 'Skip jabon liquido para diluir', 150, 'jabonderopa.png', 'P002', 5);
pm.addProduct('limpia vidrios', 'Cif ultra rápido vidrios', 300, 'limpiavidrios.png', 'P003', 3);

console.log(pm.getProducts());

console.log(pm.getProductById(2));
pm.getProductById(14);