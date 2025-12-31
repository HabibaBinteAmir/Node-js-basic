const phones = [
    { name: 'htc', price: 20000, },
    { name: 'Iphone ', price: 300, },
    { name: 'xiomi', price: 40000, },
    { name: 'samsung', price: 560000, },
    { name: 'motorwala', price: 70000, },
];
function getCheapest(phone) {
    let cheap = phone[0];
    for (const items of phone) {
        if (items.price < cheap.price) {
            cheap = items;
        }

    }
    return cheap;
}
const myPhone = getCheapest(phones);
console.log(myPhone);
