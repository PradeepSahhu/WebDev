



alert("Second page is working");

function loadingData(){



// Only to work with one stored value of localStorage.
    // const Datas = localStorage.getItem('Data');
    // const headingText = document.getElementById("welcome");
    // console.log(headingText);
    // headingText.innerText = Datas;

    // Working with an object which is stored in localStorage...

   const AllData =  localStorage.getItem("Data");
   const ObjectData = JSON.parse(AllData);
   console.log(ObjectData);
   console.log(ObjectData.name);
   
   const headingText = document.getElementById("welcome");
   headingText.innerText = "Welcome "+ ObjectData.name;

   const para = document.getElementsByClassName("paragraph")[0];
   console.log(para);
   para.innerText =  "First Name " + ObjectData.first + "Last Name " + ObjectData.last + "Mobile Number " + ObjectData.mobile;
   // It will not work as HTMLcollection is not an array, it is a list of array but technicially different. fundamentally a list of html objects.
//    para.forEach(element => {
//         element.innerText = AllData.first + AllData.last+ AllData.mobile;
//    });

// three methods we can use with htmlcollection one is convert it into array and then ues forEach method or use for/of lor simply use for loop.
// for(element of para){
//     element.innerText = AllData.first + AllData.last+ AllData.mobile;
//     console.log(element.innerText);
// }

}



document.onload = loadingData();