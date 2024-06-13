const splitString = (inputString: string) => {
    const characters: string[] = [];
    const regex = /[\s\S]/gu;

    let match;

    while ((match = regex.exec(inputString)) !== null ) {
        characters.push(match[0]);
    }
    
    return characters
}



export default splitString;