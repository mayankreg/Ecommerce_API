# Ecommerce_API

screenshot has been provided in asset/images folder

# DESCRIPTION
This is an E-commerce API made using tech-stack Node.Js & MongoDB. 

USING THE API:
1) clone or download & extract zip folder & open with editor
2) run npm init in the Ecommerce_API folder on terminal, make sure NodeJS server is running
3) run npm install
4) run npm start
5) open postman & make GET request on http://localhost:3000/products
6) may need to create some products 1st


CREATING A NEW PRODUCT: 
1) Open postman
2) POST request, http://localhost:3000/products/create 
3) Select Body tab below the url textarea and then select x-www-form-urlencoded
4) Add name(product1) & quantity(10) as the keys and set the desired values for the keys.
5) Message saying New product created successfully.
6) Product is created, validate it using GET request, http://localhost:3000/products

DELETING A PRODUCT:
1) Copy the object id of the product you want to delete.
2) add the id after products/, http://localhost:3000/products/6427c96a812c48062a222efb
3) Make a DELETE request.
4) Message saying Product deleted successfully.

UPDATING THE QUANTITY OF A PRODUCT:
1) Copy the object id of the product whose quantity you want to update
2) Put the id after products/
3) After putting the id add /update_quantity/?number={x}, x is quantity via which value will be updated (+/-)
4) the url, http://localhost:3000/products/64227a12abef9cb0ea86de17/update_quantity?number=10
5) Make a POST request and you should get a message updated successfully & produc description 

