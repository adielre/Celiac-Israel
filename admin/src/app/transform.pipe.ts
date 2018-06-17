import { Pipe, PipeTransform } from "@angular/core"

@Pipe({ name: 'TranslatePipe' })
export class TranslatePipe implements PipeTransform {
    transform(value): number {
        
        
        const keys= {
            name: 'שם',
            address: 'כתובת',
            city: 'עיר',
            phone: 'מספר טלפון',
            website: 'אתר אינטרנט',
            imageUrl: 'קישור לתמונה',
            facebook: 'פייסבוק',
            email: 'דואר אלקטרוני',
            openingTime: 'שעות פתיחה',
            priceRange: 'טווח מחירים',
            restauranttype: 'סוג מסעדות',
            description: 'תיאור',
            moreInformation: 'מידע נוסף',
            additionalPreferences: 'העדפות נוספות',
            sensitivePreferences: 'רגישויות נוספות',
            facilities: 'מתקנים',
            TypeOfBusiness: 'סוג העסק',
            kosher : 'כשרות',
            accessibility: 'נגישות',
            gfMenu : 'תפריט נטול גלוטן',
            showOnScreen : 'הצג על המסך',
            lastmodi: 'תאריך אחרון של עדכון',
        }
        return keys[value]
    }
}