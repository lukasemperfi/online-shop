export enum Path {
    Home = '/',
    GenderCategory = '/:gender',
    GenderCategoryDetails = '/products/:gender/:id',
    ProductType = '/:gender/catalog/:productType',
    ProductTypeDetails = '/products/:gender/catalog/:productType/:id',
    Cart = '/cart',
    Admin = '/admin',
}
