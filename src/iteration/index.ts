export default function Repeat(x: string){
    const repeatCount = 5
    let result: string = ""
    for (let i = 0; i < repeatCount; i++) {
        result += x
    }
    return result;
}