let notes = { 1: "A", 2: "A#", 3: "B", 4: "C", 5: "C#", 6: "D", 7: "D#", 8: "E", 9: "F", 10: "F#", 11: "G", 12: "G#" };
console.log(Object.entries(notes));
function MinorScale(val) {
    if (val) {
        minorScale.innerHTML="";
        minorScaleNote.innerHTML="";
        let minorScaleStr="";
        let minorScaleName="";
        for (let i of Object.keys(notes)) {
            i = Number(i);
            if (notes[i] == val.toUpperCase()) {
                minorScaleStr+=notes[i]+" - "
                minorScaleName+=notes[i]+" Minor Scale : "
                console.log(`${notes[i]}`);
                // console.log("type:", typeof i, i)
                if (i + 2 > 12) {
                    console.log(`${notes[(i + 2) - 12]}`)
                    minorScaleStr+=notes[(i + 2) - 12]+" - "
                } else {
                    console.log(`${notes[i + 2]}`)
                    minorScaleStr+=notes[(i + 2)]+" - "
                }

                if (i + 3 > 12) {
                    console.log(notes[(i + 3)-12])
                    minorScaleStr+=notes[(i + 3)-12]+" - "

                } else {
                    console.log(notes[i + 3])
                    minorScaleStr+=notes[i + 3]+" - "
                }

                if (i + 5 > 12) {
                    console.log(notes[(i + 5) - 12])
                    minorScaleStr+=notes[(i + 5)-12]+" - "

                }else {
                    console.log(notes[i + 5])
                    minorScaleStr+=notes[(i + 5)]+" - "

                }

                if (i + 7 > 12) {
                    console.log(notes[(i + 7) - 12])
                    minorScaleStr+=notes[(i + 7)-12]+" - "
                }else {
                    console.log(notes[i + 7])
                    minorScaleStr+=notes[(i + 7)]+" - "
                }

                if (i + 8 > 12) {
                    console.log(notes[(i + 8) - 12])
                    minorScaleStr+=notes[(i + 8)-12]+" - "
                }else {
                    console.log(notes[i + 8])
                    minorScaleStr+=notes[(i + 8)]+" - "
                }

                if (i + 10 > 12) {
                    console.log(notes[(i + 10) - 12])
                    minorScaleStr+=notes[(i + 10)-12]+" - "
                }else {
                    console.log(notes[i + 10])
                    minorScaleStr+=notes[(i + 10)]+" - "
                }

                console.log(notes[i])
                minorScaleStr+=notes[(i)]

            }
        }

        minorScale.innerHTML=minorScaleStr;
        minorScaleNote.innerHTML=minorScaleName;
    }
}
