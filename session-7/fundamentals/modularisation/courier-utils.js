// ES6 Node - 'export' 
export function getCourierByKey(key) {
    let courierDetails = {};

    switch(key) {
        case 'DHL': 
        courierDetails.name = 'DHL';
        courierDetails.address = {
            street: '1st DHL Street'
        };
        break;
        case 'UPS': 
        courierDetails.name = 'UPS';
        courierDetails.address = {
            street: '1st UPS Street'
        };
        break;
        case 'Hermes': 
        courierDetails.name = 'Hermes';
        courierDetails.address = {
            street: '1st Hermes Street'
        };
        break;
    }

    return courierDetails;
};