

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
    additionalPreferences: string
    sensitivePreferences: string
    facilities: string
    kosher: boolean
    accessibility: boolean

    constructor(restObj) {
        this.name = restObj['name']
        this.address = restObj['Address']
        this.openingTime = restObj['opening']
        this.description = restObj['Description']
        this.priceRange = restObj['priceRange']
    }

}