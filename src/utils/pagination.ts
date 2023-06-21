 
 type LimitItems = number

 type TotalElemts = number
 
 export function getPages(limit : LimitItems, totalElements: TotalElemts) {

    const pahesArray = []
    const count = Math.ceil(totalElements / limit)
    
    for (let i =1; i <= count; i++) {
        pahesArray.push(i)
    }

    return pahesArray
    
}