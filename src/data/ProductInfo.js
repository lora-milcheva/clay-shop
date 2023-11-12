const PRODUCTS = [
    {
        productGroupIds: ['123', '456', '789'],
        brandDescription: 'Here goes the Brand description',
        products: [
            {
                id: '123',
                name: 'Black Valentino dress with tulle',
                label: 'popular',
                description: 'My second description',
                colorHEX: '#1B2437',
                price: '1315.00',
                images: ['../images/dress_02_01.jpg', '../images/dress_02_02.jpg'],
                quantity: [{ XS: 12 }, { S: 5 }, { M: 3 }],
            },
            {
                id: '456',
                name: 'Deep green Valentino dress with tulle',
                label: 'best seller',
                description: 'Dress with tulle and collar Peter Pan from REDValentino \n' +
                    '(Red Valentino). Peter Pan collar, tulle panels, sleeveless model, \n' +
                    'concealed back zipper and pleated skirt. Black colour.',
                colorHEX: '#127681',
                price: '1330.00',
                images: ['../images/dress_01_01.jpg', '../images/dress_01_02.jpg', '../images/dress_01_03.jpg', '../images/dress_01_04.jpg'],
                quantity: [{ S: 8 }, { M: 2 }],
            },
            {
                id: '789',
                name: 'Green Valentino dress with tulle',
                label: 'popular',
                description: 'Another description goes here',
                colorHEX: '#32E0C4',
                price: '1355.00',
                images: ['../images/dress_03_01.jpg', '../images/dress_03_02.jpg'],
                quantity: [{ S: 8 }, { M: 2 }],
            },
        ],
        reviews: [
            {
                author: 'John Doe',
                email: 'john.doe@gmail.com',
                message: 'Example review',
                rating: 4
            },
            {
                author: 'Lora Milcheva',
                email: 'lora@gmail.com',
                message: 'Another review here',
                rating: 5
            }
        ]
    }
]

const loadData = (productId) => {
    const product = PRODUCTS.filter(p => p.productGroupIds.includes(productId))

    return new Promise((resolve, reject) => {
        if (product.length === 0) {
            reject('This product does not exist!')
        }
        setTimeout(() => {
            resolve(product);
        }, 1000);
    });
}

export {
    loadData
}