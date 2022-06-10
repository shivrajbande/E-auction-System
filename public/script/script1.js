const urlParams = new URLSearchParams(location.search);
var a,b;
for (const [key, value] of urlParams) {
    // console.log(`${key}:${value}`);
    a = key;
    b = value;
}
//console.log(a+" "+b);


//for present and past action
function fun1() {
    // console.log(given);
    //fetching present_table(first table) 
    var c = document.getElementById("mytable0");


    //rows,cells are predefined
    for (let rowss = 0; rowss < c.rows.length; rowss++)
    // for(let row of c.rows)
    {
        if (rowss == 0) {
            continue;
        }


        for (var cols = 0; cols < c.rows[rowss].cells.length; cols++) {
            if (cols == 4) {
                const getting_date = c.rows[rowss].cells[cols].innerHTML;
                //console.log(u);
                //console.log(getting_date);
                const end_date = new Date(getting_date);
                const present_date = new Date();
                //console.log(next);

                const timeinseconds = (end_date - present_date) / 1000;

                //console.log(timeinseconds);
                const dayss = Math.floor(timeinseconds / 3600 / 24);
                const hours = Math.floor(timeinseconds / 3600) % 24;
                const mins = Math.floor(timeinseconds / 60) % 60;
                const seconds = Math.floor(timeinseconds) % 60;

                //adding present auction to past auction if time and all ==0
                if (dayss <= 0 && hours <= 0 && mins <= 0 && seconds <= 0) {
                    //fetching previous table to add the present table row 
                    const z = document.getElementById("mytable1");
                    var i, j, row, p, g, r, s;
                    //present table row's data
                    row = c.rows[rowss];
                    p = row.cells[0];
                    g = row.cells[1];
                    r = row.cells[2];
                    s = row.cells[4];


                    //deleting present table row because time became zero
                    document.getElementById("mytable0").deleteRow(rowss);


                    //inserting the present table row into the past table
                    var row = z.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                  
                    


                    cell1.innerHTML = p.innerHTML;
                    cell2.innerHTML = `<a href = "#">${g.innerHTML}</a>`;
                    cell3.innerHTML = r.innerHTML;
                    cell4.innerHTML = s.innerHTML;
                    cell5.innerHTML =`<a href="/winner?myVar1=${g.innerHTML}">Click</a>`;


                }

                //adding duration to present auction if time not equals to zero
                else {
                    // console.log(dayss);
                    c.rows[rowss].cells[3].innerHTML = dayss + ":" + (hours) + ":" + (mins) + ":" + (seconds);
                }
            }
        }
    }
}




//fun1();

setInterval(fun1, 1000);

//for present and upcoming
function fun2() {
    //getting present and upcoming tables
    var up = document.getElementById("myclass2");
    var present = document.getElementById("mytable0");

    //rows are table _ rows present in up 
    var count = 0;
    //no of cells in a row
    //console.log(up.rows[0].cells.length);
    for (var rowss = 0; rowss < up.rows.length; rowss++) {
        //fetching data of column or cell
        // console.log(up.rows[rowss].cells[0].innerHTML);
        if (rowss > 0) {
            for (var cols = 0; cols < up.rows[rowss].cells.length; cols++) {
                //console.log(rows[rowss].cell[0].innerHTML);
                var timeinseconds, dayss, hours, mins, seconds, p, g, r, s;


                if (cols == 2) {
                    var start_date = up.rows[rowss].cells[cols].innerHTML;
                    // console.log(start_date);
                    var up_date = new Date(start_date);
                    var present_date = new Date();

                    timeinseconds = (up_date - present_date) / 1000;
                    //console.log(timeinseconds);

                    dayss = Math.floor(timeinseconds / 3600 / 24);
                    hours = Math.floor(timeinseconds / 3600) % 24;
                    mins = Math.floor(timeinseconds / 60) % 60;
                    seconds = Math.floor(timeinseconds) % 60;

                }
                if (dayss <= 0 && hours <= 0 && mins <= 0 && seconds <= 0) {

                    row = up.rows[rowss];
                    p = row.cells[0];
                    g = row.cells[1];
                    r = row.cells[2];
                    s = row.cells[4];

                    document.getElementById("myclass2").deleteRow(rowss);

                    var row = present.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);



                    cell1.innerHTML = p.innerHTML;
                    cell2.innerHTML = g.innerHTML;
                    cell3.innerHTML = r.innerHTML;
                    cell4.innerHTML = "";
                    cell5.innerHTML = s.innerHTML;
                    cell6.innerHTML =`<a href="/buyer?myVar1=${g.innerHTML}">Click</a>`;
                  //  cell6.innerHTML = `<td><a href="/buyer?myVar=${g.innerHTM}">Click</a><td>`;




                }
                else {
                    if (cols == 3) {

                        up.rows[rowss].cells[cols].innerHTML = dayss + ":" + (hours) + ":" + (mins) + ":" + (seconds);

                    }
                }

            }

        }

    }
}
setInterval(fun2,1000);
//fun2();





