

export class Restaurant {
    name: string = '';
    address: string = '';
    city: string = '';
    phone: string = '';
    website: string = '';
    imageUrl: string = '';
    facebook: string = '';
    email: string = '';
    openingTime: string = '';
    priceRange: string = '';
    restauranttype: string = '';
    description: string = '';
    moreInformation: string = '';
    additionalPreferences: string = '';
    sensitivePreferences: string = '';
    facilities: string = '';
    TypeOfBusiness: string = '';
    kosher: boolean;
    accessibility: boolean;
    gfMenu: boolean;
    showOnScreen: boolean = true
    id: string;
    lastmodi: string= '';

    constructor(restObj) {
        this.name = restObj['name']
        this.phone = restObj['phone']
        this.address = restObj['address']
        this.id = restObj.id
        this.lastmodi=restObj['lastmodi']
        this.email = restObj['email']
        if (restObj['links']) {
            this.facebook = restObj['links']['facebook']
            this.website = restObj['links']['website']
            this.imageUrl = restObj['links']['logo']
        }
        this.openingTime = restObj['openingTime']
        this.description = restObj['description']
        this.priceRange = restObj['priceRange']
        this.restauranttype = restObj['restauranttype']
        this.moreInformation = restObj['moreInformation']
        this.additionalPreferences = restObj['sensitivePreferences']['preferences']
        this.sensitivePreferences = restObj['sensitivePreferences']['preferences']
        this.facilities = restObj['facilities']
        this.kosher = restObj['sensitivePreferences']['kosher']
        this.accessibility = restObj['sensitivePreferences']['accessibility']
        this.gfMenu = restObj['sensitivePreferences']['gfMenu']
        this.TypeOfBusiness = restObj['TypeOfBusiness']
        this.city = restObj['city']
    }

}