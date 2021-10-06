const customers =[{
    id: 1,
    name: 'Dalen',
    address: {
        street: '1st customer street'
    } 
}];

export function getCustomerById(id) {
    customers.find(customer => customer.id === id);

    return customer;
};

function addPrivileges(id, customer) {
    let customerWithPrivilege = { ...customer };  
};