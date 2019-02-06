var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'apple', type: 'fruit' },
    { name: 'orange', type: 'fruit' },
    { name: 'carrot', type: 'vegetable' },
];

var filteredProducts = [];

filteredProducts = products.filter((product) => {
    return product.type === 'vegetable'
});

console.log(filteredProducts);