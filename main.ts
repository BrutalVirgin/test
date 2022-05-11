import fs from "fs";


function main(lines: number) {
    fs.readFile("file.txt", "utf8",
        (error, data) => {
            if (error) throw error
            const splitData = data.split('\r\n')

            const final = takeLines(splitData, lines)
            console.log(final)
        })
}

function takeLines(arr: string[], line: number): string[] {
    if (line > arr.length) {
        return arr
    } else {
        const position = arr.length - line
        let finalLines: string[] = []

        for (var i = position; i < arr.length; i++) {
            finalLines.push(arr[i])
        }
        return finalLines
    }
}

main(6)
