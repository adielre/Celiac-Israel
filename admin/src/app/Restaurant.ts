

export class Restaurant {
    name: string
    address: string
    phone: string
    website: string
    imageUrl: string
    facebook: string
    email: string
    openingTime: string
    priceRange: string
    foodType: string
    description: string
    moreInformation: string
    additionalPreferences: string
    sensitivePreferences: string
    facilities: string
    kosher: boolean
    accessibility: boolean
    gfMenu: boolean

    constructor(restObj) {
        this.name = restObj['namePlace']
        this.phone= restObj ['phone']
        this.address = restObj['Address']
        this.email= restObj ['email']
        this.facebook = restObj['links']['facebook']
        this.website = restObj['links']['website']
        this.openingTime = restObj['opening']
        this.description = restObj['Description']
        this.priceRange = restObj['priceRange']
        this.foodType=restObj['typeDishes']
        this.moreInformation=restObj['moreInfo']
        this.additionalPreferences=restObj['sensitivePreferences']['preferences']
        this.sensitivePreferences=restObj['sensitivePreferences']['preferences']
        this.facilities=restObj['facilities']
        this.kosher =restObj['sensitivePreferences']['kosher']
        this.accessibility=restObj['sensitivePreferences']['accessibility']
        this.gfMenu=restObj['sensitivePreferences']['gfMenu']
        
    }

}