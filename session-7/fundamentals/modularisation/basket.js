// Bring in courier-utils.js function 
import { getCourierByKey } from "./courier-utils.js";
import { getCustomerById } from "./customer-utils.js";

const transactionDetails = {
    courier: 'DHL',
    product: {
        name: 'Jeans',
        price: 4.20
    },
    customerId: 1,  
};

const courierAddress =  getCourierByKey(transactionDetails.customerId);

console.log(courierAddress);