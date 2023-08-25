export default function HelloWorld (name: string, language: string){
    let defaultLanguage = "Hello"
    if (language == "French"){defaultLanguage = "Salut"}
    if(name){
        return `${defaultLanguage}, ${name}`
    }
    return `${defaultLanguage} World`
}