const guestList = ["Kiran", "Imran", "Ayra", "Rohaan"];
guestList.push("Shama")
guestList.splice(2, 0, "Iram")
guestList.unshift("Usman")
// Iterate through the guest list and print an invitation for each person
for (let i = 0; i < guestList.length; i++) {
    const person = guestList[i];
    console.log(`Dear ${person},\n You are invited to dinner!`);
}

