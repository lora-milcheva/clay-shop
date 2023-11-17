const PRODUCTS = [
    {
        productGroupIds: ['101', '102', '103'],
        brandDescription: 'Here goes the Brand description',
        type: 'dress',
        categories:['woman', 'clothes'],
        products: [
            {
                id: '101',
                name: 'Black Valentino dress with tulle',
                label: 'popular',
                description: 'My second description',
                colorHEX: '#1B2437',
                price: '1315.00',
                images: ['../images/dress_02_01.jpg', '../images/dress_02_02.jpg'],
                sizes: [{ XS: 12 }, { S: 5 }, { M: 3 }],
            },
            {
                id: '102',
                name: 'Deep green Valentino dress with tulle',
                label: 'best seller',
                description: 'Dress with tulle and collar Peter Pan from REDValentino \n' +
                    '(Red Valentino). Peter Pan collar, tulle panels, sleeveless model, \n' +
                    'concealed back zipper and pleated skirt. Black colour.',
                colorHEX: '#127681',
                price: '1330.50',
                images: ['../images/dress_01_01.jpg', '../images/dress_01_02.jpg', '../images/dress_01_03.jpg', '../images/dress_01_04.jpg'],
                sizes: [{ S: 8 }, { M: 2 }],
            },
            {
                id: '103',
                name: 'Green Valentino dress with tulle',
                label: 'popular',
                description: 'Another description goes here',
                colorHEX: '#4b567a',
                price: '1355.00',
                images: ['../images/dress_03_01.jpg', '../images/dress_03_02.jpg'],
                sizes: [{ S: 8 }, { M: 2 }],
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
    },
    {
        productGroupIds: ['201', '202'],
        brandDescription: 'Here goes the Brand description',
        type: 'dress',
        categories:['woman', 'clothes'],
        products: [
            {
                id: '201',
                name: 'Black Valentino dress with tulle',
                label: 'popular',
                description: 'My second description',
                colorHEX: '#e7c3ab',
                price: '1315.00',
                images: ['../images/dress_04_01.jpg', '../images/dress_04_02.jpg',  '../images/dress_04_03.jpg'],
                sizes: [{ XS: 12 }, { S: 5 }, { M: 3 }],
            },
            {
                id: '202',
                name: 'Deep green Valentino dress with tulle',
                label: 'best seller',
                description: 'Dress with tulle and collar Peter Pan from REDValentino \n' +
                    '(Red Valentino). Peter Pan collar, tulle panels, sleeveless model, \n' +
                    'concealed back zipper and pleated skirt. Black colour.',
                colorHEX: '#7e98ad',
                price: '1330.50',
                images: ['../images/dress_04_04.jpg', '../images/dress_04_05.jpg',  '../images/dress_04_06.jpg'],
                sizes: [{ S: 8 }, { M: 2 }],
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

const loadProducts = () => {
    const filtered = PRODUCTS.filter(p => p.type === 'dress')

    const products = []
    filtered.forEach(el => {
        el.products.forEach(p => products.push(p))
    })

    return new Promise((resolve, reject) => {
        if (products.length === 0) {
            reject('Something went wrong!')
        }
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
}

const loadProductData = (productId) => {
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

const addProductReview = (productId, review) => {
    const productIndex = PRODUCTS.findIndex(p => p.productGroupIds.includes(productId))
    if (productIndex < 0) return
    PRODUCTS[productIndex].reviews.unshift(review)
}

export {
    loadProducts,
    loadProductData,
    addProductReview
}