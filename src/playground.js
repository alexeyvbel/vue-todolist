// eslint-disable

export default function () {
    console.log('Hello word!!!')


//     // eslint-disable-next-line no-debugger
//     debugger
//     // eslint-disable-next-line no-unused-vars
//     var firstName = 'Alexey'
//     // eslint-disable-next-line no-unused-vars
//     var age = 30 //age
//     // eslint-disable-next-line no-unused-vars
//     var isMale = true
//     // eslint-disable-next-line no-unused-vars
//     var dontKnow = null
//     // eslint-disable-next-line no-unused-vars
//     var a
// // eslint-disable-next-line no-unused-vars
//     var person = {
//         name: 'Alexey',
//         lastName: 'Belyanin'
//     }

    // var person = {
    //     name: 'Alexey',
    //     lastName: 'Belyanin'
    // }
    //
    // // eslint-disable-next-line no-unused-vars
    // function printUserInfo(user){
    //     console.log('Consoling log out person informations!')
    //     console.log('Hello ' + user.name + ' ' + user.lastName)
    // }
    //
    // printUserInfo(person)


    // var hours = 23
    // var seconds = hours * 60 * 60

    // console.log(seconds)
    
    function transformHoursToSeconds(hours) {
        return hours * 60 * 60
    }

    function printSomething(something){
        console.log(something)
    }

    printSomething(transformHoursToSeconds())

    printSomething((function () {
        console.log('hello word')
    }()))
    
    
    function countPersonBirthYear(personAge) {
        var currentYear = 2020
        return currentYear - personAge

    }

    countPersonBirthYear(30)

}