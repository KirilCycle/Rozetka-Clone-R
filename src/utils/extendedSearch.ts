
// type keyWords = string[]
// type querry = string


// export function extendedSearch(keyWords: keyWords, querry: querry) {


//     const similiraties: any[] = []

//     function findMoreSimilar(source: string[], query: string) {

//         for (let i = 0; source.length > i; i++) {

//             let similarWordsCount = 0

//             for (let j = 0; source[i].length > j; j++) {
              
//                 if (query.includes(source[i][j])) {
//                     similarWordsCount += 1
//                 }
              
                
//             } 
//             if (similarWordsCount > 2) {

//                 source[i].length - similarWordsCount

//                 console.log(similarWordsCount)
//                 similiraties.push({ string: query, count:   source[i].length - similarWordsCount, source: source[i] })
//             }
//         }
//     }

//     findMoreSimilar(keyWords, querry)

//     return similiraties.reduce(function (sum, current) {

//         let res = { ...sum }

//         if (res.count > current.count) {
//             return res = current
//         }

//         return res
//     }, { count: 200 }).source

// }

export const pr = 200