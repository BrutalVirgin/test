import fs from "fs"
import path from 'path'

function main(lines: number) {
    const filePath = path.join(__dirname, "/file.txt")
    let stream = fs.createReadStream(filePath)

    stream.on("data", function (chunk) {
        const splitData = chunk.toString().split('\r\n')

        const final = takeLines(splitData, lines)
        console.log(final)
    });
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