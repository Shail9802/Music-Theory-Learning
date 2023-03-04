let notes = { 1: "A", 2: "A#", 3: "B", 4: "C", 5: "C#", 6: "D", 7: "D#", 8: "E", 9: "F", 10: "F#", 11: "G", 12: "G#" };
console.log(Object.entries(notes));
// let note="C"
// a=document.getElementById("p1")
function MajorScale(val) {
    if (val) {
        majorScale.innerHTML="";
        majorScaleNote.innerHTML="";
        let majorScaleStr="";
        let majorScaleName="";
        for (let i of Object.keys(notes)) {
            i = Number(i);
            if (notes[i] == val.toUpperCase()) {
                majorScaleStr+=notes[i]+" - "
                majorScaleName+=notes[i]+" Major Scale : "
                console.log(`${notes[i]}`);
                // console.log("type:", typeof i, i)
                if (i + 2 > 12) {
                    console.log(`${notes[(i + 2) - 12]}`)
                    majorScaleStr+=notes[(i + 2) - 12]+" - "
                } else {
                    console.log(`${notes[i + 2]}`)
                    majorScaleStr+=notes[(i + 2)]+" - "
                }

                if (i + 4 > 12) {
                    console.log(notes[(i + 4) - 12])
                    majorScaleStr+=notes[(i + 4)-12]+" - "

                } else {
                    console.log(notes[i + 4])
                    majorScaleStr+=notes[(i + 4)]+" - "
                }

                if (i + 5 > 12) {
                    console.log(notes[(i + 5) - 12])
                    majorScaleStr+=notes[(i + 5)-12]+" - "

                }else {
                    console.log(notes[i + 5])
                    majorScaleStr+=notes[(i + 5)]+" - "

                }

                if (i + 7 > 12) {
                    console.log(notes[(i + 7) - 12])
                    majorScaleStr+=notes[(i + 7)-12]+" - "
                }else {
                    console.log(notes[i + 7])
                    majorScaleStr+=notes[(i + 7)]+" - "
                }

                if (i + 9 > 12) {
                    console.log(notes[(i + 9) - 12])
                    majorScaleStr+=notes[(i + 9)-12]+" - "
                }else {
                    console.log(notes[i + 9])
                    majorScaleStr+=notes[(i + 9)]+" - "
                }

                if (i + 11 > 12) {
                    console.log(notes[(i + 11) - 12])
                    majorScaleStr+=notes[(i + 11)-12]+" - "
                }else {
                    console.log(notes[i + 11])
                    majorScaleStr+=notes[(i + 11)]+" - "
                }

                console.log(notes[i])
                majorScaleStr+=notes[(i)]

            }
        }

        majorScale.innerHTML=majorScaleStr;
        majorScaleNote.innerHTML=majorScaleName;
    }
}
