import http from "./http-common"
class HttpClient{
    getProducts(){
        return http.get('/products')
    }
    getProductById(id){
        return http.get(`/products/${id}`)
    }
    saveProduct(product){
        return http.post('/products',product)
    }
    delete(id){
        return http.delete(`/products/${id}`)
    }
    updateProduct(product,id){
        return http.put(`/products/${id}`,product)
    }

}
export default new HttpClient()