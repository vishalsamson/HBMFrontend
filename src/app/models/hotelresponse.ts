export class Hotelresponse {
    hotelId: number
    city: string
    hotelName: string
    address: string
    description: string
    averageRatePerDay: number
    email: string
    phone1: string
    phone2: string
    website: string
    isBooked: boolean

    constructor(
        hotelId: number,
    city: string,
	hotelName: string,
	address: string,
	description: string,
	averageRatePerDay: number,
	email: string,
	phone1: string,
	phone2: string,
	website: string,
	isBooked: boolean
    ) {
        this.hotelId=hotelId;
        this.city=city;
        this.hotelName=hotelName;
        this.address=address;
        this.description=description;
        this.averageRatePerDay=averageRatePerDay;
        this.email=email;
        this.phone1=phone1;
        this.phone2=phone2;
        this.website=website;
        this.isBooked=isBooked;
     }
}
